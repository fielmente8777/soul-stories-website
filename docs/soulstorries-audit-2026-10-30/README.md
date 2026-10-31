# Soul Storries: original website to test website audit

Audit date: 30 October 2026. Original: https://soulstorries.com/. Source branch: `codex/soulstorries-performance-20261029` at `7e564639`. Updated preview branch: `codex/soulstorries-content-parity-20261030`.

The original site's published content is now available in the new site's design. Original content URLs are retained or mapped to a specific equivalent. This is a preview deployment; the original domain has not been switched.

## Coverage and evidence

The audit combined all 12 XML child sitemaps, a recursive internal-link crawl, the public WordPress content API (including custom post types), and the original URL inventory in the repository. The 74 sitemap entries include two WordPress header/footer template query URLs; those are implementation templates rather than independent guest pages. Following public API and internal links expanded the checked inventory to **125 reachable URLs**.

| Check | Result |
| --- | --- |
| Original URLs fetched | 125; all returned HTTP 200 after following original redirects |
| Original URL equivalents in the built preview | 125 / 125 |
| Content block and complete-article comparisons against rendered HTML | 300 passed; zero missing comparisons |
| Distinct rendered internal link targets checked | 112; zero broken |
| Referenced migrated media files checked | Zero missing local files |
| TypeScript and production build | Passed; 126 generated build entries, including framework and metadata endpoints |
| Browser verification | See the pull request for deployed checks |

[Every old URL and its new target](url-mapping.csv), [source evidence](source-evidence.json), and [machine-readable validation results](verification.json) accompany this report.

## Content restored or completed

| Area | Original content and preview change |
| --- | --- |
| Homepage | Restored the main headline, four audience segments, five original wellness-program links, six premium amenities, full Kafuli introduction, original films, estate-distance list, recent stories and all 12 FAQs. |
| Founder story | Restored the missing two-paragraph “A Profound Awakening” section and the original food-philosophy paragraph alongside the existing origin story. |
| Villas | Preserved all five villas, descriptions, bedroom details and published prices. Retained 25 original gallery photos alongside existing new-site photos. Restored Flora amenities that were commented out. Fixed villa links from landing-page cards. |
| Group getaways | Added dedicated Destination Wedding, Corporate Events, and Together and Celebrations pages, including the published capacities, descriptions, amenities, hygiene information and enquiry access. Existing combined celebration pages remain available. |
| Wellness | Restored all five original detail pages: Heal Your Life, Yoga Retreat, Spa Menu, Sleep Reboot and Stress to Stillness. Preserved the original schedules, therapy tables and day-by-day lists. Added discoverable links from the homepage and wellness page. |
| Experiences | Restored the dedicated experience page, meaningful descriptions and original images. Retained the four old experience detail URLs. |
| Nearby attractions | Preserved 15 attraction detail pages, including five published custom-post pages absent from the sitemap. Linked them from the nearby-places page. Restored the explicitly labelled estate-distance list. |
| Press | Restored the press listing and four individual features with original descriptions and images. |
| Blogs | All 13 articles were already present, but original body text is now rendered from the published source, including links, lists and emphasis. The 13 original root-level URLs redirect individually to their corresponding `/blogs/` articles. |
| Blog archives | Restored 11 category and 34 tag archives, with original post memberships. Added category/tag links to articles. |
| Films and media | Retained four original films locally with playback controls and deferred loading. A total of 99 original media files were added; other matching media and the café menu PDF were already available locally. |
| Contact and enquiries | Restored missing contact paragraphs, made contact details clickable, added guest count, preserved the selected country code, and corrected local-date handling and invalid same-day checkout validation. |
| Guest policies | Restored the published guest-policy FAQs and cancellation/credit-note wording on working pages. Repaired the test footer's previously broken policy links. |

## URL and search continuity

- Five old `/villa/` URLs redirect individually to their matching `/villas/` page.
- Thirteen original blog URLs redirect individually to their matching article.
- Five short wellness aliases and the legacy `/spa/` URL redirect to the matching original program.
- Duplicate event URLs map to the relevant dedicated event page.
- Restored content and taxonomy pages have canonical URLs. The wellness page's incorrect café canonical was corrected, and villa canonical metadata now uses the supported `alternates` key.
- Broken social-preview image URLs now point to retained assets. The inherited reference to another resort in the home description was removed.
- Added a sitemap for the canonical new-site content and preview-specific crawl protection. Unknown pages and unknown villa/blog slugs return a real not-found response.
- The dormant `redirects.json` file contains broad redirects to an external hotel brand. It remains disabled. The new redirect file contains explicit, local equivalents only.

## Findings that require the owner's content decision before a domain launch

1. **Original legal pages were unavailable.** `/privacy-policy/`, `/terms-and-conditions/`, `/check-in-policy/`, and `/cancellation-policy/` returned 404 on the original host. The old footer displayed policy labels without usable policy destinations. The preview's guest and cancellation pages use the published FAQs; its privacy page is a factual operational notice based on the implemented enquiry and analytics tools. It is not a recovered owner-approved full legal policy.
2. **Conflicting distance references.** The old site lists estate distances such as Gun Hill 19 km and Kempty Falls 36 km, while separate attraction cards show 3.1 km and 16.8 km without the same origin. The estate list is restored with an explicit origin label. Existing attraction-page numbers remain source content and should be checked before launch.
3. **Wellness schedule inconsistencies.** The old Sleep Reboot page contains “Stress to stillness” headings; several retreat tables contain inconsistent time slots. Published schedule values have been preserved rather than silently invented or corrected.
4. **Placeholder content.** The old experience page had a “1500 years old temple” card containing Lorem Ipsum. This placeholder card is excluded. Dummy reviews and developer attribution were not promoted as real guest content. Some old experience descriptions also contain unrelated pasted bonfire or barbecue sentences; these remain identifiable in the source content for editorial review.
5. **Legacy transaction scaffolding.** The old WooCommerce shop/cart/checkout/product pages and account/demo paths were reachable, but the test site has no configured reservation/payment/account backend. Their URLs map to the working booking-enquiry or contact experience. The new enquiry form explicitly says that an enquiry does not confirm a booking or take payment. No live reservation, payment or CRM test lead was created during this audit.
6. **Published rates, capacities and policies are historical source statements.** Current commercial terms should be confirmed by the property before domain launch; no new prices or package inclusions were invented.

## Reproduce the checks

Run `npm ci`, then `npm run build`. In the managed audit environment the build needed the runtime-only setting `NEXT_TURBOPACK_EXPERIMENTAL_USE_SYSTEM_TLS_CERTS=1` for Google Fonts TLS; no TLS verification was disabled. Install Beautiful Soup in a Python environment and run `python scripts/verify-content-audit.py` to check the retained source URL inventory, original content blocks, complete articles, internal targets and media dependencies against the generated HTML.

The managed local preview wrapper passed Vite-only flags to Next.js, so local browser QA was unavailable. Deployed Vercel pages are used for browser verification. Form payload and validation changes were inspected without creating a real CRM lead.
