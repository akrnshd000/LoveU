# 💖 For Arya — A Proposal

A sweet little website that asks Arya the big question. The **No** button runs
away, and when she clicks **Yes**, a gallery of your photos blooms on screen
while your song plays. 🎵

## Run it

```powershell
npm install      # first time only
npm run dev      # starts the site (opens http://localhost:5173)
```

To build a shareable version:

```powershell
npm run build    # output goes to the dist/ folder
npm run preview  # preview the built site
```

## Add your photos 📸

Just drop image files into the **`Images`** folder:

```
Gift/
├── Images/      ← put .jpg / .png / .gif / .webp photos here
└── Music/Song1.mp3
```

They load **automatically** — no code changes needed. If the site is already
open, refresh the page after adding new photos.

## Change the song 🎶

Replace `Music/Song1.mp3` with your own file (keep the same name), or update the
import path at the top of `src/App.jsx`.

## Change the name

Edit the `NAME` constant near the top of `src/App.jsx`.
