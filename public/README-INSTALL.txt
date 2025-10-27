
✅ PacketForge Branding Update — Installation Steps

1️⃣ Move ALL files in this folder into your Next.js project `/public` directory:

- favicon.ico
- apple-touch-icon.png
- logo.png
- og-linkedin.png
- site.webmanifest
- favicon PNG files (optional but recommended)

2️⃣ Edit `pages/index.js` → Inside the `<Head>` component, ADD:

<meta property="og:title" content="PacketForge — Secure Networking Solutions"/>
<meta property="og:description" content="Bespoke network architecture & VPN solutions built for security and performance."/>
<meta property="og:image" content="/og-linkedin.png"/>
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="627"/>
<meta name="theme-color" content="#050505"/>

3️⃣ Run:
git add .
git commit -m "Branding update: logo + favicons + LinkedIn OG"
git push

✅ Vercel will auto redeploy your live site!
