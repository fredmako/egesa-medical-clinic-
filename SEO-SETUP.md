# Search Engine Submission — Egesa Medical Clinic

The site is built and deployed at `https://egesamedicalclinic.com`. SEO meta, `sitemap.xml`,
`robots.txt`, and per-route Helmet tags are already in place. This guide covers the only
steps that need a human (you) with a logged-in account: **verifying ownership** and
**submitting the sitemap**.

## 1. Verify ownership (do this first)

`index.html` already contains empty verification slots — paste your token between the quotes
and redeploy (or just tell the assistant the token and it will fill + deploy):

```html
<meta name="google-site-verification" content="PASTE_GOOGLE_TOKEN" />
<meta name="msvalidate.01" content="PASTE_BING_TOKEN" />
<meta name="yandex-verification" content="PASTE_YANDEX_TOKEN" />
```

### Google Search Console
1. Go to https://search.google.com/search-console
2. Add property → **URL prefix** → `https://egesamedicalclinic.com`
3. Choose **HTML tag** method → copy the `content="..."` value.
4. Paste it into the `google-site-verification` slot above, redeploy, then click **Verify**.

### Bing Webmaster Tools
1. https://www.bing.com/webmasters
2. Add site → copy the `meta` `content` value → paste into `msvalidate.01`.
3. Bing can also **import your Google verification**, skipping its own tag.

### Yandex Webmaster
1. https://webmaster.yandex.com
2. Add site → copy verification `content` → paste into `yandex-verification`.

## 2. Submit the sitemap (after verification)
In each console, submit:

```
https://egesamedicalclinic.com/sitemap.xml
```

The sitemap lists all 11 routes and is served at the URL above (HTTP 200).

## 3. Confirm crawlability
- `robots.txt` → `https://egesamedicalclinic.com/robots.txt` (points to sitemap)
- JSON-LD `MedicalBusiness` is in `index.html` for rich results.

## Notes
- There is no single "submit to all search engines" button. Google is the priority; Bing
  imports from Google; Yandex is optional. Once Google indexes you, most others follow.
- You must click **Verify** in your own logged-in console — that step can't be automated.
