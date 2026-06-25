# Lag Badana Community Conservancy Trust — Website

A static, multi-page website (glassy pale-blue + greenery theme with bioluminescent icons and a scrolling photo banner). Built with plain HTML/CSS/JS — no build tools needed. It runs anywhere and publishes free on GitHub Pages.

**Tagline:** *Protecting Nature, Preserving Life.*

## Pages
`index.html` (Home) · `about.html` · `importance.html` · `mission.html` · `work.html` · `why.html` · `wildlife.html` · `mangroves.html` · `gallery.html` · `contact.html`

---

## Your photos & videos are already in place

All your real photos and the three videos are **already embedded** in the `images/` and `videos/` folders — nothing more to add. The site is ready to publish as-is. If you ever want to swap a picture, just replace the file in `images/` keeping the same filename. Here's where each one lives:

| File | Photo | Used on |
|---|---|---|
| `images/red-green-trees.jpg` | Aerial red/green flowering trees | Home hero |
| `images/home-aerial-bushes.jpg` | Trees & shrubland landscape | Home |
| `images/about-gilet.jpg` | Ranger wearing the logo gilet | About |
| `images/about-conservancy.jpg` | Ranger seated, stormy field | About |
| `images/about-house-greenery.jpg` | Small house in the greenery | About (1989) |
| `images/mission-group.jpg` | Community group at the sign | Mission + Contact |
| `images/work-grassland.jpg` | Long grass, cloudy sky | Our Work |
| `images/why-sunset.jpg` | Sunset over the water | Why Lag Badana |
| `images/why-lilies.jpg` | Pink water lilies | Why Lag Badana |
| `images/why-aerial.jpg` / `images/mangrove-1.jpg` | Aerial mangrove coast | Why + Mangroves + Gallery |
| `images/mangrove-2.jpg` | Flamingos in the mangroves | Mangroves + Wildlife |
| `images/wildlife-buffalo.jpg` | Buffalo on cracked earth | Wildlife |
| `images/wildlife-buffalo-rescue.jpg` | Community awareness banner | Wildlife |
| `images/wildlife-hippo.jpg` | Hippo in the mud | Wildlife |
| `images/wildlife-monkey.jpg` | Vervet monkeys | Wildlife + Gallery |
| `images/wildlife-bird.jpg` | Superb starling | Wildlife + Gallery |
| `images/wildlife-butterfly.jpg` | Butterfly on a leaf | Wildlife + Gallery |
| `images/importance-park.jpg` / `images/wildlife-elephant.jpg` | Park landscape | Importance + Wildlife |
| `images/logo.png` | Trust logo (placeholder — see note) | Every page |
| `videos/mission-lion.mp4` | Lion clip | Mission |
| `videos/wildlife-buffalo.mp4` | Buffalo clip | Wildlife |
| `videos/why-video.mp4` | Hippo clip | Why Lag Badana |

> **Logo note:** `images/logo.png` is a stand-in version of your badge. For the crispest result, save your original circular logo file over `images/logo.png` (keep that exact name).

---

## STEP 2 — Publish live on GitHub Pages (free)

You need a free GitHub account: https://github.com/signup

### Easiest way (web upload, no software)
1. Go to https://github.com/new and create a repository.
   - **Name it** `lag-badana` (or anything). Set it to **Public**. Click **Create repository**.
2. On the new repo page, click **uploading an existing file** (the link in the "Quick setup" box).
3. Drag **all the files and folders** from this `lag-badana-site` folder (the `index.html`, `css`, `js`, `images`, `videos`, etc.) into the upload area. Wait for them to finish, then click **Commit changes**.
4. Go to the repo's **Settings → Pages** (left sidebar).
5. Under **Build and deployment → Source**, choose **Deploy from a branch**. Under **Branch**, select **`main`** and **`/ (root)`**, then click **Save**.
6. Wait 1–2 minutes, refresh the Pages settings, and your live link appears at the top:
   `https://YOUR-USERNAME.github.io/lag-badana/`

That's it — your site is live. Whenever you change a file, re-upload it (or edit it on GitHub) and Pages updates automatically.

### Alternative way (using Git on your computer)
```bash
# inside the lag-badana-site folder
git init
git add .
git commit -m "Lag Badana Conservancy Trust website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/lag-badana.git
git push -u origin main
```
Then do **Settings → Pages → Deploy from a branch → main / root → Save** as above.

### Optional: custom domain
If you own a domain (e.g. `lagbadana.org`), go to **Settings → Pages → Custom domain**, enter it, and follow GitHub's DNS instructions. Tick **Enforce HTTPS** once it's verified.

---

## Editing the text
All wording lives directly inside the `.html` files — open any page in a text editor and change the words between the tags. The shared look is controlled by `css/style.css`. The scrolling banner on the Home page is the `marquee` section in `index.html` (it lists the images twice so the loop is seamless — keep both copies in sync).

## Preview locally before publishing
Double-click `index.html` to open it in a browser, or run a local server:
```bash
cd lag-badana-site
python3 -m http.server 8000
# then open http://localhost:8000
```
