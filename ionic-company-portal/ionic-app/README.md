# TechCorp Company Portal
## Ionic Angular Project

A modern, responsive company management portal with authentication, dashboard, and general setup screens.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (https://nodejs.org)
- npm 9+
- Ionic CLI

### Installation

```bash
# 1. Install Ionic CLI globally
npm install -g @ionic/cli

# 2. Navigate to the project folder
cd ionic-app

# 3. Install dependencies
npm install

# 4. Run the app
ionic serve
```

The app will open at **http://localhost:8100**

---

## 📁 Project Structure

```
src/app/
├── auth/
│   ├── login/          # Company login page
│   └── register/       # Company registration page
├── layout/
│   ├── header/         # Top navigation header
│   ├── sidebar/        # Collapsible sidebar navigation
│   ├── footer/         # App footer
│   └── layout.page     # Main shell component
├── dashboard/          # Dashboard with stats & charts
├── general-setup/
│   ├── users/          # User management (CRUD)
│   ├── roles/          # Role management + permission matrix
│   └── departments/    # Department management
├── services/
│   └── auth.service.ts # Authentication service
└── guards/
    └── auth.guard.ts   # Route protection
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary | `#0A1628` (Dark Navy) |
| Accent | `#E8A020` (Gold) |
| Background | `#F0F4FA` |
| Surface | `#FFFFFF` |
| Font | Plus Jakarta Sans + Lora |

---

## 📱 Features

### Authentication
- ✅ Login page with email/password
- ✅ Registration with password strength indicator
- ✅ Remember me & forgot password
- ✅ Social login buttons (Google, Microsoft)

### Dashboard
- ✅ 4 KPI stat cards with trends
- ✅ Recent activity feed
- ✅ Department utilization chart
- ✅ System health monitor
- ✅ Recent users table

### Layout
- ✅ Collapsible sidebar with accordion menus
- ✅ Responsive header with search, notifications, user dropdown
- ✅ Sticky footer with version info
- ✅ Mobile hamburger menu

### General Setup
- ✅ **Users**: Full CRUD with search, filter, status toggle, avatar
- ✅ **Roles**: Card-based view + permission matrix with visual indicators
- ✅ **Departments**: Card grid with stats, color coding, member drill-down

---

## 📦 Build for Production

```bash
ionic build --prod
```

Output will be in the `www/` folder, ready to deploy to any static hosting.

---

## 🛠 Customization

- Change colors in `src/theme/variables.scss`
- Add API calls in `src/app/services/auth.service.ts`
- Extend routes in `src/app/layout/layout.module.ts`
