# Russo Technology Consulting (RTC) Website

This repository contains the source code for the Russo Technology Consulting, LLC website, built with Next.js, React, TypeScript, and Tailwind CSS. The site is fully configured for a static export and automated deployment via GitHub Pages.

## Project Structure
- `src/app`: Page routing, layouts, SEO metadata, sitemap.
- `src/components`: Reusable UI components (Cards, Headers, Forms, Buttons).
- `src/config/site.ts`: Central configuration file containing all business details (phone, email, social, hours).
- `public/`: Static assets including the RTC Logo and `CNAME` file.

## Content Management
To update business details such as phone numbers, email addresses, business hours, and social media links, edit the `src/config/site.ts` file. Do not hardcode this information directly into components.

### Contact Form Configuration
The contact form uses a static form endpoint. To enable form submissions:
1. Create an account with Formspree, Web3Forms, or Basin.
2. Obtain your unique endpoint URL.
3. Add the endpoint URL to `src/config/site.ts` under `form.endpoint`, or add it to your `.env.local` file as `NEXT_PUBLIC_FORM_ENDPOINT=your_url`.

## Local Development
1. Ensure Node.js 20+ is installed.
2. Clone the repository and run `npm install`.
3. Start the development server with `npm run dev`.
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build and Export
To verify the static export locally before pushing to GitHub:
```bash
npm run build
```
This will compile the site and generate static HTML files in the `out/` directory.

## GitHub Pages Deployment
This repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploses the site to GitHub Pages whenever changes are pushed to the `main` branch.

**To enable GitHub Pages:**
1. Go to your repository **Settings** on GitHub.
2. Navigate to **Pages** in the left sidebar.
3. Under **Build and deployment**, set the **Source** to **GitHub Actions**.

## Domain and DNS Configuration
To point your custom domain (`russotc.com`) to GitHub Pages, configure your DNS provider (e.g., GoDaddy, Cloudflare) with the following records:

### 1. Root Domain (`russotc.com`)
Create **A records** pointing to GitHub's IP addresses:
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

*(Alternatively, if your DNS provider supports `ALIAS` or `ANAME` records, point the root domain directly to your GitHub Pages URL, e.g., `yourusername.github.io`)*

### 2. WWW Subdomain (`www.russotc.com`)
Create a **CNAME record** pointing `www` to your GitHub Pages URL:
- Host: `www`
- Target: `yourusername.github.io` (Replace with your actual GitHub username)

### 3. Verification and HTTPS
1. Ensure any conflicting A or CNAME records provided by your registrar (e.g., GoDaddy parked domains) are deleted.
2. Once DNS changes propagate (can take up to 24 hours), go to your GitHub Repository **Settings > Pages**.
3. Under **Custom domain**, enter `russotc.com` and click **Save**.
4. Check the **Enforce HTTPS** box once the certificate is generated.

> **Note:** The `public/CNAME` file in this repository ensures your custom domain setting is preserved during automated deployments. Do not delete it.

## Adding Optional Analytics
To add privacy-conscious analytics like Plausible or Cloudflare Web Analytics:
1. Obtain the required script snippet.
2. Open `src/app/layout.tsx`.
3. Add the `<Script>` tag inside the `<head>` or `<body>` element as directed by your analytics provider.
