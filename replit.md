# VitaLab - Life Tracking Application

## Overview

VitaLab is a comprehensive life tracking application that helps users monitor and improve their lifestyle through activity logging, behavior analysis, and goal tracking. The application uses AI-powered behavior recognition to automatically categorize activities and provide impact scores, helping users understand how their daily actions affect their overall life quality.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Theme**: Dark/light mode support with CSS variables

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: Express sessions with PostgreSQL storage
- **Development**: Hot module replacement via Vite integration

### Database Design
The application uses PostgreSQL with the following core tables:
- **users**: User profiles with current life scores
- **activities**: User activity logs with AI-detected keywords and impact scores
- **life_score_history**: Historical tracking of life score changes
- **goals**: User-defined goals with progress tracking

## Key Components

### Activity Logger
- Natural language processing for behavior analysis
- Comprehensive behavior dictionary with 1000+ terms
- Automatic impact scoring (-10 to +10 scale)
- Category classification (fitness, nutrition, mindfulness, etc.)
- Real-time analysis and feedback

### Life Score System
- Dynamic scoring based on activity impacts
- Historical tracking and visualization
- Chart.js integration for data visualization
- Progressive score updates with activity logging

### Goal Tracking
- Customizable goals with different time periods (daily, weekly, monthly)
- Progress tracking and visualization
- Category-based organization
- Achievement monitoring

### Analytics Dashboard
- Real-time insights and trends
- Weekly behavior analysis
- Category-based activity breakdown
- Personalized recommendations

## Data Flow

1. **Activity Input**: User enters activity description in natural language
2. **Behavior Analysis**: Client-side AI processes text using behavior dictionary
3. **Impact Calculation**: System calculates impact score and categorizes activity
4. **Database Storage**: Activity is stored with detected keywords and metadata
5. **Score Update**: User's life score is updated based on activity impact
6. **Real-time Updates**: Dashboard refreshes to show new data and insights

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Neon database connectivity
- **drizzle-orm**: Type-safe database operations
- **@tanstack/react-query**: Server state management
- **chart.js**: Data visualization
- **react-chartjs-2**: React wrapper for Chart.js

### UI Components
- **@radix-ui/***: Accessible component primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library

### Development Tools
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production
- **vite**: Development server and build tool

## Deployment Strategy

### Development Environment
- **Runtime**: Replit with Node.js 20
- **Database**: PostgreSQL 16
- **Hot Reload**: Vite development server with HMR
- **Port Configuration**: Local port 5000, external port 80

### Production Build
- **Frontend**: Vite builds optimized static assets
- **Backend**: esbuild bundles server code with external packages
- **Deployment**: Autoscale deployment target on Replit
- **Environment**: Production mode with optimized builds

### Database Management
- **Schema**: Managed through Drizzle Kit
- **Migrations**: Automatic schema synchronization
- **Connection**: Serverless PostgreSQL via Neon

## Recent Changes
- June 19, 2025: Initial setup with React frontend and Express backend
- June 19, 2025: Added PostgreSQL database integration with Drizzle ORM
- June 19, 2025: Implemented Replit Auth with user registration and login
- June 19, 2025: Created comprehensive behavior dictionary with 8000+ terms
- June 19, 2025: Built baseline assessment system for new users
- June 19, 2025: Added heart rate monitoring with camera-based detection
- June 19, 2025: Implemented professional wellness gradient design
- June 19, 2025: Created contextual onboarding with interactive wellness tour
- June 19, 2025: Added landing page with login buttons for user dashboard
- June 19, 2025: Cleaned demo data and prepared database for production deployment

## Production Status (Complete)

### Final Cleanup & Debugging (June 19, 2025):
1. **TypeScript Errors**: Fixed null safety issues in header component for user names
2. **Database Cleanup**: Removed demo data and prepared clean production database
3. **Replit Auth Integration**: Fully configured with automatic user creation
4. **Production Scripts**: Added database cleanup commands for deployment
5. **Documentation**: Updated project documentation for production deployment

### Authentication Flow Debug (June 20, 2025):
1. **Session Configuration**: Fixed secure cookie settings for development environment
2. **OIDC Integration**: Resolved authentication initialization with proper error handling
3. **User Registration**: Enhanced database wiring to auto-create users during auth flow
4. **Assessment Completion**: Fixed "user not found" issue after baseline assessment
5. **Holistic Assessment**: Expanded baseline questions to cover broader life aspects

### Production-Ready Features:
- **Authentication**: Replit Auth with automatic user registration and session management
- **Baseline Assessment**: Mandatory first-time user assessment for life score calculation
- **Activity Tracking**: AI-powered behavior analysis with 8000+ term dictionary
- **Heart Rate Monitoring**: Camera-based detection with manual entry fallback
- **Goal Management**: Create and track personal wellness goals
- **Analytics Dashboard**: Real-time insights and progress visualization
- **Responsive Design**: Professional wellness gradient theme with mobile optimization
- **Interactive Onboarding**: Contextual wellness tour for new users

### Database Schema:
- **Clean Production State**: All demo data removed, ready for real users
- **Automatic Migrations**: Drizzle ORM handles schema updates
- **Session Storage**: PostgreSQL-backed user sessions
- **Data Integrity**: Full CRUD operations with proper error handling

The application is production-ready with all features tested and verified. Users can register, complete assessments, track activities, monitor health metrics, and achieve wellness goals.

## User Preferences

Preferred communication style: Simple, everyday language.