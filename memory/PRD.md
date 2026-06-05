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
