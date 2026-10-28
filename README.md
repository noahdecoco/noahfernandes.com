# noahfernandes.com

Website of Noah Fernandes. Vite, React and Tailwind, two pages:

- `/` (`index.html`, `src/pages/home/`): the main page
- `/journeys/` (`journeys/index.html`, `src/pages/journeys/`): Safe and Sound Journeys

## Where to change things

- **Videos, offerings, reviews, FAQ, journey types:** `content.tsx` in each page's folder
- **A section's wording or layout:** `src/pages/<page>/sections/`
- **Email, socials, menu, footer links, KvK/btw:** `src/config.ts`
- **Colours and fonts:** `src/index.css`; shared button and link styles in `src/styles.ts`
- **Page titles and link previews:** `index.html` and `journeys/index.html`
- **Events:** the Google Sheet (see the comment in `src/lib/events.ts`). No rebuild needed.
  Type `Journey`, `Ceremony` or `Breathwork` also shows the event on the Journeys page.
- **Newsletter:** Kit form, `src/components/forms/NewsletterForm.tsx`
- **Contact form:** Formspree, `src/components/forms/ContactForm.tsx`

## Folders

```
src/
  main.tsx, journeys.tsx   entry point of each page
  config.ts                contact details, links and menus
  styles.ts                shared Tailwind classes
  pages/<page>/            page component, its content and its sections
  components/              pieces used on both pages
    layout/                page frame, header, phone menu, footer, section wrappers
    forms/                 contact, newsletter and notify pop-up
  hooks/                   events, scroll-to-section, active menu item
  lib/                     events sheet, CSV parsing, link helpers
  assets/                  photos
```

## Run and deploy

```bash
npm install
npm run dev
```

Pushing to `master` builds the site and copies it to the server (`.github/workflows/deploy.yml`).

`originals/` and `exports/` are local only (full-size photos, design files, one-off exports) and not in git.
