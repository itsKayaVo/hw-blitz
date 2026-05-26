# HW Blitz ⚡

A PWA homework tracker for your 3-day sprint to May 29.

## Deploy to GitHub Pages

1. Create a new repo on GitHub (e.g. `hw-blitz`)
2. Upload all 4 files: `index.html`, `manifest.json`, `sw.js`, `icon.svg`
3. Go to **Settings → Pages → Source: Deploy from branch → main → / (root)**
4. Your site will be live at `https://yourusername.github.io/hw-blitz/`

## Add to iPhone homescreen

1. Open the site in **Safari** on your iPhone
2. Tap the **Share** button (box with arrow)
3. Tap **Add to Home Screen**
4. Tap **Add** — the HW Blitz icon appears on your homescreen
5. Open it from the homescreen, tap the 🔔 bell, and **Enable notifications**

> Note: Web push notifications require iOS 16.4+ and the app must be opened from the homescreen (not Safari).

## Add to MacBook

**Safari:**
1. Open the site in Safari
2. File → Add to Dock (macOS Sonoma+)

**Chrome / Arc / Brave:**
1. Open the site
2. Click the install icon (⊕) in the address bar, or go to the browser menu → "Install HW Blitz"
3. The app appears in your Applications folder and Dock

## Files

| File | Purpose |
|------|---------|
| `index.html` | The full app |
| `manifest.json` | PWA install metadata |
| `sw.js` | Service worker (offline + notifications) |
| `icon.svg` | App icon |

## About notifications

- Set a daily reminder time (default 4:00 PM) via the 🔔 button
- Notifications fire when the app is open/in focus, or via the service worker
- For full background push on iOS, a push server backend would be needed — these are local reminders
