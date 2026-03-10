# Egedal Bogholderi

Hjemmeside for Egedal Bogholderi — professionel bogføring med personlig sparring.

## 🌐 Live site

**URL:** https://egedalbogholderi.dk

## 📝 Om virksomheden

Egedal Bogholderi tilbyder:
- Løbende bogføring med faste arbejdsgange
- Betaling af regninger og rykkerhåndtering
- Fakturering
- Administrative opgaver

**Pris:** 450 kr + moms pr. påbegyndt time

**Kontakt:**
- Telefon: 22 47 44 94
- Email: Gitte@egedalbogholderi.dk

## 🚀 Teknologi

- **Framework:** Astro 5.x
- **Styling:** Tailwind CSS
- **Form:** EmailJS
- **Hosting:** Simply.com

## 🛠️ Udvikling

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build
npm run build

# Preview build
npm run preview
```

## 📦 Hosting / build-format

Denne side er sat op til hostingmiljøer, der forventer **flade HTML-filer** i webroden.

Det betyder at build-outputtet nu genererer:
- `index.html`
- `om.html`
- `kontakt.html`
- `_astro/` til assets
- `robots.txt`
- `sitemap.xml`

Det styres i `astro.config.mjs` med:
- `trailingSlash: 'never'`
- `build.format: 'file'`

Hvis siden skal uploades manuelt via filmanager, skal webroden efter upload indeholde filer direkte som:

```text
index.html
om.html
kontakt.html
style.css (hvis du bruger den flade upload-zip)
_astro/
robots.txt
sitemap.xml
```

## 📁 Projektstruktur

```text
egedalbogholderi/
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── public/
├── release/
└── package.json
```

## 📧 EmailJS opsætning

Formularen bruger EmailJS til at sende beskeder:

| Komponent | Værdi |
|-----------|-------|
| Service ID | `service_p3s4ivc` |
| Template ID | `template_6k356wh` |
| Public Key | `I9b4cVln2NGxUo5sn` |

## 📄 Sider

### Forside (`/`)
- Hero med pris fremhævet
- Services overview
- Detaljeret ydelsesliste
- CTA til kontakt

### Om (`/om.html`)
- Personlig sparring
- Fleksibel løsning
- Faste arbejdsgange
- Fast timepris

### Kontakt (`/kontakt.html`)
- Kontaktoplysninger
- EmailJS kontaktformular
- Prisinformation

## 🎨 Design

- **Primær farve:** Mørkeblå (`#1e3a5f`)
- **Accent farve:** Grøn (`#2d7d46`)
- **Font:** Inter
- **Stil:** Professionel, enkel og troværdig

## 🚀 Upload-zip

Hvis siden skal uploades manuelt til hosting, kan du bygge og zippe sådan:

```bash
npm run build
```

Og derefter zippe indholdet af `dist/` så filerne ligger direkte i webroden efter udpakning.

## 📝 Todo

- [ ] Tilføj analytics når behovet er reelt
- [ ] Cookie-banner hvis det bliver nødvendigt
- [ ] Rigtigt logo hvis kunden vil have et separat brandmark

---

**Lavet af:** ReichkendlerSolutions / Nikolaj Fløjgaard  
**Kunde:** Egedal Bogholderi  
**Projekt:** Hjemmeside + SEO
