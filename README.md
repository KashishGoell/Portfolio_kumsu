# 🚀 Portfolio — Setup & Editing Guide

## Run in VS Code

### Option 1 — Live Server (easiest, no Node needed)
1. Open this folder in VS Code
2. Install the **Live Server** extension (Ritwick Dey)
   - `Ctrl+Shift+X` → search "Live Server" → Install
3. Right-click `index.html` → **"Open with Live Server"**
4. Opens at `http://127.0.0.1:5500` ✓

### Option 2 — npm
```bash
npm install
npm run dev        # opens http://localhost:3000
```

---

## ✏️ How to Edit Everything

**All content lives in one file: `js/data.js`**
You never need to touch `index.html` or `main.js`.

---

### Add / Edit Projects

Open `js/data.js` → find `projects: [` → copy this block and fill it in:

```js
{
  title:     "My Project Name",
  desc:      "What this project does.",
  image:     "assets/projects/screenshot.png",  // or "" for gradient
  imageLabel:"MY PROJECT",                       // shown if no image
  imageBg:   "linear-gradient(135deg, #0a0f1a, #0d1f33)",
  tags:      ["React", "Python", "etc"],
  liveUrl:   "https://myproject.com",   // "" to hide button
  githubUrl: "https://github.com/...",  // "" to hide button
},
```

No limit on number of projects.

---

### Add a Project Screenshot / Image

1. Create the folder `assets/projects/` if it doesn't exist
2. Drop your image file in (PNG, JPG, WebP all work)
3. In `data.js` set: `image: "assets/projects/yourfile.png"`

---

### Add Your Profile Photo

1. Put your photo in `assets/` (e.g. `assets/photo.jpg`)
2. In `data.js` set: `photo: "assets/photo.jpg"`
3. The placeholder initials disappear automatically

---

### Change the Background Video

In `index.html` find the `<video>` tag and change the `src`:
```html
<source src="YOUR_VIDEO_URL_HERE" type="video/mp4" />
```

To dim/undim the video, find `id="global-video-overlay"` in `index.html`:
- `style="display:none"` → no dim (video full brightness)
- `style="opacity:0.5"` → 50% dark overlay

---

## File Structure

```
portfolio/
├── index.html              ← HTML shell (don't need to edit)
├── js/
│   ├── data.js             ← ✅ EDIT THIS for all content
│   └── main.js             ← JS logic (don't need to edit)
├── css/
│   └── style.css           ← Styles (edit for design changes)
├── assets/
│   ├── photo.jpg           ← Your profile photo (add it here)
│   └── projects/
│       └── *.png           ← Project screenshots (add here)
├── package.json
└── README.md
```
