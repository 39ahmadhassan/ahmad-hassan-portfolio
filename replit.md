# Portfolio Website Application

## Overview

This is a modern full-stack portfolio website built with React, Express.js, and Drizzle ORM. The application showcases a developer's skills, projects, and provides a contact form for potential clients or collaborators. It features a modern design with shadcn/ui components, smooth animations, and a responsive layout.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a clean separation between frontend and backend, with shared schema definitions and a modern development setup optimized for both development and production environments.

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth page transitions and interactions
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Validation**: Zod schemas shared between frontend and backend
- **Development**: Hot module replacement with Vite integration
- **Storage**: Abstracted storage interface with in-memory implementation for development

## Key Components

### Database Schema (`shared/schema.ts`)
- **Users Table**: Basic user management with username/password
- **Contacts Table**: Contact form submissions with timestamp tracking
- **Type Safety**: Full TypeScript integration with Drizzle ORM

### API Endpoints
- `POST /api/contact`: Submit contact form with validation
- `GET /api/contacts`: Retrieve all contact submissions (admin)
- `GET /api/resume`: Download resume endpoint

### UI Components
- **Navigation**: Fixed header with smooth scrolling navigation
- **Sections**: Modular portfolio sections (Hero, About, Skills, Projects, Reviews, Activity, Blog, Contact, Footer)
- **Theme System**: Light/dark mode toggle with persistent preferences
- **Responsive Design**: Mobile-first approach with adaptive layouts

### Form Management
- **Contact Form**: Validated contact submission with toast notifications
- **Error Handling**: Comprehensive error states and user feedback
- **Type Safety**: End-to-end type safety from form to database

## Data Flow

1. **Frontend Interaction**: User interacts with React components
2. **Form Validation**: Client-side validation using Zod schemas
3. **API Communication**: TanStack Query manages HTTP requests
4. **Backend Processing**: Express.js routes handle business logic
5. **Database Operations**: Drizzle ORM provides type-safe database access
6. **Response Handling**: Structured JSON responses with error handling

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **@tanstack/react-query**: Server state management
- **drizzle-orm**: Type-safe ORM with PostgreSQL support
- **react-hook-form**: Form state management
- **framer-motion**: Animation library
- **wouter**: Lightweight routing

### UI Dependencies
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **class-variance-authority**: Component variant management

### Development Dependencies
- **vite**: Build tool and dev server
- **typescript**: Type checking
- **tsx**: TypeScript execution
- **esbuild**: Fast bundling for production

## Deployment Strategy

### Development Environment
- **Vite Dev Server**: Hot module replacement and fast builds
- **Memory Storage**: In-memory data storage for development
- **Environment Variables**: Database URL configuration
- **Error Overlay**: Runtime error visualization

### Production Build
- **Frontend**: Vite builds optimized static assets
- **Backend**: esbuild bundles server code for Node.js
- **Database**: PostgreSQL with connection pooling
- **Static Serving**: Express serves built frontend assets

### Configuration Files
- **Drizzle Config**: Database connection and migration settings
- **Vite Config**: Build configuration with path aliases
- **Tailwind Config**: Design system configuration
- **TypeScript Config**: Compiler options and path mapping

The application is designed for easy deployment to platforms like Replit, Vercel, or traditional hosting providers with minimal configuration changes.