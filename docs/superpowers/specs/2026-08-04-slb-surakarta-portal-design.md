# SLB Negeri Surakarta Inclusive Portal - Design Specification

**Date:** 2026-08-04  
**Author:** ENI & LO  
**Project:** SLB Surakarta Inclusive Portal  
**Framework:** Next.js 14 (App Router) + TypeScript + Tailwind CSS  
**Database:** Local SQLite via Prisma ORM  

---

## 1. Overview & Objectives
SLB Negeri Surakarta is a special education institution (Sekolah Luar Biasa) providing inclusive, supportive, and accessible education for students with diverse needs (Tunanetra, Tunarungu/Tuli, Tunagrahita, Tunadaksa, Autis, etc.).

This web application recreates and enhances the landing page designs from Stitch (`4270576688591273497`), providing a dynamic Next.js web portal backed by a local SQLite database using Prisma ORM.

### Key Features
- **Responsive Layout:** Pixel-perfect adaptive layouts inspired by mobile (`732f869715a844eea2d2bb80fe7338cd`) and tablet (`6ae6a9710d9d4a88ae73e702831df064`) Stitch screens.
- **Accessibility Toolbar (Fitur Inklusif):** Text resizing, high-contrast toggle, screen reader friendly semantic markup, and text-to-speech audio reader.
- **Dynamic Content from Local SQLite Database:**
  - School announcements (Pengumuman Sekolah)
  - Special education programs (Program Layanan Khusus)
  - School facilities & photo gallery (Fasilitas & Galeri)
  - PPDB (Pendaftaran Siswa Baru) information & contact form submissions
- **Admin / Data Seeder API:** Pre-populated realistic sample data for SLB Negeri Surakarta.

---

## 2. Technical Stack
- **Framework:** Next.js (App Router, TypeScript)
- **Styling:** Tailwind CSS, Lucide Icons, Framer Motion / CSS Transitions
- **Database Layer:** SQLite (`prisma/dev.db`)
- **ORM:** Prisma Client
- **API Routes:** Next.js Route Handlers (`app/api/announcements`, `app/api/programs`, `app/api/ppdb`)

---

## 3. Database Schema (`prisma/schema.prisma`)

```prisma
datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}

generator client {
  provider = "prisma-client-js"
}

model Announcement {
  id          String   @id @default(uuid())
  title       String
  category    String   // e.g. "Akademik", "Kegiatan", "PPDB"
  summary     String
  content     String
  date        DateTime @default(now())
  imageUrl    String?
  isImportant Boolean  @default(false)
}

model SpecialProgram {
  id          String   @id @default(uuid())
  name        String   // e.g. "Layanan Tunanetra (A)", "Layanan Tunarungu (B)"
  code        String   // A, B, C, C1, D, E, Autis
  description String
  features    String   // JSON string or comma-separated list of key techniques
  iconName    String
}

model Facility {
  id          String   @id @default(uuid())
  name        String
  category    String
  description String
  imageUrl    String
}

model ContactSubmission {
  id          String   @id @default(uuid())
  name        String
  email       String
  phone       String
  message     String
  createdAt   DateTime @default(now())
}
```

---

## 4. UI/UX & Inclusivity Guidelines
1. **Color Palette:**
   - Primary: Deep Educational Navy (`#1E3A8A`) & Warm Emerald (`#059669`)
   - Accent: Inclusive Amber (`#F59E0B`) for high clarity targets
   - High Contrast Mode: Crisp Black (`#000000`) background with High-Vis Yellow (`#FACC15`) text and borders
2. **Typography:** Inter / Outfit font family with adjustable root font-size utility.
3. **Interactive Elements:** Min target touch height 48px, focus-visible outlines, ARIA attributes on all interactive controls.

---

## 5. Verification & Testing
- Database seeding with Prisma CLI script (`npx prisma db push` & `npx prisma db seed`).
- API route verification with local HTTP requests.
- Visual layout testing across Mobile, Tablet, and Desktop viewports.
