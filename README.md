# Magikid — Landing B2B

Site vitrine de **Magikid**, studio de production de contes pour enfants en marque blanche
(cible : ONG, éditeurs jeunesse, edtech). Next.js 16 (App Router, TypeScript), export statique.

- **Prod** : https://magikid.online (servi par Caddy sur le VPS Hetzner `magikid-prod`)
- Routes : `/`, `/conditions`, `/confidentialite`

## Développement

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build

```bash
npm run build      # génère le dossier out/ (export statique, output: 'export')
```

## Déploiement (VPS Caddy)

Le site est servi en statique depuis `/var/www/magikid` sur le VPS, derrière Caddy
(HTTPS auto, redirection www → apex).

```bash
npm run build
tar czf /tmp/magikid-out.tgz -C out .
scp -i ~/.ssh/hermes_vps /tmp/magikid-out.tgz magikid@178.105.224.144:/tmp/
ssh -i ~/.ssh/hermes_vps magikid@178.105.224.144 \
  'sudo rm -rf /var/www/magikid/* && sudo tar xzf /tmp/magikid-out.tgz -C /var/www/magikid && sudo chmod -R a+rX /var/www/magikid'
```

La config Caddy vit dans `/etc/caddy/Caddyfile` (bloc `magikid.online`). Après modif :
`sudo caddy validate --config /etc/caddy/Caddyfile --adapter caddyfile && sudo systemctl reload caddy`.

> Alternative : déploiement Vercel (retirer `output: 'export'` n'est pas nécessaire, Vercel gère).
