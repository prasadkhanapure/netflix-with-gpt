# Netflix with GPT 

> **Curiosity-driven. Architecture-focused. Slightly obsessed with doing things the right way.**
>
> This project started with a simple question, What if Netflix search actually understood what I meant?
> What followed was a deep dive into modern frontend architecture, AI-assisted search, and production-grade backend decisions.
>
> This is **not just a UI clone**. It’s an experiment in building a realistic and future-ready application.

## Purpose of This Project

* Explore **GPT-powered semantic search** instead of keyword-only search
* Build a Netflix-like experience with **real architectural decisions**
* Practice **clean separation of concerns** (UI vs data vs auth)
* Move beyond tutorials into **production-style thinking**

## What’s Different

* GPT understands *intent*, not just movie names
* Smart matching layer between GPT output and TMDB data
* Data cleaned at the **hook level**, not in UI components
* Migration from Firebase → **Supabase** for long-term scalability

## Features

* **Authentication** (Email/Password)

  * Powered by **Supabase Auth**
  * Clean auth state handling

* **GPT‑based Movie Search**

  * Natural language movie queries
  * GPT suggests movie titles

* **TMDB Integration**

  * Fetches real movie metadata
  * Posters, titles, and details

* **Smart Matching Logic**

  * GPT results matched against TMDB responses
  * Null / undefined results filtered at the hook level

* **Redux State Management**

  * Centralized GPT + user state
  * UI components remain clean and dumb

## Latest Tech Stack

### Frontend

* React (Vite)
* TypeScript
* Redux Toolkit
* Tailwind CSS

### Backend / Services

* **Supabase**

  * Authentication
  * PostgreSQL
  * Row Level Security (RLS)
* OpenAI API (GPT)
* TMDB API

---

## Architecture Highlights

* **Hooks handle data responsibility**

  * API calls
  * Normalization
  * Filtering invalid data

* **Components focus only on rendering**

  * No defensive checks for null data

* **Type‑safe models**

  * App‑level `Movie` model
  * No leaking API response shapes

* **Clean separation of concerns**

  * Auth ≠ UI ≠ Data fetching

## Authentication Flow (Supabase)

1. User signs up / signs in
2. Supabase Auth manages session
3. Auth state listener updates Redux
4. Protected routes unlocked

---

## Folder Structure (Simplified)

```
src/
├── components/
├── hooks/
│   └── useGptSearchMovies.ts
├── store/
├── types/
│   └── movie.ts
├── utils/
│   └── supabaseClient.ts
```

---

## Environment Variables

Create a `.env` file:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_OPENAI_KEY=your_openai_api_key
VITE_TMDB_KEY=your_tmdb_api_key
```


## Getting Started

```bash
npm install
npm run dev
```

---

## Notes

* Firebase was intentionally **removed** to avoid vendor lock‑in
* Supabase chosen for SQL‑first design and better scalability
* Focus is on **architecture quality**, not just UI

---

## Author

**Prasad Khanapure**
Frontend Developer | React | System Design