# opengallery-vercel-proxy

Temporary Vercel front door for a local site.

## How it works
- Deploy this folder to Vercel.
- Set `PROXY_TARGET` to the current public origin of your local site.
- Vercel rewrites every request to that target.

## Example
- `PROXY_TARGET=https://appreciate-dated-styles-watts.trycloudflare.com`

## Notes
- If your local tunnel URL changes, update `PROXY_TARGET` in Vercel and redeploy.
- If your PC is off, the Vercel front door will still exist but the proxied site will fail.
