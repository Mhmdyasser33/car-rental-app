A modern, full-featured car rental web application built with React, TypeScript, and Tailwind CSS. Browse available vehicles, view detailed information, and book rentals with an intuitive user interface.

## 🚗 Features

- **Vehicle Browsing**: Search and filter cars by category and price range
- **Detailed Car Information**: View specifications, features, and pricing
- **User Authentication**: Secure sign-in/sign-up with Clerk integration
- **Booking System**: Complete rental booking with date and location selection
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI**: Built with Shadcn/UI components and Radix UI primitives

## 🛠 Technology Stack

- **Frontend**: React 18.3.1 with TypeScript 5.5.3
- **Build Tool**: Vite 5.4.1
- **Routing**: React Router DOM 6.26.2
- **Authentication**: Clerk React 5.31.9
- **UI Components**: Radix UI + Shadcn/UI
- **Styling**: Tailwind CSS 3.4.11
- **State Management**: TanStack Query 5.56.2
- **Form Handling**: React Hook Form 7.53.0 with Zod validation
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
bash
git clone https://github.com/Mhmdyasser33/car-rental-app.git
cd car-rental-app


2. Install dependencies:
bash
npm install


3. Set up environment variables:
Create a `.env` file in the root directory and add:
env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here


4. Start the development server:
bash
npm run dev


The application will be available at `http://localhost:5173`

## 📝 Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `npm run dev` | Start development server |
| `build` | `npm run build` | Build for production |
| `build:dev` | `npm run build:dev` | Build in development mode |
| `preview` | `npm run preview` | Preview production build |
| `lint` | `npm run lint` | Run ESLint |

## 🏗 Project Structure


src/
├── components/
│   ├── layout/
│   │   └── Header.tsx          # Navigation and authentication
│   └── ui/                     # Reusable UI components
├── pages/
│   ├── Cars.tsx               # Vehicle listing with filters
│   ├── CarDetails.tsx         # Individual car details and booking
│   └── About.tsx              # Company information
├── App.tsx                    # Main application component
└── main.tsx                   # Application entry point


## 🔧 Configuration

### Authentication Setup

The application uses Clerk for authentication. To set up:

1. Create a Clerk account at [clerk.com](https://clerk.com)
2. Create a new application
3. Copy your publishable key to the `.env` file
4. The authentication is configured in the main application entry point

### Environment Variables

- `VITE_CLERK_PUBLISHABLE_KEY`: Your Clerk publishable key for authentication

## 🎨 UI Components

The application uses a modern component system built on:
- **Radix UI**: Accessible component primitives
- **Shadcn/UI**: Pre-built component library
- **Tailwind CSS**: Utility-first styling
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts

## 📱 Pages and Features

### Home Page (`/`)
- Landing page with featured cars and company overview

### Cars Page (`/cars`)
- Browse all available vehicles
- Search by car name
- Filter by category (SUV, Sedan, Hatchback, etc.)
- Filter by price range
- Responsive grid layout

### Car Details Page (`/cars/:id`)
- Detailed vehicle information
- Image gallery
- Specifications and features
- Booking form with date selection
- Price calculation

### About Page (`/about`)
- Company information
- Team members
- Company values and statistics

## 🔐 Authentication

User authentication is handled through Clerk with the following features:
- Sign in/Sign up functionality
- User profile management
- Protected routes and components
- Responsive authentication UI

## 🚀 Deployment

### Production Build

bash
npm run build


The build artifacts will be stored in the `dist/` directory.

### Preview Production Build

bash
npm run preview


## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License
This project is licensed under the MIT License.
