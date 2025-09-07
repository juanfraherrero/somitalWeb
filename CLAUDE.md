# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with turbopack (Next.js 15)
- `npm run build` - Build the project for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks
- `npm run postbuild` - Generates sitemap after build (runs automatically)

## Project Architecture

This is a Next.js 15 tourism website for "Somital Aventuras" - an adventure tourism company in Mar del Plata, Argentina. The site promotes outdoor activities like trekking, mountain biking, paragliding, and school group activities.

### Directory Structure

- `src/app/` - Next.js App Router pages and layouts
  - Main pages: home (`page.js`), activities (`actividades/`), school activities (`colegios/`)
  - Uses file-based routing with dynamic routes for activity details (`[slug]`)
- `src/components/` - Reusable UI components (Navbar, Cards, Forms, Map integration)  
- `src/sections/` - Page section components (Hero, About, Activities, Location, etc.)
- `src/data/` - Static JSON data files (activities, FAQ, footer info, navigation)

### Key Technologies

- **Next.js 15** with App Router and Turbopack for development
- **React 19** with modern patterns
- **Tailwind CSS** with custom theme and CSS variables
- **Google Maps API** integration for location features
- **React Slick** for activity carousels
- **Google Analytics/Tag Manager** for tracking

### Styling System

Uses Tailwind with custom extensions:
- Custom fonts: Agrandir (sans), Raleway (heading), Chivo (body)
- HSL-based color system with CSS variables
- Custom breakpoints: `xmd: 860px`, `tope: 80rem`
- Custom border radius utilities for navigation elements

### Data Management

Static JSON files in `src/data/` contain:
- Activity information and details
- FAQ content  
- Navigation menu structure
- Location and contact information

### SEO & Analytics

- Comprehensive metadata setup
- Google Site Verification configured
- Google Tag Manager integration
- Sitemap generation via next-sitemap
- Structured content for adventure tourism keywords