# Frontend regression checklist (Judo Klub Izola) — iteration 4

Executed via browser_automation_tool (Playwright, python) against
REACT_APP_BACKEND_URL = https://izola-judo-club.preview.emergentagent.com

## Covered & PASSING
1. `/` loads in Slovenian by default (hero badge "Dobrodošli" — note it is rendered UPPERCASE via CSS
   `uppercase`, so assertions must be case-insensitive), CTA `Pridruži se nam`, `Preberi novice`,
   project section "Fit in vključeni", news, footer.
2. Language switcher: 3 flags visible (`lang-sl`, `lang-it`, `lang-en`).
   - EN -> Home / About us / Gallery / Contact
   - IT -> Home / Chi siamo / Galleria / Contatti
   - SL -> Domov / O nas / Galerija / Kontakt
3. Persistence: `localStorage['jki-lang']` written, survives reload.
4. All 4 routes (`/`, `/o-nas`, `/galerija`, `/kontakt`) fully translate in EN + IT; scanned for
   leftover Slovenian markers -> none. `/o-nas` tatami section title verified in SL/EN/IT.
5. Galerija: 3 cards, first = `event-card-poletje-na-tatamiju-2026`, `2026 • 7 fotografij`,
   title "Poletje na tatamiju – 16 dni juda v Izoli" (SL) / "Summer on the Tatami…" (EN) /
   "Estate sul tatami…" (IT).
6. Lightbox: opens with 7 photos, counter `1 / 7`, `gallery-next` / `gallery-prev` incl. wrap-around,
   photo titles+descriptions, `gallery-close`. Existing events (3 and 6 photos) open/close fine.
7. Mobile 390px: mobile switcher + `mobile-menu-button` + translated `mobile-nav-link-*`, navigation
   works, no horizontal overflow on any page.
8. No broken images on any page in any language (customer-assets .com and .net domains + flagcdn all 200).
9. `hero-scroll-news` scrolls, `hero-cta-kontakt` navigates.

## KNOWN FAILURES (see /app/test_reports/iteration_4.json)
- Lightbox thumbnail strip is pushed below the viewport (dialog scrollHeight 1194 > 1080 @1920x1080,
  964 > 768 @1366x768). `thumbnail-6` of the 7-photo event is NOT clickable.
- Duplicate `data-testid="lang-*"` (desktop + mobile switcher). Use `.nth(1)` for the mobile one
  until distinct testids are added.

## i18n dictionary parity check
`node /app/tests/i18n_keys_check.js` -> PARITY_OK=true (0 missing / 0 extra keys in en+it vs sl,
0 long strings left identical to Slovenian).
