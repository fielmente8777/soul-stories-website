"""Compare extracted original content against built HTML; no third-party dependencies."""
import html, json, re
from html.parser import HTMLParser
from pathlib import Path
ROOT = Path(__file__).resolve().parents[1]
DOC = ROOT / 'docs/soulstorries-audit-2026-10-30'
class VisibleText(HTMLParser):
    def __init__(self):
        super().__init__(); self.parts = []; self.hidden = 0
    def handle_starttag(self, tag, attrs):
        if tag in ('script', 'style', 'noscript'): self.hidden += 1
    def handle_endtag(self, tag):
        if tag in ('script', 'style', 'noscript'): self.hidden = max(0, self.hidden - 1)
    def handle_data(self, text):
        if not self.hidden: self.parts.append(text)
def norm(text): return re.sub('[^a-z0-9]+', '', html.unescape(text).lower())
files = [f for f in (ROOT / '.next/server/app').rglob('*.html') if not f.name.startswith('_')]
assert files, 'Build the site first'
texts = []
for file in files:
    parser = VisibleText(); parser.feed(file.read_text()); texts.extend(parser.parts)
actual = norm(' '.join(texts))
source = json.loads((DOC / 'full-text-inventory.json').read_text())
exceptions = json.loads((DOC / 'full-text-exceptions.json').read_text())
allowed = {norm(x['text']) for x in exceptions}
missing = [x for x in source if norm(x['text']) not in actual and norm(x['text']) not in allowed]
result = {'source_blocks': len(source), 'rendered_html_files': len(files), 'matched_blocks': sum(norm(x['text']) in actual for x in source), 'documented_exceptions': len(exceptions), 'unexplained_missing': missing}
print(json.dumps(result, ensure_ascii=False, indent=2))
raise SystemExit(bool(missing))
