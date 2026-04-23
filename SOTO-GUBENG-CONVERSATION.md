# SOTO GUBENG SURABAYA - Conversation Notes

## Context
- Project: public website for `Soto Gubeng Surabaya`.
- Stack direction: `Next.js`, `shadcn/ui` style, mobile-first.
- Visual direction: modern, clean, minimal.
- Color direction: cream + warm gold.
- Scrolling: smooth scrolling required.

## Decisions
- Build `one-page landing` with anchor sections.
- Sections: `Home`, `Menu`, `About`, `Testimoni`, `Kontak`.
- `Testimoni` must appear before footer.
- Menu structure: `4 menu utama + add-on`.
- Best seller: `Soto Daging`.
- CTA flow: hero goes to menu first, then WhatsApp buttons on cards.
- WhatsApp target: `+62 878-8000-7793`.
- WhatsApp is direct to a person, not a bot.
- Menu visuals: use generated realistic-style placeholder images for now.
- Logo source: `aset/logo.png`.

## Content Source
- `README.md` and `INSTRUCTION.md` were used to confirm scope and content.
- `INSTRUCTION.md` matched the public website scope well.

## Current Implementation State
- Public landing page scaffolded.
- Smooth scrolling and hover animations added.
- 10 five-star testimonials added as placeholders.
- Build verified successfully with `npm run build`.

## Next Possible Follow-up
- Replace generated menu art with real food photos if available.
- Add admin panel and Supabase integration later.
