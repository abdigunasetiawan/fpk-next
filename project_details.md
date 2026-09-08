# Dokumentasi Codebase: Forum Programmer Kaputama (FPK)

## 1. Ikhtisar Proyek
Proyek ini adalah codebase untuk website resmi **Forum Programmer Kaputama (FPK)**, sebuah organisasi/komunitas mahasiswa dari kampus Kaputama yang berfokus pada pengembangan keterampilan web development, UI/UX design, dan teknologi secara kolaboratif. 

Website ini bertindak sebagai company profile, landing page, dan portal informasi mengenai program, kegiatan, mentor, proyek portofolio, dan kontak dari komunitas tersebut.

## 2. Tech Stack & Dependencies
Proyek ini dikembangkan dengan teknologi modern berbasis JavaScript/TypeScript ekosistem.

- **Framework Utama**: Next.js 15.5.9 (menggunakan **App Router**)
- **Core Library UI**: React 19.1.0 & React DOM 19.1.0
- **Bahasa**: TypeScript (`.ts` / `.tsx`)
- **Styling**: 
  - Tailwind CSS v4 (`@tailwindcss/postcss`)
  - `clsx` & `tailwind-merge` (Pattern utility untuk penggabungan class CSS dinamis)
- **Animasi, Scrolling & UI/UX Interaktif**:
  - **Lenis** (`lenis`): Digunakan untuk memberikan efek *smooth scrolling* secara global pada seluruh halaman.
  - **Swiper** (`swiper`): Library carousel/slider canggih (kemungkinan digunakan di bagian Testimoni atau Galeri).
  - **React Fast Marquee** (`react-fast-marquee`): Untuk efek teks atau logo yang berjalan otomatis.
  - **React Loading Skeleton**: Untuk state loading placeholder.
- **Icons**: `@tabler/icons-react`
- **Analytics**: Vercel Analytics (`@vercel/analytics`) untuk memantau performa trafik.
- **Form Handling**: `@emailjs/browser` untuk mengirim pesan dari halaman *Contact* secara langsung ke email pengelola tanpa memerlukan server backend API sendiri.

## 3. Struktur Direktori (Architecture)
Struktur di dalam direktori `src/` sangat modular dengan pola pemisahan logika yang rapi.

```text
fpk-next/
├── public/                 # Aset statis (gambar, favicon, logo)
├── src/                    # Source code utama
│   ├── app/                # Sistem Routing Next.js (Daftar Pages & Layout)
│   ├── components/         # Komponen global (Navbar, Footer)
│   ├── hooks/              # Custom React Hooks (opsional)
│   ├── json/               # Mock data / Static JSON (Data dummy/statis)
│   ├── lib/                # Utility functions
│   └── providers/          # React Context Providers
├── next.config.ts          # Konfigurasi spesifik Next.js
├── package.json            # Daftar script & library
└── tsconfig.json           # Aturan bahasa TypeScript
```

## 4. Analisis Detail per Folder (`src/`)

### A. `src/app/` (Routing & Pages - Analisis Masing-masing Halaman)
Menggunakan **App Router** bawaan Next.js. Proyek ini memecah arsitektur UI halamannya (*page architecture*) dengan sangat rapi, di mana setiap *route* memiliki direktori `components` sendiri yang menampung *section-section* spesifik untuk halaman tersebut.

1. **Homepage (`/` pada folder `(root)`)**
   - File utama: `src/app/(root)/page.tsx`.
   - **Analisis**: Halaman ini merupakan *landing page* yang memanjang ke bawah dengan informasi ringkasan yang lengkap.
   - **Komponen Spesifik** (`src/app/(root)/components/`):
     - `Hero`: Bagian atas halaman dengan *call-to-action* (CTA) utama.
     - `Company`: Penjelasan singkat perihal FPK.
     - `Programs` & `Offers`: Menampilkan program kerja serta penawaran apa yang didapatkan anggota.
     - `Mentors`, `Events`, `Projects`, `Testimonials`: Komponen-komponen yang me-render list portofolio, kegiatan, mentor, dan ulasan.
     - `Decorations`: Tambahan elemen ornamen estetika pendukung (efek *blur*, gradasi *background*).

2. **Halaman About (`/about`)**
   - File utama: `src/app/about/page.tsx`.
   - **Analisis**: Fokus pada penjelasan yang lebih filosofis dan terstruktur terkait visi, misi, dan tim organisasi.
   - **Komponen Spesifik** (`src/app/about/components/`):
     - `HeroAbout`: Banner perkenalan awal halaman.
     - `VisiMisi`: Menjabarkan tujuan fundamental FPK.
     - `Benefit`: Manfaat spesifik bila bergabung dengan komunitas ini.
     - `Mentors` & `StrukturTim`: Memperkenalkan *leadership* dan orang-orang kunci di organisasi.

3. **Halaman Contact (`/contact`)**
   - File utama: `src/app/contact/page.tsx`.
   - **Analisis**: Halaman fungsionalitas untuk komunikasi dua arah dengan pengguna luar.
   - **Komponen Spesifik** (`src/app/contact/components/`):
     - `ContactHeader`: Teks judul dan info dasar kontak.
     - `ContactForm`: Formulir interaktif. Fungsionalitas utamanya dijalankan oleh dependensi `@emailjs/browser` yang dikonfigurasi langsung di *client-side* untuk mengirim surel umpan balik tanpa memerlukan *backend*.

4. **Halaman Events (`/events`)**
   - File utama: `src/app/events/page.tsx`.
   - **Analisis**: Etalase dokumentasi dan daftar acara. Terdiri dari ornamen dekorasi *glow* absolut.
   - **Komponen Spesifik** (`src/app/events/components/`):
     - `HeroEvents` & `EventsSection`: Menampilkan *grid* acara yang di-generate dari data statis FPK.

5. **Halaman Projects (`/projects`)**
   - File utama: `src/app/projects/page.tsx`.
   - **Analisis**: Ruang portofolio eksklusif bagi *showcase* coding/desain buatan member (sebagai nilai jual keilmuan).
   - **Komponen Spesifik** (`src/app/projects/components/`):
     - `HeroProjects` & `ProjectSection`: Menampilkan pameran hasil karya.

6. **File Root Fungsional di Dalam `src/app/`**
   - **`layout.tsx`**: *Root Layout*. Membungkus semua halaman dengan kerangka navigasi utama (`Navbar` dan `Footer`), menyisipkan `LenisProvider` untuk efek *smooth scroll*, font `Inter`, dan skrip `Analytics`.
   - **`robots.ts` & `sitemap.ts`**: Kode otomatis untuk optimasi SEO (*Search Engine Optimization*) yang membantu indeks Google.
   - **`globals.css`**: Basis layer konfigurasi Tailwind v4.

### B. `src/components/` (Global Components)
Berisi UI komponen yang di-*reuse* lintas halaman, yakni:
- `Navbar.tsx`: Bar navigasi di bagian atas.
- `Footer.tsx`: Catatan kaki halaman beserta hak cipta dan navigasi bawah.
- `svg/`: Folder khusus penampung ikon berbasis format `.svg`.

### C. `src/json/` (Data Store)
Karena proyek ini bersifat *company profile*, data tidak dipanggil dari database eksternal melalui REST API, melainkan di-*hardcode* melalui file TypeScript statis untuk meminimalkan beban server dan mempercepat *loading* situs:
- `events.ts`: Objek data kegiatan komunitas.
- `mentors.tsx`: Data mentor lengkap dengan profil singkatnya.
- `projects.ts`: Koleksi proyek/portofolio anggota.
- `testimonials.ts`: Pesan/ulasan tentang organisasi.

### D. `src/lib/`
- `utils.ts`: Hanya memuat fungsi `cn()`. Ini adalah standard best-practice modern pada React+Tailwind untuk menggabungkan class conditionally (mencegah bentroknya utility class).

### E. `src/providers/`
- `LenisProvider.tsx`: Membungkus anak root Next.js agar interaksi *scrolling* roda mouse terpengaruh secara reaktif (smooth dan inertia-based).

## 5. Praktik dan Setup Pendukung
- **Turbopack**: Perhatikan `package.json` script `dev` dan `build` di mana digunakan command `next ... --turbopack`. Ini berarti lingkungan pengembang dioptimalisasi menggunakan compiler bawaan mutakhir berbasis Rust untuk performa hot-reloading lokal super kencang.
- **Optimasi Metadata (SEO)**: Di dalam rute spesifik (contoh `page.tsx` Homepage), didefinisikan variabel `metadata` secara explisit lengkap dengan tag `openGraph`. Sangat siap apabila di-share di platform media sosial.
