# Picadoo Web Deployment

## Vercel

1. Push this repository to GitHub.
2. In Vercel, choose **Add New > Project** and import the repository.
3. Vercel will detect the framework preset as **Next.js**.
4. Keep the build command as `npm run build`.
5. Leave the output directory at the Next.js default.
6. Deploy.

Vercel installs dependencies and builds the Next.js application automatically.

## Custom `.co` Domain

1. Purchase the desired `.co` domain from a domain registrar.
2. Open the Vercel project and go to **Settings > Domains**.
3. Add both the apex domain (`example.co`) and `www.example.co`.
4. Copy the DNS records shown by Vercel into the registrar's DNS panel.
5. Choose one domain as the primary domain and redirect the other to it.
6. Wait for DNS verification and SSL provisioning.

Use the exact DNS records displayed by Vercel because they may vary by project and account.