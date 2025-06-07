# 🌿 GreenLeaf Gardens - Plant Shopping Cart

A modern, responsive e-commerce application for houseplants built with React, TypeScript, and Redux Toolkit. This project demonstrates a complete shopping cart implementation with state management, dynamic UI updates, and a beautiful plant-themed design.

## ✨ Features

### 🏠 Landing Page
- Beautiful plant-themed background imagery
- Company information and branding
- Featured plant showcase
- Call-to-action button linking to product catalog

### 🛍️ Product Catalog
- **6 unique houseplants** organized into **3 categories**:
  - 🌱 Indoor Plants (Monstera Deliciosa, Snake Plant)
  - 🌵 Succulents (Jade Plant, Echeveria Collection)
  - 🌸 Flowering Plants (Peace Lily, Orchid Plant)
- Each plant displays thumbnail, name, price, and description
- Smart "Add to Cart" buttons that disable after adding items
- Category-based organization for easy browsing

### 🛒 Shopping Cart
- Real-time cart updates with Redux state management
- Display total number of items and total cost
- Individual plant cards showing thumbnail, name, and unit price
- Quantity controls (increase/decrease) for each plant type
- Delete functionality to remove items
- "Coming Soon" checkout placeholder
- Continue shopping navigation

### 🧭 Navigation Header
- Responsive navigation bar present on all pages
- Shopping cart icon with live item counter
- Seamless navigation between pages
- Modern, accessible design with theme support

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **State Management**: Redux Toolkit with React-Redux
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS with shadcn/ui components
- **Build Tool**: Vite
- **Package Manager**: Bun
- **UI Components**: Radix UI primitives with custom styling

## 🎨 Design System

- **Theme Support**: Built-in dark/light mode compatibility
- **Component Library**: shadcn/ui for consistent, accessible components
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Icons**: Lucide React for crisp, scalable icons
- **Typography**: Clean, modern font stack with proper hierarchy

## 📱 Responsive Features

- Mobile-optimized navigation and layouts
- Touch-friendly buttons and controls
- Responsive grid systems for product display
- Adaptive spacing and sizing across devices

## 🔧 Development

### Prerequisites
- Node.js 18+ or Bun runtime
- Modern web browser with ES2020+ support

### Setup
```bash
# Install dependencies
bun install

# Start development server
bun dev

# Build for production
bun build
```

### Project Structure
```
src/
├── components/          # Reusable UI components
├── pages/              # Page-level components
├── store/              # Redux store and slices
├── data/               # Plant data and categories
├── hooks/              # Custom React hooks
└── lib/                # Utility functions
```

## 🚀 Features Implemented

### Redux State Management
- **Cart Slice**: Manages cart items, quantities, and totals
- **Type Safety**: Full TypeScript integration
- **Persistent State**: Cart state maintained across navigation
- **Action Creators**: Clean, predictable state updates

### User Experience
- **Instant Feedback**: Immediate UI updates on user actions
- **Loading States**: Smooth transitions and interactions
- **Error Handling**: Graceful error states with user feedback
- **Accessibility**: Keyboard navigation and screen reader support

### Performance Optimizations
- **Code Splitting**: Lazy-loaded routes and components
- **Optimized Images**: Properly sized and formatted plant images
- **Efficient Rendering**: Redux selectors prevent unnecessary re-renders
- **Modern Build**: Vite for fast development and optimized production builds

## 🌱 Plant Categories

### Indoor Plants
Perfect for brightening up your living space with low-maintenance greenery.

### Succulents
Hardy, beautiful plants that require minimal care and add modern appeal.

### Flowering Plants
Elegant blooming plants that bring color and fragrance to any room.

## 📄 License

This project is for educational and portfolio demonstration purposes.

---

*Built with ❤️ for plant enthusiasts and coding learners alike.*