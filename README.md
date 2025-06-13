

```markdown
# DriveAway Car Rentals

A modern car rental web application built with React, TypeScript, and Tailwind CSS. Browse luxury cars, view detailed information, and manage rentals with a clean, responsive interface.

## 🚗 Features

- **Car Browsing**: Search and filter through available rental cars
- **User Authentication**: Secure login/logout with Clerk authentication
- **Responsive Design**: Mobile-first design that works on all devices
- **Car Details**: Detailed car information with features and pricing
- **Modern UI**: Built with Shadcn/UI components and Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: React 18.3.1 with TypeScript 5.5.3
- **Build Tool**: Vite 5.4.1
- **Routing**: React Router DOM 6.26.2
- **Authentication**: Clerk React 5.31.9
- **UI Components**: Radix UI + Shadcn/UI
- **Styling**: Tailwind CSS 3.4.11
- **State Management**: TanStack Query 5.56.2
- **Form Handling**: React Hook Form 7.53.0
- **Validation**: Zod 3.23.8

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Mhmdyasser33/car-rental-app.git
cd car-rental-app
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory and add:
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📝 Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `vite` | Start development server |
| `build` | `vite build` | Build for production |
| `build:dev` | `vite build --mode development` | Build for development |
| `lint` | `eslint .` | Run ESLint |
| `preview` | `vite preview` | Preview production build |

## 🏗️ Project Structure

```
src/
├── components/
│   ├── layout/          # Layout components (Header, Footer)
│   └── ui/              # Reusable UI components
├── pages/               # Page components
│   ├── Index.tsx        # Homepage
│   ├── Cars.tsx         # Car browsing page
│   ├── CarDetails.tsx   # Individual car details
│   ├── About.tsx        # About page
│   └── NotFound.tsx     # 404 page
├── static/              # Static data files
├── data.ts              # Featured cars data
├── App.tsx              # Main app component
└── main.tsx             # Application entry point
```

## 🔐 Authentication

The application uses Clerk for authentication. Users can:
- Sign in/Sign up with various providers
- Access protected routes
- Manage their profile

Authentication is configured at the root level and integrated throughout the application.

## 🎨 UI Components

Built with a comprehensive UI system using:
- **Radix UI**: Accessible component primitives
- **Shadcn/UI**: Pre-built component library
- **Tailwind CSS**: Utility-first styling
- **Lucide React**: Modern icon library

## 📱 Pages

- **Homepage** (`/`): Featured cars and hero section
- **Cars** (`/cars`): Browse all available cars with search and filters
- **Car Details** (`/cars/:id`): Detailed view of individual cars
- **About** (`/about`): Information about the service
- **404** (`*`): Not found page

## 🔍 Car Browsing Features

- **Search**: Find cars by name
- **Category Filter**: Filter by Economy, Comfort, Luxury, Sports, Electric
- **Price Filter**: Filter by price ranges (Under $60, $60-$100, Over $100)
- **Responsive Grid**: Adaptive layout for different screen sizes

## 🚀 Deployment

1. Build the project:
```bash
npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
