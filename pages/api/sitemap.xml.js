export default function handler(req, res) {
  const baseUrl = 'https://packetforge.co.uk'; // CHANGE if needed

  const pages = [
    '', // homepage
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>`
  )
  .join('')}
</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(sitemap);
}
