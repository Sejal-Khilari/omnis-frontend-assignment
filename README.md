# Omnis Frontend Assignment

A modern, responsive dashboard application built with Next.js 15, React 19, and Tailwind CSS 4. This project demonstrates advanced UI components, responsive design patterns, and modern React development practices.

## 🚀 Features

### Core Components
- **Responsive Sidebar Navigation** - Collapsible sidebar with smooth animations
- **Dynamic Tab Navigation** - Arrow-shaped overlapping tabs with active states
- **Step Progress Bar** - Interactive progress indicator with 10 steps
- **Dashboard Cards** - Multiple card layouts for different content types
- **Search Interface** - Advanced search with keyboard shortcuts
- **Notification System** - Real-time notifications with badges

### UI/UX Features
- **Dark Theme Sidebar** - Professional dark navigation with hover effects
- **Responsive Design** - Mobile-first approach with breakpoint optimization
- **Smooth Animations** - CSS transitions and transforms for enhanced UX
- **Component Architecture** - Atomic design pattern implementation
- **Accessibility** - ARIA labels and keyboard navigation support

## 🛠️ Tech Stack

### Core Technologies
- **Next.js**: `15.4.1` - React framework with App Router
- **React**: `19.1.0` - Latest React with concurrent features
- **TypeScript**: `^5` - Type-safe JavaScript development
- **Tailwind CSS**: `^4.1.11` - Utility-first CSS framework

### UI Libraries
- **Material-UI**: `^7.2.0` - React component library
- **React Icons**: `^5.5.0` - Icon library
- **Iconsax React**: `^0.0.8` - Modern icon set
- **Clsx**: `^2.1.1` - Conditional className utility

### Development Tools
- **ESLint**: `^9` - Code linting
- **PostCSS**: `^8.5.6` - CSS processing
- **Autoprefixer**: `^10.4.21` - CSS vendor prefixing

## 📦 Installation

### Prerequisites
- Node.js `18.17.0` or higher
- npm `9.0.0` or higher (or yarn `1.22.0` or higher)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd omnis-frontend-assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
src/
├── app/
│   ├── _components/
│   │   ├── atoms/           # Basic UI components
│   │   │   ├── Badge/
│   │   │   ├── Button/
│   │   │   ├── Card/
│   │   │   ├── SearchInput/
│   │   │   ├── StatCard/
│   │   │   └── TransactionItem/
│   │   ├── molecules/       # Composite components
│   │   │   ├── Navbar/
│   │   │   ├── Sidebar/
│   │   │   └── HomeContent/
│   │   └── organisms/       # Complex page sections
│   │       ├── RightSidebar/
│   │       └── HomeContent/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   ├── sideBarIcons/        # SVG icons for sidebar
│   ├── logo.svg
│   └── next.svg
```

## 🎨 Component Architecture

### Atomic Design Pattern

#### Atoms
- **Badge**: Status indicators and labels
- **Button**: Interactive buttons with variants
- **Card**: Container components with shadows
- **SearchInput**: Search functionality with shortcuts
- **StatCard**: Statistics display cards
- **TransactionItem**: Transaction row components

#### Molecules
- **Navbar**: Top navigation with search and user profile
- **Sidebar**: Collapsible navigation with dark theme
- **HeaderTitleSection**: Arrow-shaped tab navigation
- **StepProgressBar**: Multi-step progress indicator
- **HomeContent**: Dashboard content sections

#### Organisms
- **RightSidebar**: Complex dashboard sidebar
- **HomeContent**: Main dashboard layout

## 🎯 Key Components

### Sidebar Navigation
- **Collapsible Design**: Toggle between icon-only and full-width views
- **Dark Theme**: Professional dark color scheme
- **Smooth Animations**: CSS transitions for state changes
- **Responsive**: Adapts to different screen sizes

### Tab Navigation
- **Arrow-shaped Tabs**: Overlapping design with clip-path
- **Active States**: Visual feedback for current selection
- **Responsive**: Horizontal scrolling on smaller screens

### Step Progress Bar
- **10-Step Progress**: Visual progress indicator
- **Status Icons**: Different icons for completed, current, and upcoming steps
- **Color Coding**: Blue for active, gray for inactive states

## 🚀 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint







