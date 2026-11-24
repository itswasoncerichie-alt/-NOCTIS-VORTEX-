# NOCTIS VORTEX — Starter

**Application:** 亗NOCTIS々VORTEX亗  
**Creative intelligence concept:** S.A.I — Super Artificer Intelligence

This is the first front-end starter for the project. It includes:
- A responsive creative-studio interface
- Creation-mode selection
- Local file selection for photos and videos
- Optional reference-video selection
- A creative brief generator that runs in the browser

## Run locally

Open `index.html` in a modern browser. No build step is required.

## Important current limitations

This starter is a user-interface prototype, not a functioning AI video editor. It does **not** yet analyse uploaded footage, call an AI model, clone an edit, generate video, or render a movie. The brief generator only organises the instructions entered by the user.

Those capabilities will require a backend, secure API-key handling, media storage, video-analysis/generation services, and a rendering pipeline (for example, FFmpeg). Never put private API keys in browser-side JavaScript.

## Files

- `index.html` — page structure
- `styles.css` — visual design and responsive layout
- `script.js` — browser interactions
- `.gitignore` — common files to exclude from Git
