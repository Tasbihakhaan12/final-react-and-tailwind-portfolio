# Tasbiha Khaan | Portfolio (React + Tailwind CSS)

A responsive developer portfolio with 20 switchable themes, a personal story section, project and certificate carousels, reviews, and a working contact form.

## Run locally (Windows)

1. Install Node.js (LTS) from https://nodejs.org
2. Extract the zip and open the folder in a terminal (type `cmd` in the folder's address bar).
3. First time only:
   ```
   npm install
   ```
4. Start the site:
   ```
   npm run dev
   ```
5. Open http://localhost:5173

## Where to edit

| What | File |
| --- | --- |
| Links, skills, projects, story, reviews, certificates | `src/data.js` |
| Theme list | `src/themes.js` |
| Theme colours and fonts | `src/index.css` |
| Project thumbnails | `public/images/projects/` |
| CV | `public/Tasbiha-Khaan-CV.pdf` |

## Contact form on Vercel

Messages are sent by the serverless function in `api/contact.js` to your Gmail inbox.

1. Turn on 2-Step Verification in your Google account, then create an App Password at https://myaccount.google.com/apppasswords
2. Push the project to GitHub and import it in Vercel.
3. In Vercel go to Project, Settings, Environment Variables and add:
   - `GMAIL_USER` = `tasbihakhaan12@gmail.com`
   - `GMAIL_APP_PASSWORD` = the 16-letter App Password
4. Redeploy. Every message from the form will now arrive in your inbox.

Locally (`npm run dev`) the form falls back to FormSubmit, which asks you to confirm your email once.

## Build

```
npm run build
```
