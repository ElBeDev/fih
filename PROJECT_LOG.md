# Fallstone International Holdings — Bitácora del proyecto

Resumen de todo lo que se construyó en esta sesión, de cero al estado actual del repo `ElBeDev/fih`.

## Stack

- **Next.js 16** (App Router, Turbopack) + **TypeScript**
- **Tailwind CSS v4**
- **lucide-react** para íconos
- **motion** (ex Framer Motion) para las animaciones de scroll-reveal
- Repo: https://github.com/ElBeDev/fih — desplegado en Vercel (auto-detecta Next.js, sin variables de entorno necesarias)
- Dominio: https://www.fallstoneholdingsintl.com (canónico). `fallstoneholdingsintl.com` redirige con 308 a `www`; `fih-liard.vercel.app` sigue activo en Vercel

---

## 1. Construcción inicial del sitio

Se armó el sitio desde cero a partir del contenido real de Fallstone (misión, las 6 industrias, las 6 líneas de servicio, el enfoque de inversión, y las cifras de portfolio: $2.5B en activos, 50+ compañías, 15+ años).

- Diseño inspirado en una primera referencia visual (template "Placid Insurance Brokerage"): paleta navy / negro / dorado.
- Secciones: Header, Hero, Stats, About, Services (6 tarjetas), Industries (grid), Approach, CTA, Footer.
- **Decisión de honestidad de contenido:** la referencia visual incluía un testimonio falso con foto y nombre de un "CEO". Como el brief no traía testimonios reales, esa sección se reemplazó por la cita de "Our Approach" en vez de inventar un testimonio.
- Imágenes reales de Unsplash, verificadas visualmente antes de usarlas (se descargaron y revisaron para confirmar que el contenido de cada foto correspondía a la industria).
- Verificado con Playwright (desktop y mobile) antes de dar por terminado; build y lint limpios.
- Commit + push inicial al repo `ElBeDev/fih`.

## 2. Rediseño "bento" (referencia Novara)

El usuario pidió replicar el estilo de una segunda referencia (template de estudio de arquitectura "Novara") con layout tipo *bento*: tarjetas redondeadas flotando sobre un fondo claro.

- **Paleta nueva:** crema `#eef0e7`, verde bosque `#16302b`, lima `#b9d63a` (números grandes), amarillo `#f3d93b` (acentos/CTAs).
- **Tipografía nueva:** Plus Jakarta Sans (headings) + Inter (body) — se abandonó la serif Fraunces del diseño anterior.
- **Layout:** grid bento arriba (Hero + About a la izquierda, Key Insights + What We Do a la derecha), luego Industries con filas alternadas imagen/texto, Approach, banda de CTA y footer.
- Logo propio: monograma SVG (barras ascendentes) en un cuadrado amarillo, sin depender de ninguna librería de logos.
- Industries pasó a mostrar cada industria con foto real + campos "Sector" / "Focus" tomados directamente del contenido que dio el usuario (nada inventado).

## 3. Auditoría con el skill `design-taste-frontend`

El usuario pidió instalar y usar el skill de terceros `Leonxlnx/taste-skill` (`npx skills add ... --skill design-taste-frontend`).

- Antes de instalarlo se marcó el riesgo (ejecutar un paquete npm de terceros) y se confirmó explícitamente con el usuario que quería proceder igual.
- Se corrió el audit de la Sección 11.B del skill **sobre el código real del sitio** (greps concretos, no evaluación a ojo).
- **Hallazgos y fixes aplicados:**
  - **Em-dash:** 4 instancias eliminadas (el skill tiene tolerancia cero al `—`).
  - **Eyebrows:** de 6+ pills decorativos repetidos en cada sección a solo 2 en toda la página (badge del Hero + header de Industries).
  - **Zigzag cap:** Industries tenía 6 filas alternadas imagen/texto seguidas (el skill permite máx. 2). Se dejaron 2 filas detalladas y las 4 industrias restantes pasaron a un grid de tarjetas — una familia de layout distinta, no una repetición más.
  - **CTA duplicado:** "Contact Us" y "Get in Touch" convivían como dos etiquetas para la misma acción. Se unificó todo a "Get in Touch".
  - **Capa de motion:** el sitio no tenía ninguna animación. Se agregó `Reveal.tsx`, un client component que hace scroll-reveal con `motion/react`, respeta `prefers-reduced-motion`, y no usa `window.addEventListener('scroll')` (prohibido por el skill).
- **Excepciones declaradas (no ocultas):** se mantuvo `lucide-react` como librería de íconos (el skill prefiere Phosphor/Tabler, pero ya era dependencia del proyecto) y no se implementó dark mode (no estaba marcado como falla en el audit, y es un sitio institucional B2B, no consumer-facing).
- El skill quedó instalado en el repo (`.agents/skills/design-taste-frontend/SKILL.md`, symlink en `.claude/skills/`) para poder reusarlo en futuras sesiones sobre este proyecto.

## 4. Optimización mobile

- **Bug real corregido:** el botón "Get in Touch" del Hero quedaba flotando encima del párrafo de texto en pantallas chicas, tapando la última línea ("...financial services, real estate, and energy."). El botón ahora fluye normal después del texto en mobile, y solo pasa a estar flotante (`absolute`) desde el breakpoint `sm:` en adelante, donde ya hay espacio.
- El titular del Hero se ajustó de tamaño para no wrapear en 4 líneas en mobile.
- Las 3 tarjetas de proceso (Acquire / Manage / Grow) pasaron a ser un carrusel horizontal con scroll-snap en mobile, en vez de apilarse una debajo de la otra.
- Se agregó una barra flotante "Get in Touch" (`MobileCta.tsx`, solo mobile) que aparece cuando el Hero sale de pantalla y se vuelve a ocultar al llegar a la sección de contacto real — implementada con `IntersectionObserver`, no con listeners de scroll.
- Se afinaron radios de borde y anchos de botón para verse mejor en pantallas chicas (radios más chicos en mobile, botones full-width donde corresponde).
- Verificado con capturas de Playwright en distintos puntos de scroll (arriba, medio, sección de contacto) para confirmar que la barra flotante aparece y desaparece correctamente.

---

## Dominio y SEO

- `src/lib/site.ts` centraliza nombre, URL canónica, email y descripción del sitio.
- `layout.tsx`: `metadataBase`, `canonical`, Open Graph y Twitter card apuntando a `www.fallstoneholdingsintl.com`.
- `robots.ts` y `sitemap.ts` generan `/robots.txt` y `/sitemap.xml` con el dominio real.
- `opengraph-image.tsx` genera la imagen de preview (1200×630) para cuando se comparte el link.

---

## Pendientes / decisiones abiertas

- El email de contacto ahora es `info@fallstoneholdingsintl.com` (en `src/lib/site.ts`) — confirmar que el buzón exista en el dominio.
- Los links de LinkedIn/X en el footer apuntan a `#` — falta la URL real de las redes de Fallstone.
- Dark mode: no implementado (quedó fuera de alcance de este pase, se puede agregar si se pide).
- Librería de íconos: sigue siendo `lucide-react` en vez de Phosphor/Tabler (recomendación del skill, no bloqueante).

## Historial de commits

```
bae8021  Initial commit from Create Next App
de009a7  Build Fallstone International Holdings marketing site
3256eca  Redesign site around bento-card architecture-studio aesthetic
11638da  Apply design-taste-frontend audit fixes
bc2eec1  Optimize mobile experience
```
