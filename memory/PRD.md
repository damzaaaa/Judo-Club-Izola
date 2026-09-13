# Judo Klub Izola - Website PRD

## Original Problem Statement
Build a modern, professional and premium-looking website for Judo klub Izola in Slovenian language. Design: minimalist, elegant with white background, black text and gold accents.

## User Personas
- **Club Members**: View news, gallery, contact info
- **Potential Members**: Learn about club, find contact details
- **Parents**: Information about youth programs

## Core Requirements
- Multi-page website: Domov, O nas, Galerija, Kontakt
- Slovenian language throughout
- White background with black and gold (#D4AF37) accents
- Responsive design (mobile-friendly)
- High-quality images display
- Gallery with event-based organization and lightbox

## Implementation Status (Dec 2025)

### Completed
- [x] Full-screen hero with Andrea Leški training image
- [x] Hero click-to-scroll to news functionality
- [x] News article with full Andrea Leški visit content
- [x] Gallery page with event cards (click to view all event photos)
- [x] Navigation with sticky header and mobile menu
- [x] O nas (About) page with extensive club history
- [x] Kontakt (Contact) page with placeholders
- [x] Footer with contact info
- [x] Premium design with animations and hover effects
- [x] Outfit + Manrope fonts
- [x] History timeline with 15+ images
- [x] Facebook social links
- [x] Emergent watermark removed

### O nas Page Features
- Club history from 1998
- Ministry recognition documents
- Literature section (2 books)
- Judo kata section with images
- Education and camps sections
- "Judo danes" section with side-by-side equal-sized images
- "Naši trenerji" section with 4 trainers + photos:
  - Iztok Babič (profesor športne vzgoje)
  - Jaša Babič (diplomant športnega treniranja)
  - Mojmir Kovač (trener 2. stopnje)
  - Oleksander Makhovsky (pomočnik trenerja)

### Removed Per User Request
- 4 logos image at bottom of homepage
- Stats section (10+ years, 100+ articles)
- "Temelji juda" values section
- 5th image in history section

## Prioritized Backlog

### P0 (User to provide)
- Contact details (address, phone, email)
- Training schedule

### P1 (Future)
- Add more events to gallery
- Additional photos for sections

## Architecture
- Frontend: React + Tailwind CSS + Shadcn/UI
- Routing: React Router
- No backend needed (static content)

## Update (fork session, 2026-06)
- Added new "Poletje na tatamiju" themed section on O nas page (after "Judo kampi" section, warm cream #FBF8F1 background):
  - Full 30+ years judo camps story with 11 subsections (Prvi kamp, Znanje generacij, Prijateljstvo, Olimpijske medalje, Drugi kamp, Nina Jajic, 16 dni juda, Obala, Evropski mladinski pokal, Otroci)
  - 3 new photos: group photo with Andreja Leski, master belt exam, Nina Jajic diploma (1. DAN)
  - Gold-bordered highlight quotes for key messages
- Verified via screenshots: section header, images, and following sections render correctly.

## Update (fork session 2, 2026-06)
- Multilingual support added: Slovenian (default) + Italian + English, full content translation of ALL pages.
  - i18n system: /app/frontend/src/i18n/{LanguageContext.jsx, sl.js, en.js, it.js}. App wrapped in LanguageProvider. useLang() hook -> {lang, changeLang, t}. Persists to localStorage 'jki-lang', sanitized against LANGS, sets <html lang>.
  - Flag switcher (rounded-rect flags via flagcdn) in Navigation, desktop + mobile (mobile testids suffixed '-mobile' to avoid duplicates).
- New Galerija event 'Poletje na tatamiju – 16 dni juda v Izoli' (2026, 7 photos) added as first event; text translated in all 3 langs. Gallery data = EVENTS_META (image URLs) merged with translated t.galerija.events.
- Lightbox layout reworked to flex-1 min-h-0 + object-contain so image+caption+thumbnails always fit viewport (fixed HIGH bug: thumbnails were off-screen). Added DialogTitle for a11y, translated aria-labels.
- Verified via testing_agent (iteration_4) + screenshots: SL default, EN/IT on all routes, persistence, all 3 gallery events + lightbox nav, mobile switcher, lightbox thumbnails clickable at 1920x1080.

## Update (fork session 2b, 2026-06)
- New gallery event 'Andreja Leški in naša ekipa' (id andreja-in-ekipa-2026, 4 photos: group with kids [cover], Diana & Andreja demonstration, camp bow lineup, Jaka physiotherapy). Translated SL/EN/IT. Placed 2nd, after Poletje na tatamiju.
- Kontakt real data filled: phone +386 31 625 170, email iztok.babic8@gmail.com (note 'Iztok Babič') in all 3 languages; Footer now has clickable tel:/mailto: links.
- NOTE: club street ADDRESS still placeholder ('Natančen naslov bo dodan') - user has not provided it yet. Training schedule also still placeholder.
- Verified via screenshots: 4 event cards, new lightbox works (thumbnails clickable), Kontakt shows real phone/email.

## Update (fork session 2c, 2026-06)
- Kontakt completed: address 'Osnovna šola Dante Alighieri, Izola' (translated in 3 langs), live Google Maps embed (keyless ?output=embed) pinned on the school, per-location notes (Izola = telovadnica OŠ Dante Alighieri).
- New enrolment section on Kontakt (data-testid kontakt-enroll-section): enrollment poster image (asset qmh70ujo_IZOLA Vpis za vse skupine.png) + translated schedule cards: 1-2 r. OŠ tor/čet 16.30-18.00, 3-5 r. OŠ tor/čet 18.00-20.00, Judo vrtec sre/pet 16.30-17.30 + note about alternative times. Hours field in contact info filled with real schedule.
- Footer address updated in all 3 languages. Verified via screenshots (map + poster + schedule render correctly in SL).

## Update (fork session 3, 2026-06) — SEO, favicon, watermark, enrolment teaser
- Enrolment teaser added on homepage (Domov.jsx, data-testid enroll-teaser + enroll-teaser-cta), dark gold-accent band linking to /kontakt#vpis. Kontakt enrol section given id="vpis" + scroll-mt-20; Kontakt.jsx uses useLocation to smooth-scroll to #vpis on load. Translations: domov.enrollTeaser in sl/en/it. VERIFIED: clicking CTA lands on and scrolls to vpis section.
- Emergent watermark REMOVED: deleted emergent-main.js badge script (and posthog + hiding CSS) from public/index.html. grep count of emergent-main.js = 0.
- Favicon = club logo: downloaded club logo, generated public/{favicon.ico, logo192.png, logo512.png, apple-touch-icon.png} via PIL. Linked in index.html + manifest.json. Served 200.
- SEO overhaul:
  - public/index.html: <html lang=sl>, rich Slovenian title/description, keywords (judo obala, judo koper, judo portorož, judo ankaran, judo izola, judo klub izola, ...), OpenGraph + Twitter cards, geo meta, hreflang alternates, JSON-LD SportsClub (address OŠ Dante Alighieri Izola, geo, areaServed Izola/Koper/Ankaran/Portorož, phone, email, foundingDate 1998).
  - react-helmet-async added (index.js wrapped in HelmetProvider). New component src/components/SEO.jsx sets per-page title/description/keywords/canonical/OG. Applied to Domov, ONas, Galerija, Kontakt. Per-page SEO strings in i18n .seo.{domov,onas,galerija,kontakt} for all 3 langs.
  - public/robots.txt (allow all + sitemap) and public/sitemap.xml (4 routes) created.
- IMPORTANT: canonical/OG/sitemap URLs currently use preview domain (izola-judo-club.preview.emergentagent.com). MUST update to the real custom domain after deployment.

## Update (fork session 3b, 2026-06)
- Kontakt: removed the "Urnik treningov" contact-info item (schedule 16.30–20.00 / 16.30–17.30) and the Clock import; contact info now shows only Naslov, Telefon, E-pošta.
- Kontakt: added "Find us on Google" block (data-testid google-block / google-cta) with 5 gold stars + CTA linking to Google Maps search for the club (GOOGLE_URL constant). Translations kontakt.google in sl/en/it. NOTE: uses a Maps search URL — swap to a direct write-review link (search.google.com/local/writereview?placeid=...) once the club shares its Google Business Profile / Place ID.
- Italian nav "Home": confirmed correct/idiomatic Italian usage; left unchanged.

## Update (fork session 4, 2026-06) — Two new pages + nav restructure + weekly schedule
- Added TWO new pages, placed in nav BEFORE Kontakt. Nav order (6 items) now: Domov, O nas, Galerija, Strokovna znanja (/strokovna-znanja), Kampi in prireditve (/kampi-in-prireditve), Urnik in kontakt (/kontakt). Nav desktop breakpoint moved md->lg (gap-6, text-sm, whitespace-nowrap) so 6 items fit; verified no overflow at 1920 & 1024, mobile hamburger <lg.
- StrokovnaZnanja.jsx: HTML5 <video> player (Iztok Babič 2011 JZS lecture, 55MB mp4) + two PDF "topic" cards (aesthetic gold-accent hover cards, NOT embedded PDFs), each opens PDF in new tab. PDFs: Sodobni zgodovinski pogledi (2qe765rn), Mladi športniki v antičnih OI (3nsxkdwe).
- KampiInPrireditve.jsx: European Junior Cup announcement banner (Arena Bonifika, konec novembra, 'Promocija v pripravi' placeholder) + camps + Poletje na tatamiju content MOVED from ONas. Page reuses t.onas.camps and t.onas.tatami translations; local image consts + Prose/GoldQuote/SubTitle helpers.
- ONas.jsx: removed Judo camps + Poletje na tatamiju JSX (155 lines) and now-unused consts/helpers (tm, GoldQuote, SubTitle, 6 image consts). History sections intact.
- Kontakt.jsx: renamed nav label to 'Urnik in kontakt' (EN 'Schedule & contact', IT 'Orario e contatti'). New kontakt-schedule-section shows weekly schedule image (URNIK TRENINGOV VSEH SKUPIN.jpg, u6mawded). Removed old enrol rows table; kept enrol poster + Google block.
- i18n: nav.links updated + seo.strokovna/seo.kampi + top-level strokovna & kampi objects + kontakt.schedule in sl/en/it. sitemap.xml updated with 2 new routes. IT nav 'Home' kept per user.
- Verified: testing_agent iteration_6 = 100% pass (nav 6 items SL/EN/IT, no overflow 1920/390, video mp4 source, both PDF cards new-tab, event banner, poletje moved off O nas, schedule image, old rows gone, google block kept, enroll-teaser->#vpis still works, no console errors).
- Minor tech-debt noted (non-blocking): mixed customer-assets hosts; schedule img URL hardcoded; nav tight at 1024.
