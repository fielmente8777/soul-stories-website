import json,re,html,collections,csv
from functools import lru_cache
from pathlib import Path
from bs4 import BeautifulSoup
R=Path(__file__).resolve().parents[1];P=R/'docs/soulstorries-audit-2026-10-30';d=json.loads((R/'src/data/legacy-content.json').read_text());redirects={x['source']:x['destination'] for x in json.loads((R/'migration-redirects.json').read_text())}
def normalize(s):return re.sub(r'[^a-z0-9]+','',html.unescape(s).lower())
def target(p):
 p=p.rstrip("/") or "/"
 visited=set()
 while p.rstrip('/') in redirects:
  key=p.rstrip('/');assert key not in visited;visited.add(key);p=redirects[key].rstrip('/')
 return p or '/'
@lru_cache(maxsize=None)
def doc(p):
 p=target(p);f=R/'.next/server/app'/('index.html' if p=='/' else p.lstrip('/')+'.html')
 if not f.exists():return None
 s=BeautifulSoup(f.read_text(),'html.parser')
 for n in s.find_all(['script','style']):n.decompose()
 return s
results=[]
for r in json.loads((P/'source-evidence.json').read_text())['urls']:
 s=doc(r['path']);results.append({'old_path':r['path'],'old_status':r['status'],'new_path':target(r['path']),'mapping':'redirect' if target(r['path'])!=r['path'] else 'retained','rendered':bool(s),'title':s.title.get_text() if s and s.title else ''})
missing=[x['old_path'] for x in results if not x['rendered']]
content_fail=[];checked=0
existing={'/','/about-us','/kafuli-cafe','/contact-us','/wellness','/blogs','/thank-you'}
for path,page in d['pages'].items():
 if path in existing or path.startswith('/you-may-also-like/'):continue
 s=doc(path)
 if not s:continue
 actual=normalize((s.find('main') or s).get_text(' ',strip=True))
 for b in page['blocks']:
  if b['type']!='html':continue
  expected=normalize(BeautifulSoup(b['html'],'html.parser').get_text(' ',strip=True));checked+=1
  if expected not in actual:content_fail.append({'path':path,'text':expected[:160]})
for slug,blog in d['blogs'].items():
 s=doc('/blogs/'+slug);actual=normalize((s.find('main') or s).get_text(' ',strip=True));expected=normalize(BeautifulSoup(blog['content'],'html.parser').get_text(' ',strip=True));checked+=1
 if expected not in actual:content_fail.append({'path':'/blogs/'+slug,'text':expected[:160]})
for path,blocks in d['supplements'].items():
 s=doc(path);actual=normalize((s.find('main') or s).get_text(' ',strip=True))
 for b in blocks:
  expected=normalize(BeautifulSoup(b['html'],'html.parser').get_text(' ',strip=True));checked+=1
  if expected not in actual:content_fail.append({'path':path,'text':expected[:160]})
for faq in d['faqs']:
 s=doc('/');actual=normalize(s.get_text(' ',strip=True));expected=normalize(BeautifulSoup(faq['answer'],'html.parser').get_text(' ',strip=True));checked+=1
 if expected not in actual:content_fail.append({'path':'/','text':expected[:160]})
# Crawl all rendered internal links, including deep archive and restored page links.
broken={};files=list((R/'.next/server/app').rglob('*.html'));internal=set()
for f in files:
 s=BeautifulSoup(f.read_text(),'html.parser')
 for a in s.select('a[href]'):
  href=a['href'].split('#')[0].split('?')[0]
  if not href.startswith('/') or href.startswith('//') or not href:continue
  internal.add(href)
  if (R/'public'/href.lstrip('/')).is_file() or href.startswith('/_next/'):continue
  if not doc(href):broken.setdefault(href,[]).append(str(f.relative_to(R/'.next/server/app')))
# Ensure every internally stored image/video dependency exists before deployment.
asset_missing=[]
for match in re.finditer(r'"(?:src|image)":\s*"(/[^"\\]+)"',(R/'src/data/legacy-content.json').read_text()):
 if not (R/'public'/match.group(1).lstrip('/')).is_file():asset_missing.append(match.group(1))
report={'source_urls':len(results),'rendered_source_equivalents':sum(x['rendered'] for x in results),'missing_routes':missing,'source_content_checks':checked,'content_failures':content_fail,'internal_links_checked':len(internal),'broken_internal_links':broken,'missing_assets':sorted(set(asset_missing))}
(P/'verification.json').write_text(json.dumps(report,indent=2));print(json.dumps({**report,'broken_internal_links':{k:v[:3] for k,v in broken.items()}},indent=2))
