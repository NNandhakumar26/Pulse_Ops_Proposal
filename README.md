# Pulse Ops - Workforce Management System

A comprehensive React application for managing employee attendance, scheduling, leave requests, reimbursements, and client billing. This app features static authentication and showcases interactive prototypes converted from HTML to React.

## Features

- **Static Authentication**: .env-based login (no backend required)
- **Protected Routes**: All pages require authentication
- **Dashboard**: Main presentation page with links to all modules
- **Admin Dashboard**: Comprehensive management interface
- **Employee Portal**: Self-service portal for employees
- **Mobile App Preview**: Mobile application screens preview
- **Complete Report**: Full system documentation

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd pulse-ops-app
```

2. Install dependencies (already done):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## Authentication

The app uses static authentication configured in the `.env` file:

**Default Credentials:**
- Username: `admin`
- Password: `password_here`

To change credentials, edit the `.env` file:
```
VITE_AUTH_USERNAME=your_username
VITE_AUTH_PASSWORD=your_password
```

## Project Structure

```
pulse-ops-app/
├── public/
│   ├── assets/
│   │   ├── pulse-ops-logo.png
│   │   └── pulse-ops-logo-animated.mp4
│   ├── admin-dashboard.html        # Original HTML (loaded in iframe)
│   ├── employee-portal.html        # Original HTML (loaded in iframe)
│   ├── mobile-app.html             # Original HTML (loaded in iframe)
│   └── complete-report.html        # Original HTML (loaded in iframe)
├── src/
│   ├── components/
│   │   ├── Login.jsx
│   │   ├── Login.css
│   │   └── ProtectedRoute.jsx
│   ├── pages/
│   │   ├── Dashboard.jsx           # Main landing page
│   │   ├── Dashboard.css
│   │   ├── AdminDashboard.jsx      # Wrapper with iframe
│   │   ├── AdminDashboard.css
│   │   ├── EmployeePortal.jsx      # Wrapper with iframe
│   │   ├── EmployeePortal.css
│   │   ├── MobileApp.jsx           # Wrapper with iframe
│   │   ├── MobileApp.css
│   │   ├── CompleteReport.jsx      # Wrapper with iframe
│   │   └── CompleteReport.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── .env
├── package.json
└── vite.config.js
```

**Note on HTML Files & Assets:**
The prototype HTML files are loaded directly via iframes to preserve all original functionality including:
- Mermaid.js diagrams in Complete Report
- All interactive features and JavaScript
- Original styling and layouts

Assets use relative paths (`assets/...`) which work correctly because both the HTML files and assets folder are in the `public/` directory.

## Available Routes

- `/login` - Login page
- `/dashboard` - Main dashboard (landing page after login)
- `/admin-dashboard` - Admin management interface
- `/employee-portal` - Employee self-service portal
- `/mobile-app` - Mobile application preview
- `/complete-report` - System documentation

All routes except `/login` are protected and require authentication.

## Building for Production

To create a production build:

```bash
npm run build
```

The build will be created in the `dist` folder.

To preview the production build:

```bash
npm run preview
```

### Deployment Notes

When deploying to production:
1. All files in the `public/` folder (including HTML files and assets) will be copied to the `dist/` folder
2. Asset paths will work correctly because the relative paths are preserved
3. The HTML files can be accessed via iframes at paths like `/admin-dashboard.html`
4. No additional configuration is needed for asset loading

**Verified to work with:**
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Font Awesome** - Icons
- **Google Fonts (Inter)** - Typography

## Features Breakdown

### Login Component
- Static authentication using .env variables
- Error handling with timeout
- Responsive design with gradient background

### Dashboard (Main Page)
- Hero section with animated logo
- Prototypes showcase cards
- Key features grid
- Smooth scrolling
- Logout functionality

### Admin Dashboard
- Sidebar navigation
- Multiple dashboard sections
- Real-time data visualization
- User management
- Reports and analytics

### Employee Portal
- Clock in/out functionality
- Live time display
- Attendance tracking
- Schedule viewing
- Leave and reimbursement management

### Mobile App Preview
- Mobile screen mockups
- Interactive UI elements
- Feature showcase

### Complete Report
- Comprehensive documentation
- System architecture
- API specifications
- Deployment guidelines

## Notes

- All assets are loaded from the `public/assets/` folder
- The app uses localStorage to persist authentication state
- No backend or API is required for authentication
- All data shown is static/mock data for prototype purposes

## License

All rights reserved - Pulse Ops 2024
