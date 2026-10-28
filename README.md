# noahfernandes.com

Website of Noah Fernandes. Vite, React and Tailwind, two pages:

- `/` (`index.html`, `src/components/OnePage.tsx`): the main page
- `/journeys/` (`journeys/index.html`, `src/components/Journeys.tsx`): Safe and Sound Journeys

## Where to change things

- **Text, videos, offerings, FAQ:** the constants at the top of `OnePage.tsx` and `Journeys.tsx`
- **Email, socials, menu, footer, KvK/btw:** `src/components/site.tsx`
- **Colours and fonts:** `src/index.css`
- **Page titles and link previews:** `index.html` and `journeys/index.html`
- **Events:** the Google Sheet (see the comment in `src/components/events.ts`). No rebuild needed.
  Type `Journey`, `Ceremony` or `Breathwork` also shows the event on the Journeys page.
- **Newsletter:** Kit form, `src/components/NewsletterForm.tsx`
- **Contact form:** Formspree, `src/components/ContactForm.tsx`

## Run and deploy

```bash
npm install
npm run dev
```

Pushing to `master` builds the site and copies it to the server (`.github/workflows/deploy.yml`).

`originals/` and `exports/` are local only (full-size photos, design files, one-off exports) and not in git.
