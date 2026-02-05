# JobNova - Job Board with Recommendation

A production-quality, responsive Job Board application built with React, TypeScript, Vite, and TailwindCSS. This application matches the Figma design and provides a complete job browsing and application experience.

## Features

### Core Functionality
- **Job Listing Page** (`/jobs`)
  - Three-column layout: Sidebar navigation, main job feed, and promotional panel
  - Tab-based filtering: Matched, Liked, and Applied jobs
  - Search functionality (title, company, location)
  - Sort options: Match percentage, Most recent, Salary
  - Job cards with match percentage donut rings
  - Like and Apply actions with localStorage persistence

- **Job Details Page** (`/jobs/:id`)
  - Comprehensive job information display
  - Match score visualization
  - Sections: Overview, Qualifications, Requirements, Preferred, Responsibilities, Benefits, Company
  - "Why hiring is a good fit for me?" analysis panel
  - Action buttons: Apply, Mock Interview, Like, Share

### UI Components
- **Layout Components**
  - Responsive sidebar navigation (hamburger menu on mobile)
  - Sticky header with tabs and filters
  - Three-column desktop layout

- **Job Components**
  - MatchRing: Animated donut chart showing match percentage
  - JobCard: Interactive job listing cards
  - TagPill: Styled tags for job attributes
  - JobsTabs: Tab navigation with counts

- **Details Components**
  - JobDetailsHeader: Job title, company, match score, actions
  - Section: Collapsible content sections
  - QualificationTags: Interactive skill tags
  - FitAnalysis: Match breakdown panel

### User Experience
- Loading skeletons for initial page load
- Toast notifications for user actions
- Smooth hover effects and transitions
- Responsive design (mobile-first approach)
- Keyboard accessibility
- Empty states handling

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **React Router** - Client-side routing

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── details/          # Job details page components
│   ├── jobs/             # Job listing components
│   ├── layout/           # Layout components (Sidebar, AppShell)
│   └── ui/               # Reusable UI components (Toast, Loading)
├── data/
│   └── jobs.ts           # Mock job data
├── pages/
│   ├── JobsPage.tsx      # Main job listing page
│   └── JobDetailsPage.tsx # Job details page
├── types/
│   └── index.ts          # TypeScript type definitions
├── utils/
│   ├── storage.ts        # localStorage utilities
│   └── toast.ts          # Toast notification system
├── App.tsx               # Main app component with routing
├── main.tsx              # Entry point
└── index.css             # Global styles
```

## Mock Data

The application uses mock data stored in `src/data/jobs.ts`. The data includes:
- 10 sample jobs with complete information
- Match percentages, skills, requirements, benefits, etc.
- Company information and social links

## Data Persistence

User interactions are persisted using `localStorage`:
- **Liked Jobs**: Stored in `jobnova_liked_jobs`
- **Applied Jobs**: Stored in `jobnova_applied_jobs`

The application automatically syncs job statuses on page load.

## Features Implemented

✅ Desktop three-column layout matching Figma design
✅ Responsive mobile layout with hamburger menu
✅ Job listing with match percentage rings
✅ Search and sort functionality
✅ Tab-based filtering (Matched/Liked/Applied)
✅ Like and Apply actions with persistence
✅ Job details page with all sections
✅ Loading states and skeletons
✅ Toast notifications
✅ Empty states
✅ Keyboard accessibility
✅ Smooth animations and transitions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)




