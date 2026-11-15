# MOONI Camera
A free, film-inspired camera web app.

## Features
- Front and rear camera using browser camera permissions.
- Live preview filters: ORIGINAL, COAST, SUNNY, GREEN, FLASH, SOFT FILM, CLEAR, RETRO, COOL, PEACH, MONO and VIVID.
- Main color looks are crisp and grain-free; only SOFT FILM adds very subtle grain.
- Zoom slider: uses camera track zoom when the browser/device exposes it; otherwise uses a digital crop.
- Photo aspect ratios: portrait 4:3, portrait 16:9, square 1:1 and FULL portrait crop.
- Capture and save JPEG photos locally in the browser.
- No account, analytics, photo upload server, or paid service.

## Publish with GitHub Pages
1. Open repository **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select branch **main** and folder **/(root)**, then click **Save**.
4. Wait for GitHub Pages to publish the site.
5. Open the published HTTPS URL in iPhone Safari and allow camera access.
6. Use Safari **Share → Add to Home Screen** to add MOONI to the home screen.

## Notes
This is a web app prototype, not a native App Store app. Camera access requires HTTPS (or localhost) and browser permission. Filter rendering is an initial color approximation and may vary with device and lighting. Zoom quality depends on the camera/browser: supported camera zoom may use the device's zoom control, while fallback zoom is digital and can lose detail at higher magnification. The app requests a high-resolution stream, but the actual resolution is decided by iPhone/Safari. FULL is a tall portrait crop, not the iPhone sensor's native full-screen still mode. FLASH is currently a contrast/color look, not hardware flash control. Photos are processed locally in the browser.