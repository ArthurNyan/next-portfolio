# Выжимка проекта: Next Portfolio

> **TL;DR для AI агента:**  
> Next.js 14 портфолио с TypeScript, Strapi CMS, SCSS Modules, Airbnb ESLint.  
> Server Components по умолчанию, два источника данных (Strapi + REST API).  
> Path alias `@/`, Feature-Sliced Design, BEM naming, Conventional Commits.  
> **Главное:** строгая типизация, ESLint правила, responsive design.

---

## Оглавление

1. [Общая информация](#общая-информация)
2. [Технологический стек](#технологический-стек)
3. [Архитектура проекта](#архитектура-проекта)
4. [Ключевые особенности](#ключевые-особенности)
5. [API Models и TypeScript структуры](#api-models-и-typescript-структуры-данных)
6. [API Endpoints и методы](#api-endpoints-и-методы)
7. [Environment Variables](#environment-variables)
8. [Key Components](#key-components)
9. [Основные страницы](#основные-страницы-подробная-реализация)
10. [Особенности реализации](#особенности-реализации-и-best-practices)
11. [Архитектурные диаграммы](#архитектурные-диаграммы)
12. [Примеры кода](#примеры-кода-для-быстрого-старта)
13. [Чеклист для разработки](#чеклист-для-разработки)
14. [FAQ](#faq-для-ai-агента)

---

## Общая информация

**Название проекта:** next-portfolio  
**Версия:** 0.1.0  
**Тип:** Portfolio веб-сайт на Next.js 14  
**URL:** https://www.malos.ru/  
**Описание:** Персональное портфолио Arthur Nakhatakyan с блогом, проектами и CV

## Технологический стек

### Основные технологии
- **Framework:** Next.js 14.2.35 (App Router)
- **React:** 18.3.1
- **TypeScript:** 5.x (strict mode)
- **Styling:** SCSS/SASS modules (+ classnames)
- **Animations:** motion 12.23.26
- **Backend/CMS:** Strapi (headless CMS)
- **Analytics:** Vercel Analytics

### Дополнительные библиотеки
- `@strapi/blocks-react-renderer` - рендеринг контента из Strapi
- `axios` - HTTP клиент для API запросов
- `react-markdown` - рендеринг markdown контента
- `dayjs` & `moment` - работа с датами

## Архитектура проекта

### Структура папок (Feature-Sliced Design)

```
src/
├── app/                          # Next.js App Router
│   ├── (router)/                 # Route group
│   │   ├── page.tsx              # Главная страница (home)
│   │   ├── layout.tsx            # Root layout
│   │   ├── blog/                 # Блог с статьями
│   │   ├── projects/             # Портфолио проектов
│   │   ├── cv/                   # Резюме/CV
│   │   └── contacts/             # Контакты
│   ├── api/                      # API слой
│   │   ├── _model/               # Модели данных
│   │   ├── about/                # API методы для About
│   │   ├── projects/             # API методы для проектов
│   │   ├── cv/                   # API методы для CV
│   │   └── experience/           # API методы для опыта
│   ├── providers/                # React провайдеры
│   └── globals.scss              # Глобальные стили
│
├── shared/                       # Общие ресурсы
│   ├── api/                      # Базовая настройка API (axios)
│   ├── components/               # UI компоненты
│   │   ├── Typography/           # Текстовые компоненты
│   │   ├── Icons/                # Иконки
│   │   ├── BlocksRenderer/       # Рендерер Strapi блоков
│   │   ├── GridGallery/          # Галерея изображений
│   │   └── MotionWrapper/        # Обертка для анимаций
│   ├── lib/                      # Утилиты
│   ├── styles/                   # Глобальные стили и переменные
│   └── types/                    # TypeScript типы
│
├── widgets/                      # Сложные компоненты
│   ├── Header/                   # Шапка сайта
│   ├── Footer/                   # Подвал
│   ├── PageTitle/                # Заголовок страницы
│   └── ExperienceItem/           # Элемент опыта работы
│
└── entities/                     # Бизнес-сущности
    ├── model/                    # Модели
    └── ui/                       # UI компоненты сущностей
```

## Ключевые особенности

### 1. Routing
- **App Router** (Next.js 14)
- Главная страница (`/`) редиректит на `/users`
- Динамические маршруты: `/projects/[id]`, `/blog/[id]`
- Server Components по умолчанию

### 2. Data Fetching
- **Backend:** Strapi CMS
- **API Base URL:** `process.env.BD_OPEN_URL_STRAPI`
- **Images:** 
  - Development: `http://localhost:1337/uploads/**`
  - Production: `https://hopeful-hero-a31b9d5638.media.strapiapp.com/**`
- Использование axios instance для API запросов
- Server-side data fetching в async компонентах

### 3. Styling System
- **SCSS Modules** для изоляции стилей
- **Global SASS variables** (`_vars.scss`) автоматически импортируются
- **Color Palette:**
  - Primary: #282c2f
  - Dark: #000000, #404040, #808080, #bfbfbf
  - Light: #ffffff, #f5f5f5
  - Success: #4bb34b, #67d067
  - Error: #f04f4f
- **Breakpoints:** small (320px), mobile (560px), tablet (768px), desktop (1024px), large (1200px)
- **Max width:** 42rem для основного контента

### 4. TypeScript Configuration
- **Strict mode** включен
- **Path mapping:** `@/*` → `./src/*`
- **Target:** ES5
- **Module:** ESNext

### 5. SVG Handling
- Кастомная webpack конфигурация
- SVG можно импортировать как React компоненты
- Использование `@svgr/webpack`

### 6. Fonts
- **Google Font:** Nunito Sans (weights: 200, 300, 400, 500)
- Оптимизация через `next/font`

### 7. Metadata & SEO
- OpenGraph теги
- Twitter карточки
- Robots.txt настройки
- Locale: RU
- Динамические title через template

## Code Quality & Development

### ESLint Configuration
- **Extends:**
  - airbnb
  - airbnb-typescript
  - airbnb/hooks
  - next/core-web-vitals
  - plugin:prettier/recommended

- **Ключевые правила:**
  - Import order с newlines между группами
  - Curly braces обязательны
  - Prettier integration
  - TypeScript support

### Commitlint
- **Convention:** Conventional Commits
- **Types:** feat, fix, docs, style, refactor, test, chore, perf
- **Scopes:** frontend, backend, database, config, authentication, deployment, docs, other
- **Subject case:** lower-case
- **Body max length:** 100

### Git Hooks
- **Husky** для git hooks
- **Branch name validation**

### Scripts
```bash
npm run dev        # Development server
npm run build      # Production build
npm run start      # Start production server
npm run lint       # ESLint с автофиксом
npm run type-check # TypeScript проверка
```

## API Models и TypeScript структуры данных

### Базовые Strapi типы

#### IStrapiType<Data>
Обертка для всех ответов Strapi API
```typescript
interface IStrapiType<Data extends object> {
  data: Data;
}
```

### Медиа и изображения

#### IMedia
Полная структура медиа-файла из Strapi
```typescript
interface IMedia {
  id: number;
  documentId: string;
  name: string;
  alternativeText: any;
  caption: any;
  width: number;
  height: number;
  formats: Formats;          // Различные размеры изображения
  hash: string;
  ext: string;               // Расширение файла (.jpg, .png и т.д.)
  mime: string;              // MIME тип
  size: number;              // Размер в байтах
  url: string;               // URL изображения
  previewUrl: any;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
```

#### Formats
Различные форматы изображения
```typescript
interface Formats {
  thumbnail: MediaFormat;
  medium: MediaFormat;
  small: MediaFormat;
  large: MediaFormat;
}
```

#### MediaFormat
Отдельный формат изображения
```typescript
interface MediaFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: any;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}
```

#### IImage
Упрощенная структура изображения для галереи
```typescript
interface IImage {
  id: number;
  image: string;
}
```

### Проекты

#### IProject
Основная модель проекта портфолио
```typescript
interface IProject {
  id: number | string;
  slug: number | string;
  name: string;
  about?: Array<RootNode>;   // Strapi blocks (rich text)
  banner: IMedia;            // Баннер проекта
  date?: string;             // Дата проекта
}
```

#### IProjects
Массив проектов с обёрткой Strapi
```typescript
interface IProjects extends IStrapiType<Array<IProject>> {}
```

#### IProjectRes
Один проект с обёрткой Strapi
```typescript
interface IProjectRes extends IStrapiType<IProject> {}
```

### Блог/Статьи

#### IArticle
Структура статьи блога
```typescript
interface IArticle {
  id: number;
  slug: string;              // URL-friendly идентификатор
  title: string;             // Заголовок статьи
  date?: string;             // Дата публикации
  article: string;           // Содержимое (markdown)
}
```

### О себе (About)

#### IAbout
Данные для главной страницы "About"
```typescript
type IAbout = IStrapiType<{
  id: number;
  description: Array<RootNode>;  // Strapi rich text блоки
  media: Array<IMedia>;          // Галерея изображений
}>;
```

### CV/Резюме

#### ICV
Полная структура CV
```typescript
type ICV = IStrapiType<{
  id: number;
  documentId: string;
  baseInfo: Array<RootNode>;     // Базовая информация (rich text)
  about: string;                 // Описание
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  experiences: Array<Experience>; // Опыт работы
  educations: Array<Education>;   // Образование
}>;
```

#### Experience
Опыт работы
```typescript
interface Experience {
  id: number;
  name: string;              // Название компании/позиции
  about: RootNode[];         // Описание (rich text)
  link?: string;             // Ссылка на компанию
  startDate: string;         // Дата начала
  endDate: string;           // Дата окончания
}
```

#### Education
Образование
```typescript
interface Education {
  id: number;
  documentId: string;
  name: string;              // Название учебного заведения
  about: RootNode[];         // Описание (rich text)
  link?: string;             // Ссылка на учебное заведение
  startDate: string;         // Дата начала
  endDate: string;           // Дата окончания
  logo: IMedia;              // Логотип учебного заведения
  degree: string;            // Степень/квалификация
}
```

#### IExperience
Упрощенная структура опыта (альтернативная)
```typescript
interface IExperience {
  id: number;
  title: string;
  date: string;
  link: string;
  duties: Array<string>;     // Список обязанностей
}
```

### Социальные ссылки

#### ISocialLinksProps
Социальные ссылки и контакты
```typescript
interface ISocialLinksProps {
  id: string;
  link: string;              // URL ссылки
  nameRu: string;            // Название на русском
  nameEn: string;            // Название на английском
  type: 'profile' | 'channel' | 'mail' | 'group' | 'phone';
}
```

### UI компоненты

#### ITypography
Базовый интерфейс для типографики компонентов
```typescript
interface ITypography {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  fontStyle?: 'default' | 'primary' | 'dark' | 'light';
  contentSlot?: React.ReactNode;
}
```

### Strapi специфичные типы

#### RootNode
Из `@strapi/blocks-react-renderer` - представляет узел в rich text контенте Strapi. Используется для рендеринга форматированного текста с помощью `BlocksRenderer`.

Примеры использования:
- `description: Array<RootNode>` - описание на главной странице
- `about: RootNode[]` - описание в проектах, опыте работы, образовании
- `baseInfo: Array<RootNode>` - базовая информация в CV

## Основные страницы (подробная реализация)

### 1. Home Page (/)
**Route:** `/` → редирект на `/users` (настроено в next.config.mjs)  
**File:** `src/app/(router)/page.tsx`

**Структура:**
```typescript
// Server Component (async)
// Data fetching: getAbout()

Компоненты:
├── MotionWrapper
│   ├── PageTitle ("home page")
│   ├── BlocksRenderer (description из Strapi)
│   ├── GridGallery (media изображения)
│   └── Social Links
│       ├── SocialLink (Telegram)
│       └── SocialLink (Email)
```

**Данные:**
- `description: Array<RootNode>` - описание (Strapi rich text)
- `media: Array<IMedia>` - галерея изображений

---

### 2. Projects Page (/projects)
**File:** `src/app/(router)/projects/page.tsx`

**Metadata:**
- Title: "Blog" (возможно опечатка, должно быть "Projects")
- Description: "Read my thoughts on software development, design, and other."

**Структура:**
```typescript
// Server Component (async)
// Data fetching: getAllProjects()

Компоненты:
├── MotionWrapper
│   ├── PageTitle ("check my projects")
│   └── projects__map
│       └── Link → Paragraph (name + date)
```

**Отображение:**
- Список проектов
- Каждый проект: название + дата (если есть)
- Ссылка на `/projects/${project.slug}`

---

### 3. Project Detail Page (/projects/[id])
**File:** `src/app/(router)/projects/[id]/page.tsx`

**Static Generation:**
```typescript
generateStaticParams() // Генерирует пути из всех проектов
```

**Структура:**
```typescript
// Server Component (async)
// Data fetching: getProject(id)

Компоненты:
├── MotionWrapper
│   ├── PageTitle (name, contentSlot: дата)
│   ├── Image (banner 672x430, priority)
│   └── BlocksRenderer (about - описание проекта)
```

**Особенности:**
- `notFound()` если нет id
- Priority загрузка баннера
- Закомментированный код для generateMetadata (OpenGraph)

---

### 4. Blog Page (/blog)
**File:** `src/app/(router)/blog/page.tsx`

**Структура:**
```typescript
// Server Component (async)
// Data fetching: getArticles()

Компоненты:
├── MotionWrapper
│   ├── PageTitle ("follow the blog")
│   └── projects__map
│       └── Link → Paragraph (title + date)
```

**Отображение:**
- Список статей
- Каждая статья: заголовок + дата (если есть)
- Ссылка на `/blog/${article.slug}`

---

### 5. Blog Post Page (/blog/[id])
**File:** `src/app/(router)/blog/[id]/page.tsx`

**Static Generation:**
```typescript
generateStaticParams() // Генерирует пути из всех статей
```

**Структура:**
```typescript
// Server Component (async)
// Data fetching: getArticle(id)

Компоненты:
├── MotionWrapper
│   ├── PageTitle (title, contentSlot: дата)
│   └── MarkdownRender (article - markdown контент)
```

**Особенности:**
- Использует MarkdownRender (не BlocksRenderer)
- Контент в формате Markdown
- `notFound()` если нет id

---

### 6. CV Page (/cv)
**File:** `src/app/(router)/cv/page.tsx`

**Структура:**
```typescript
// Server Component (async)
// Data fetching: getCV(), getEducations()

Компоненты:
├── MotionWrapper
│   ├── BlocksRenderer (baseInfo)
│   ├── Experience Section (если есть)
│   │   ├── <h3>Experience</h3>
│   │   └── ExperienceItem[] (map)
│   ├── Education Section (если есть)
│   │   └── EducationBlock[] (map)
│   └── About Section (если есть)
│       ├── <h3>About me</h3>
│       └── Paragraph (about)
```

**Компоненты:**

#### ExperienceItem
```typescript
interface Props extends Experience {
  name: string;
  startDate: string;      // "MMMM YYYY"
  endDate: string;        // "MMMM YYYY"
  link?: string;
  about: RootNode[];
}

// Отображение:
// - Даты (dayjs format)
// - Название (Link если есть URL)
// - BlocksRenderer для описания
```

#### EducationBlock
```typescript
interface Props extends Education {
  name: string;
  startDate: string;      // Год
  endDate: string;        // Год
  link?: string;
  about: RootNode[];
  logo: IMedia;
  degree: string;
}

// Отображение:
// - Логотип учебного заведения
// - Название (Link если есть URL)
// - Степень/квалификация
// - Описание (BlocksRenderer)
// - Годы обучения
```

---

### 7. Contacts Page (/contacts)
**File:** `src/app/(router)/contacts/page.tsx`

**Структура:**
```typescript
// Server Component (async)
// Закомментирован код с getSocialLinks()

Компоненты:
├── PageTitle ("some contacts")
└── [Закомментированный список соц. ссылок]
```

**Статус:** Частично реализована, функционал закомментирован

---

### Error Pages

#### 404 Not Found
**File:** `src/app/(router)/not-found.tsx`
Кастомная страница 404

#### Error Boundary
**File:** `src/app/(router)/error.tsx`
Обработка ошибок времени выполнения

---

### Root Layout
**File:** `src/app/(router)/layout.tsx`

**Структура:**
```typescript
// Server Component (async)

HTML:
├── <html lang="ru">
│   └── <body className="layout">
│       ├── Analytics (Vercel)
│       ├── Header (навигация)
│       ├── <main>{children}</main>
│       └── Footer
```

**Preloading:**
```typescript
Promise.all([
  getSocialLinks(),
  getExperience(),
  getAllProjects(),
  getPortfolioImages()
])
// Параллельная предзагрузка данных (не ожидается)
```

**Font:** Nunito Sans (weights: 200, 300, 400, 500)

**Metadata:**
- Base URL: https://www.malos.ru/
- Default title: "Aryan blog"
- Template: "Aryan | %s"
- OpenGraph, Twitter карты
- Robots настройки

---

### OpenGraph Image
**File:** `src/app/(router)/opengraph-image.tsx`
Динамическая генерация OG изображений

## API Endpoints и методы

### Projects API
```typescript
// Получить все проекты
getAllProjects(): Promise<IProjects>
// GET /api/projects

// Получить один проект по ID
getProject(id: string | number): Promise<IProjectRes>
// GET /api/projects/${id}?populate=*
```

### Blog/Articles API
```typescript
// Получить все статьи
getArticles(): Promise<IStrapiType<Array<IArticle>>>
// GET /api/articles

// Получить одну статью по ID
getArticle(id: string | number): Promise<IStrapiType<IArticle>>
// GET /api/articles/${id}?populate=*
```

### About API
```typescript
// Получить информацию "О себе"
getAbout(): Promise<IAbout>
// GET /api/about?populate=*
```

### CV API
```typescript
// Получить полное CV
getCV(): Promise<ICV>
// GET /api/cv?populate=*

// Получить образование
getEducations(): Promise<IStrapiType<Array<Education>>>
// GET /api/educations?populate=*
```

### Experience API
```typescript
// Получить опыт работы (кэшировано)
getExperience(): Promise<IExperience[]>
// GET ${process.env.BD_OPEN_URL}/experience
// Revalidate: 1000 секунд
```

### Social Links API
```typescript
// Получить социальные ссылки (кэшировано)
getSocialLinks(): Promise<ISocialLinksProps[]>
// GET ${process.env.BD_OPEN_URL}/social-links
// Revalidate: 1000 секунд
```

### Images API
```typescript
// Получить изображения портфолио (кэшировано)
getPortfolioImages(): Promise<IImage[]>
// GET ${process.env.BD_OPEN_URL}/images
// Revalidate: 1000 секунд
```

## Environment Variables

### Обязательные переменные:
- `BD_OPEN_URL_STRAPI` - URL Strapi backend API (для axios instance)
  - Используется для: Projects, Articles, About, CV, Educations
  - Пример: `http://localhost:1337` или `https://your-strapi.com`

- `BD_OPEN_URL` - URL REST API (для fetch requests)
  - Используется для: Experience, Social Links, Images
  - Пример: `http://localhost:3001/api` или `https://your-api.com/api`

### Примечания по API:
1. **Два разных источника данных:**
   - Strapi CMS (через axios) - для проектов, статей, CV, about
   - Custom REST API (через fetch) - для опыта, соц. ссылок, изображений

2. **Кэширование:**
   - Axios запросы - без встроенного кэша
   - Fetch запросы - используют React cache() и Next.js revalidate (1000 сек)

3. **Populate:**
   - Для Strapi запросов используется `?populate=*` для получения связанных данных

## Key Components

### Shared Components

#### BlocksRenderer
Рендеринг Strapi rich content блоков
```typescript
interface Props {
  content: RootNode[];  // Strapi блоки
}

// Использование:
<BlocksRenderer content={description} />

// Кастомные блоки:
// - link: рендерится через компонент Link
// - paragraph: рендерится через компонент Paragraph
```

#### MarkdownRender
Рендеринг markdown контента
```typescript
interface Props {
  content: string;  // Markdown строка
}

// Использование:
<MarkdownRender content={article} />
```

#### GridGallery
Сетка изображений с адаптивной компоновкой
```typescript
interface Props {
  images: Array<{ 
    image: string;      // URL изображения
    id: number | string;
  }>;
}

// Использование:
<GridGallery images={media?.map(({ id, url }) => ({ 
  id, 
  image: getImageUrl(url) 
}))} />

// Особенности:
// - Каждое второе изображение имеет класс 'double'
// - Использует Next.js Image (220x310)
```

#### MotionWrapper
Обертка для анимаций с Framer Motion
```typescript
interface Props extends HTMLMotionProps<'div'> {
  children: ReactNode;
  clear?: boolean;  // Отключает анимации если true
}

// Анимации по умолчанию:
// - initial: { opacity: 0 }
// - animate: { opacity: 1 }
// - exit: { opacity: 0, y: -10 }
// - transition: { duration: 0.25 }

// Использование:
<MotionWrapper className={styles.main}>
  {children}
</MotionWrapper>
```

#### Typography Components
Набор типографских компонентов

**Базовый интерфейс ITypography:**
```typescript
interface ITypography {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  fontStyle?: 'default' | 'primary' | 'dark' | 'light';
  contentSlot?: React.ReactNode;
}
```

**Доступные компоненты:**
- `Paragraph` - текстовые параграфы
- `SubTitle` - подзаголовки
- `SmallTitle` - маленькие заголовки
- `Link` - внутренние ссылки (Next.js Link)
- `SocialLink` - социальные ссылки с иконкой стрелки

#### Copyright
Копирайт для footer
```typescript
interface Props {
  text: string;
}

// Использование:
<Copyright text="all rights reserved" />
```

### Widgets (Сложные компоненты)

#### Header
Навигационная шапка сайта
```typescript
// Структура:
// - Client Component ('use client')
// - Использует MotionWrapper
// - Навигация: home, blog, projects, cv, contacts

// Автоматически включается в RootLayout
```

#### Footer
Подвал сайта
```typescript
// Структура:
// - Содержит компонент Copyright

// Автоматически включается в RootLayout
```

#### PageTitle
Унифицированный заголовок страниц
```typescript
interface Props extends ITypography {
  children?: React.ReactNode;
  className?: string;
  contentSlot?: React.ReactNode;  // Дополнительный контент справа
}

// Использование:
<PageTitle>home page</PageTitle>
<PageTitle contentSlot={<Button />}>projects</PageTitle>
```

#### ExperienceItem
Карточка опыта работы или образования
```typescript
// Props наследуются от Experience интерфейса
// Отображает: название, даты, описание, ссылку
```

### Utilities (Вспомогательные функции)

#### formatDate
Форматирование дат с использованием moment.js
```typescript
function formatDate(
  date: Date | string, 
  format?: string  // По умолчанию 'L' (локализованная дата)
): string

// Примеры:
formatDate('2024-01-15')              // "01/15/2024"
formatDate('2024-01-15', 'DD.MM.YYYY') // "15.01.2024"
formatDate(new Date(), 'MMMM YYYY')    // "January 2024"
```

#### getImageUrl
Преобразование относительных путей Strapi в полные URL
```typescript
function getImageUrl(url: string): string

// Логика:
// 1. Если URL полный (http:// или https://) - возвращает как есть
// 2. Если относительный - добавляет базовый URL из process.env.BD_OPEN_URL_STRAPI
// 3. Обрабатывает случаи с '/' и без '/' в начале

// Примеры:
getImageUrl('/uploads/photo.jpg')
// → 'http://localhost:1337/uploads/photo.jpg'

getImageUrl('https://cdn.example.com/image.jpg')
// → 'https://cdn.example.com/image.jpg'
```

### Icons Components
- `HerzenLogo` - логотип РГПУ им. Герцена
- `SocialArrow` - стрелка для социальных ссылок

## Deployment
- **Platform:** Vercel (рекомендуется)
- **Analytics:** Vercel Analytics интегрирована
- **Image Optimization:** Next.js Image с кастомными remote patterns
- **Cache TTL:** 6000 секунд для изображений

## Особенности реализации и Best Practices

### Data Fetching паттерны

#### 1. Server Components (по умолчанию)
Все страницы - async Server Components:
```typescript
const PageName = async () => {
  const { data } = await getAPI();
  return <Component data={data} />
}
```

#### 2. Client Components (когда нужны)
Используют директиву `'use client'`:
- `Header` - использует motion для навигации
- `BlocksRenderer` - использует Strapi renderer
- `MotionWrapper` - использует Framer Motion

#### 3. Кэширование
```typescript
// React cache для fetch запросов
export const getExperience = cache(async () => {
  const data = await fetch(url, {
    next: { revalidate: 1000 }  // Revalidate каждые 1000 сек
  });
  return data.json();
});
```

#### 4. Static Generation
```typescript
// generateStaticParams для динамических роутов
export const generateStaticParams = async () => {
  const projects = await getAllProjects();
  return projects.map(({ slug }) => ({ 
    id: slug.toString() 
  }));
};
```

### Styling Conventions

#### 1. SCSS Modules
```typescript
import styles from './Component.module.scss';

// Использование:
<div className={styles.component}>
  <div className={styles.component__element} />
</div>
```

#### 2. BEM Naming
```scss
.component {
  &__element {
    // стили элемента
  }
  
  &__element--modifier {
    // модификатор
  }
}
```

#### 3. Global Variables
Автоматически доступны во всех SCSS файлах:
```scss
// _vars.scss уже импортирован
.myComponent {
  max-width: $main-size;  // 42rem
  color: $dark900;         // #000000
  
  @include respond-to($mobile) {
    // Стили для mobile
  }
}
```

### Import Conventions

#### 1. Порядок импортов (ESLint)
```typescript
// 1. Builtin модули (react, next)
import { ReactNode } from 'react';
import Image from 'next/image';

// 2. External библиотеки
import classNames from 'classnames';
import { motion } from 'motion/react';

// 3. Internal модули (@/)
import { Component } from '@/shared/components';
import { getAPI } from '@/app/api/utils';

// Между группами - пустая строка
```

#### 2. Path Aliases
```typescript
// ✅ Правильно
import { Link } from '@/shared/components';
import { IProject } from '@/app/api/_model/project';

// ❌ Неправильно
import { Link } from '../../../shared/components';
```

### TypeScript Patterns

#### 1. Interface для Props
```typescript
interface ComponentProps {
  children: ReactNode;
  className?: string;  // Опциональные с ?
}

const Component = ({ children, className }: ComponentProps) => {
  // ...
}
```

#### 2. Extends для расширения
```typescript
interface MyTypography extends ITypography {
  additionalProp?: string;
}
```

#### 3. Type для Union и сложных типов
```typescript
type SocialType = 'profile' | 'channel' | 'mail' | 'group' | 'phone';
type IAbout = IStrapiType<{ id: number; description: RootNode[] }>;
```

### Анимации (Motion)

#### 1. MotionWrapper для fade-in
```typescript
<MotionWrapper>
  {children}  // Автоматический fade-in
</MotionWrapper>

<MotionWrapper clear>
  {children}  // Без анимаций
</MotionWrapper>
```

#### 2. Кастомные анимации
```typescript
<motion.nav>
  {/* Автоматически обернуто в анимацию */}
</motion.nav>
```

### Image Handling

#### 1. Next.js Image component
```typescript
import Image from 'next/image';
import { getImageUrl } from '@/shared/lib/getImageUrl';

<Image 
  src={getImageUrl(media.url)}  // Всегда через getImageUrl
  alt={media.caption}
  width={672}
  height={430}
  priority  // Для above-the-fold изображений
/>
```

#### 2. Regular img tag
```typescript
// Только для простых случаев (logo и т.д.)
<img 
  src={getImageUrl(logo.url)} 
  alt={name} 
  className={styles.image} 
/>
```

### Date Formatting

#### 1. formatDate для отображения
```typescript
import { formatDate } from '@/shared/lib/formatDate';

// По умолчанию locale format
formatDate(project.date)  // "01/15/2024"

// Кастомный формат
formatDate(date, 'DD.MM.YYYY')  // "15.01.2024"
```

#### 2. dayjs для кастомных форматов
```typescript
import dayjs from 'dayjs';

dayjs(startDate).format('MMMM YYYY')  // "January 2024"
dayjs(startDate).year()                // 2024
```

### Rich Content Rendering

#### 1. Strapi Blocks (RootNode[])
```typescript
import { BlocksRenderer } from '@/shared/components/BlocksRenderer/BlocksRenderer';

<BlocksRenderer content={description} />
// Автоматически рендерит: paragraphs, links, lists и т.д.
```

#### 2. Markdown (string)
```typescript
import { MarkdownRender } from '@/shared/components/BlocksRenderer/BlocksRenderer';

<MarkdownRender content={article} />
// Рендерит markdown в HTML
```

### Error Handling

#### 1. notFound()
```typescript
import { notFound } from 'next/navigation';

if (!id || !data) {
  notFound();  // Показывает 404 страницу
}
```

#### 2. Error Boundary
Автоматически обрабатывается через `error.tsx`

### Навигация

#### 1. Link компонент
```typescript
import { Link } from '@/shared/components';

<Link href="/projects" fontStyle="dark">
  {children}
</Link>
// Обертка над next/link с дополнительными стилями
```

#### 2. SocialLink
```typescript
import { SocialLink } from '@/shared/components';

<SocialLink href="https://t.me/username">
  send message
</SocialLink>
// Внешние ссылки с иконкой стрелки
```

## Особенности для AI агента

### Обязательные правила:

1. **ESLint (Airbnb)** 
   - Использовать `npm run lint` перед коммитом
   - Все правила в `.eslintrc`
   - Import order с newlines между группами
   - Curly braces обязательны

2. **TypeScript strict mode**
   - Явная типизация всех props
   - Использование интерфейсов для компонентов
   - Избегать `any`, использовать конкретные типы

3. **Conventional Commits**
   - Формат: `type(scope): subject`
   - Types: feat, fix, docs, style, refactor, test, chore, perf
   - Scopes: frontend, backend, database, config, etc.
   - Subject: lowercase, max 100 chars

4. **SCSS Modules + BEM**
   - Изолированные стили через CSS Modules
   - BEM naming: `.block__element--modifier`
   - Использование глобальных переменных из `_vars.scss`

5. **Server Components First**
   - По умолчанию все Server Components
   - `'use client'` только когда нужны хуки или браузерные API
   - Async/await для data fetching

6. **Path Aliases (@/)**
   - Всегда использовать `@/` для импортов из src
   - Никогда не использовать относительные пути типа `../../`

7. **Strapi Integration**
   - Два источника данных: Strapi (axios) и REST API (fetch)
   - Использовать `?populate=*` для связанных данных
   - `getImageUrl()` для всех изображений

8. **Responsive Design**
   - Использовать миксин `@include respond-to($breakpoint)`
   - Breakpoints: small, mobile, tablet, desktop, large
   - Mobile-first подход

### Потенциальные проблемы в проекте:

1. **Два API источника** - часть данных из Strapi, часть из другого API
2. **Contacts page** - не полностью реализована (закомментирован код)
3. **generateMetadata** - закомментирован в динамических страницах
4. **Опечатка** - metadata в Projects page говорит "Blog"
5. **Разные библиотеки дат** - используются и moment, и dayjs

## Архитектурные диаграммы

### Data Flow (Поток данных)

```
┌─────────────────────────────────────────────────┐
│                  Next.js App                     │
│                                                  │
│  ┌────────────────────────────────────────┐    │
│  │         Root Layout (Server)            │    │
│  │  - Preload: Social, Experience, etc.   │    │
│  │  - Header, Footer                       │    │
│  └────────────────┬───────────────────────┘    │
│                   │                              │
│  ┌────────────────▼───────────────────────┐    │
│  │         Page Components (Server)        │    │
│  │  - Home, Projects, Blog, CV, etc.      │    │
│  └────────────────┬───────────────────────┘    │
│                   │                              │
│  ┌────────────────▼───────────────────────┐    │
│  │           API Layer                     │    │
│  │  ┌─────────────────┬──────────────┐    │    │
│  │  │   Strapi CMS    │  REST API    │    │    │
│  │  │   (axios)       │  (fetch)     │    │    │
│  │  └─────────────────┴──────────────┘    │    │
│  └─────────────────────────────────────────┘    │
└─────────────────────────────────────────────────┘
           │                    │
           ▼                    ▼
    ┌──────────────┐    ┌──────────────┐
    │  Strapi API  │    │  Custom API  │
    │  Projects    │    │  Experience  │
    │  Articles    │    │  Social      │
    │  CV          │    │  Images      │
    │  About       │    │              │
    └──────────────┘    └──────────────┘
```

### Component Hierarchy (Иерархия компонентов)

```
RootLayout
├── Analytics
├── Header (Client)
│   └── Navigation Links
├── Page (Server)
│   ├── MotionWrapper (Client)
│   │   ├── PageTitle
│   │   ├── Content Components
│   │   │   ├── BlocksRenderer (Client)
│   │   │   │   ├── Paragraph
│   │   │   │   └── Link
│   │   │   ├── GridGallery
│   │   │   │   └── Next Image[]
│   │   │   └── ExperienceItem
│   │   │       └── BlocksRenderer
│   │   └── SocialLink[]
└── Footer
    └── Copyright
```

### File Structure Layers (Слои архитектуры)

```
┌─────────────────────────────────────────┐
│           app/ (Pages Layer)            │  ← Роутинг и страницы
│  - (router)/                            │
│  - api/ (API utils)                     │
│  - providers/                           │
├─────────────────────────────────────────┤
│          widgets/ (Feature)             │  ← Сложные фичи
│  - Header, Footer                       │
│  - PageTitle, ExperienceItem            │
├─────────────────────────────────────────┤
│         entities/ (Business)            │  ← Бизнес-сущности
│  - EducationBlock                       │
├─────────────────────────────────────────┤
│          shared/ (Foundation)           │  ← Общие ресурсы
│  - components/ (UI)                     │
│  - api/ (HTTP client)                   │
│  - lib/ (Utils)                         │
│  - types/ (TypeScript)                  │
│  - styles/ (Global SCSS)                │
└─────────────────────────────────────────┘
```

## Примеры кода для быстрого старта

### Создание новой страницы

```typescript
// src/app/(router)/new-page/page.tsx
import { MotionWrapper } from '@/shared/components/MotionWrapper';
import PageTitle from '@/widgets/PageTitle';
import { Paragraph } from '@/shared/components';

export const metadata = {
  title: 'New Page',
  description: 'Description of the new page',
};

const NewPage = async () => {
  // Data fetching (если нужно)
  // const data = await getAPI();

  return (
    <MotionWrapper>
      <PageTitle>page title</PageTitle>
      <Paragraph>Content goes here</Paragraph>
    </MotionWrapper>
  );
};

export default NewPage;
```

### Создание нового API метода

```typescript
// src/app/api/new-entity/utils.ts
import { instance } from '@/shared/api/api';
import { IStrapiType } from '@/shared/types/api';

// Определяем тип
export interface INewEntity {
  id: number;
  name: string;
  description: string;
}

// API метод
export const getNewEntity = (id: string | number) =>
  instance.get<IStrapiType<INewEntity>>(`/new-entity/${id}?populate=*`);

export const getAllNewEntities = () =>
  instance.get<IStrapiType<Array<INewEntity>>>('/new-entities');
```

### Создание нового компонента

```typescript
// src/shared/components/NewComponent/NewComponent.tsx
import classNames from 'classnames';

import styles from './NewComponent.module.scss';

interface NewComponentProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const NewComponent = ({ 
  children, 
  variant = 'primary',
  className 
}: NewComponentProps) => {
  return (
    <div className={classNames(
      styles.newComponent,
      styles[`newComponent--${variant}`],
      className
    )}>
      {children}
    </div>
  );
};

export default NewComponent;
```

```scss
// src/shared/components/NewComponent/NewComponent.module.scss
.newComponent {
  padding: 1rem;
  background: $light700;
  
  &--primary {
    color: $dark900;
  }
  
  &--secondary {
    color: $dark500;
  }
  
  @include respond-to($mobile) {
    padding: 0.5rem;
  }
}
```

### Работа с изображениями

```typescript
import Image from 'next/image';
import { getImageUrl } from '@/shared/lib/getImageUrl';
import { IMedia } from '@/shared/types/api';

interface Props {
  media: IMedia;
}

const ImageComponent = ({ media }: Props) => (
  <Image
    src={getImageUrl(media.url)}
    alt={media.alternativeText || media.name}
    width={media.width}
    height={media.height}
    priority={false}  // true для above-the-fold
  />
);
```

### Работа с динамическими роутами

```typescript
// src/app/(router)/entity/[id]/page.tsx
import { notFound } from 'next/navigation';

// Генерация статических путей
export const generateStaticParams = async () => {
  const entities = await getAllEntities();
  return entities.data.data.map(({ slug }) => ({
    id: slug.toString(),
  }));
};

// Опционально: динамические метаданные
export async function generateMetadata({ params }: { params: { id: string } }) {
  const entity = await getEntity(params.id);
  
  return {
    title: entity.data.data.name,
    description: entity.data.data.description,
  };
}

// Страница
const EntityPage = async ({ params }: { params: { id: string } }) => {
  const { data: { data: entity } } = await getEntity(params.id);
  
  if (!entity) {
    notFound();
  }
  
  return (
    <div>
      <h1>{entity.name}</h1>
      <p>{entity.description}</p>
    </div>
  );
};

export default EntityPage;
```

## Чеклист для разработки

### Перед началом работы:
- [ ] Установить зависимости: `npm install`
- [ ] Настроить `.env` с переменными `BD_OPEN_URL_STRAPI` и `BD_OPEN_URL`
- [ ] Запустить dev сервер: `npm run dev`
- [ ] Проверить доступность Strapi API

### При создании новой фичи:
- [ ] Определить типы в `src/app/api/_model/`
- [ ] Создать API методы в `src/app/api/[entity]/`
- [ ] Создать страницу в `src/app/(router)/`
- [ ] Использовать Server Components по умолчанию
- [ ] Добавить `'use client'` только при необходимости
- [ ] Обернуть в `MotionWrapper` для анимаций
- [ ] Использовать `PageTitle` для заголовков
- [ ] Создать SCSS Module для стилей

### Перед коммитом:
- [ ] Запустить `npm run lint` и исправить ошибки
- [ ] Запустить `npm run type-check` для проверки типов
- [ ] Проверить responsive design (mobile, tablet, desktop)
- [ ] Убедиться, что изображения оптимизированы
- [ ] Написать conventional commit message

### Code Review чеклист:
- [ ] Все импорты используют path alias `@/`
- [ ] Импорты отсортированы правильно (builtin → external → internal)
- [ ] TypeScript типы определены для всех props
- [ ] SCSS использует переменные из `_vars.scss`
- [ ] BEM naming convention в SCSS
- [ ] Responsive breakpoints используются где нужно
- [ ] Server Components используются где возможно
- [ ] Images обработаны через `getImageUrl()`
- [ ] Даты форматируются через `formatDate()` или `dayjs`
- [ ] Rich content рендерится через `BlocksRenderer` или `MarkdownRender`

## Полезные команды

```bash
# Development
npm run dev              # Запуск dev сервера (http://localhost:3000)
npm run build            # Production build
npm run start            # Запуск production сервера

# Code Quality
npm run lint             # ESLint с автофиксом
npm run type-check       # TypeScript проверка типов

# Git
npm run prepare          # Настройка Husky (автоматически при npm install)

# Debugging
# Next.js автоматически показывает ошибки в dev режиме
# Для production логов используйте console.log в Server Components
```

## FAQ для AI агента

**Q: Когда использовать Server Component vs Client Component?**  
A: По умолчанию Server Component. Client только для: интерактивности (onClick, useState), браузерных API, сторонних библиотек требующих клиент (motion, react-markdown renderer).

**Q: Как добавить новую страницу в навигацию?**  
A: Отредактировать `src/widgets/Header/Header.tsx`, добавить новый `<Link href="/path">label</Link>`.

**Q: Какой источник данных использовать для новой сущности?**  
A: Если данные в Strapi - использовать axios instance. Если отдельный API - fetch с cache().

**Q: Как обработать ошибки загрузки данных?**  
A: Использовать `notFound()` для 404, создать `error.tsx` для других ошибок.

**Q: Нужно ли создавать index.ts для экспортов?**  
A: Желательно для shared/components и widgets для удобства импорта.

**Q: Где хранить константы?**  
A: Глобальные константы - в отдельном файле в `src/shared/lib/constants.ts`.

**Q: Как работать с формами?**  
A: В проекте нет форм пока, но рекомендуется: react-hook-form + zod для валидации.

## Контактная информация автора
- **Telegram:** @ArthurNyan
- **Email:** aaryan@aaryan.ru
- **Website:** malos.ru

---

## Quick Reference (Быстрая справка)

### Основные команды
```bash
npm run dev         # Development сервер
npm run lint        # Проверка и автофикс ESLint
npm run type-check  # Проверка TypeScript
npm run build       # Production build
```

### Часто используемые импорты
```typescript
// Компоненты
import { Link, Paragraph, SocialLink } from '@/shared/components';
import { MotionWrapper } from '@/shared/components/MotionWrapper';
import { BlocksRenderer } from '@/shared/components/BlocksRenderer/BlocksRenderer';
import PageTitle from '@/widgets/PageTitle';

// Утилиты
import { formatDate } from '@/shared/lib/formatDate';
import { getImageUrl } from '@/shared/lib/getImageUrl';

// Типы
import { IMedia, IStrapiType } from '@/shared/types/api';
import { IProject } from '@/app/api/_model/project';
```

### Структура типичной страницы
```typescript
// Server Component (async)
const Page = async () => {
  const data = await getAPI();
  
  return (
    <MotionWrapper>
      <PageTitle>title</PageTitle>
      <Content data={data} />
    </MotionWrapper>
  );
};

export default Page;
```

### Переменные окружения
```env
BD_OPEN_URL_STRAPI=http://localhost:1337
BD_OPEN_URL=http://localhost:3001/api
```

---

**Последнее обновление документации:** 2026-01-16  
**Версия проекта:** 0.1.0  
**Next.js версия:** 14.2.35  
**Размер документации:** 1600+ строк
