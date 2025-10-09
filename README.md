# 🎬 Anime Finder

Una aplicación web moderna construida con **Next.js**, **GraphQL (AniList API)**, **Apollo Client** y **Redux Toolkit**.  
Permite buscar, filtrar y visualizar animes con información detallada, además de guardar favoritos de forma persistente.

---
## 🚀 Demo de la aplicación en vercel

https://anime-finder-frontend.vercel.app/

---

## 📖 Descripción del proyecto

**Anime Finder** es una aplicación que consume la API pública de [AniList](https://anilist.co/graphiql) mediante GraphQL.  
El usuario puede:

- 🔍 Buscar animes por título, género, estado, temporada o año.
- 📊 Ver los animes más populares de la temporada o de todos los tiempos.
- ❤️ Añadir y eliminar animes de su lista de favoritos (persistente incluso tras recargar la página).
- 🧭 Visualizar detalles completos de cada anime en un modal elegante (banner, sinopsis, puntuación, fechas, trailer, etc.).
- ⏬ Cargar más resultados de forma progresiva mediante paginación manual (“Mostrar más”).

---

## 🧠 Tecnologías utilizadas

| Tecnología | Descripción |
|-------------|--------------|
| **Next.js 14 (App Router)** | Framework React con renderizado híbrido (SSR/CSR) para alto rendimiento. |
| **React 18** | Biblioteca base para la interfaz de usuario. |
| **Apollo Client** | Cliente GraphQL para la comunicación con la API de AniList. |
| **GraphQL** | Lenguaje de consultas eficiente para obtener datos precisos del servidor. |
| **Redux Toolkit** | Manejo global de estado (favoritos persistentes en localStorage). |
| **TailwindCSS** | Framework de estilos utilitario para diseño rápido y responsive. |
| **Framer Motion** | Animaciones fluidas y modernas para transiciones y modales. |
| **Lucide React** | Iconos SVG ligeros y personalizables. |
| **TypeScript** | Tipado estático que mejora la escalabilidad y mantenibilidad del código. |
| **Jest + React Testing Library** | Pruebas unitarias de componentes y slices de Redux. |

---

## ⚙️ Instrucciones de ejecución

### 🔧 Requisitos previos

Asegúrate de tener instalado:
- **Node.js** ≥ 18.x
- **npm** o **yarn**

### 🚀 Instalación

Clona el repositorio y entra en la carpeta del proyecto:

```bash
git clone https://github.com/hugoohd97/anime-finder-frontend.git
cd anime-finder-frontend
```

Instala las dependencias:

```bash
npm install
```

Ejecución en modo desarrollo:

```bash
npm run dev
```

Luego abre en el navegador:

```bash
http://localhost:3000
```

---

### 🧪 Ejecutar pruebas unitarias

```bash
npm test
```

Las pruebas cubren:

- Reducer de favoritos (favoritesSlice)
- Componente de detalles de anime
- Botón flotante de favoritos

### 🏗️ Compilación para producción

```bash
npm run build
```
El servidor se iniciará en modo producción.

---
🧩 Estructura principal del proyecto
```bash
src/
├── app/                        # Next.js app directory
│   ├── favicon.ico
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   └── api/
│       └── graphql/
│           └── route.ts        # GraphQL API route
│
├── components/                 # Reusable UI components
│   ├── AnimeCard.tsx
│   ├── AnimeContent.tsx
│   ├── AnimeDetailContent.tsx
│   ├── AnimeGrid.tsx
│   ├── AnimeModal.tsx
│   ├── ConfirmationDialog.tsx
│   ├── ErrorMessage.tsx
│   ├── FavoritesButton.tsx
│   ├── FavoritesModal.tsx
│   ├── FilteredResults.tsx
│   ├── Filters.tsx
│   ├── FilterSelect.tsx
│   ├── InfoMessage.tsx
│   ├── Loader.tsx
│   └── PopularSection.tsx
│
├── constants/                  # Constant values (e.g. enums, configs)
│   └── medias.ts
│
├── graphql/                    # Apollo Client and queries
│   ├── client.ts
│   └── queries.ts
│
├── hooks/                      # Custom React hooks
│   ├── useAnimeFilters.ts
│   ├── useFilteredAnimes.ts
│   ├── useFiltersController.ts
│   └── usePopularAnimes.ts
│
├── providers/                  # Context and global providers
│   └── Providers.tsx
│
├── store/                      # Redux store setup
│   ├── index.ts
│   └── slices/
│       └── favoritesSlice.ts
│
└── __tests__/                  # Unit and component tests
    ├── AnimeDetailContent.test.tsx
    ├── FavoritesButton.test.tsx
    └── favoritesSlice.test.ts
```

---

### 👨‍💻 Autor

Desarrollado por Hugo Escobar
📧 hugooras@gmail.com

### 🪪 Licencia

Este proyecto es de uso libre con fines educativos o de demostración.
© 2025 Hugo Escobar. Todos los derechos reservados.