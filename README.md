# NOCTIS VORTEX — S.A.I Studio v0.3

S.A.I = Super Artificer Intelligence.

## Included
- Responsive creative studio with Picture to Movie, Footage to Film, Season Maker and Style Study modes.
- Local multi-file photo/video import.
- Browser timeline with clip reorder, per-clip duration, title overlay and optional music.
- Browser-based preview and WebM export using Canvas + MediaRecorder.
- Samples still frames from selected videos and sends them, plus the user's brief, to the server-side OpenAI Responses API.
- AI story, season, footage observations, reference-edit observations and proposed edit decision list.
- Copy/download production plan.

## Deploy
Upload/replace the repository files, preserving the `api` directory. In Vercel Project → Settings → Environment Variables, add `OPENAI_API_KEY` and optionally `OPENAI_MODEL`. Redeploy after saving. Keep the key private; never put it in frontend JavaScript or GitHub.

The default model is `gpt-6.2-astra`; if your API account does not have access, set `OPENAI_MODEL` to a vision-capable model available to your account.

## Honest capability boundaries
- The local editor exports WebM, not MP4. Browser support and memory vary; use short clips for reliable exports.
- Video understanding is based on a few sampled still frames, not full-motion/audio comprehension.
- Reference analysis is based on sampled stills and cannot measure exact cuts or audio beats.
- This version does not generate new video scenes and does not yet render long-form professional MP4 projects. Those require a separate video-generation provider and a server-side render worker/storage pipeline.
- API calls may incur usage charges.

OpenAI docs: https://developers.openai.com/api/docs/guides/images-vision and https://developers.openai.com/api/reference/resources/responses
