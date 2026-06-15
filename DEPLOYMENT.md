# Picadoo Web Deployment

## Vercel

1. Push this repository to GitHub.
2. In Vercel, choose **Add New > Project** and import the repository.
3. Keep the framework preset as **Other**.
4. Leave the build command empty.
5. Leave the output directory empty.
6. Deploy.

Vercel will publish the static HTML, CSS, JavaScript, and image files directly.

## Custom `.co` Domain

1. Purchase the desired `.co` domain from a domain registrar.
2. Open the Vercel project and go to **Settings > Domains**.
3. Add both the apex domain (`example.co`) and `www.example.co`.
4. Copy the DNS records shown by Vercel into the registrar's DNS panel.
5. Choose one domain as the primary domain and redirect the other to it.
6. Wait for DNS verification and SSL provisioning.

Use the exact DNS records displayed by Vercel because they may vary depending on the project and account.
