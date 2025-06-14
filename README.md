# Shoe Store E-Commerce App

![Project Preview](https://example.com/project-preview.jpg) <!-- Add your project screenshot URL -->

## 📌 Features
- **Product Filtering**:
  - Category (Sneakers, Flats, Sandals, Heels)
  - Price Range ($0-50, $50-100, $100-150, $150+)
  - Color (Black, Blue, Red, Green, White)
  - Brand (Nike, Adidas, Puma, Vans)
  
- 🔍 Search Functionality
- 📱 Responsive Design (Mobile, Tablet, Desktop)
- ✨ Interactive UI Animations

## 🛠️ Technology Stack
- **Frontend**: 
  - React.js (v18+)
  - CSS3 (Flexbox, Grid)
  - React Icons
- **Styling**:
  - CSS Modules
  - Custom Properties (CSS Variables)
  - Responsive Design Principles

## 🏗️ Project Structure
```bash
src/
├── components/
│   ├── Button.jsx    # Reusable button component
│   ├── Card.jsx      # Product card component
│   ├── Input.jsx     # Custom input field
├── db/
│   └── data.jsx      # All product data
├── Navigation/
│   ├── Nav.jsx       # Navigation bar
│   └── Nav.css       # Navigation styles
├── Products/
│   ├── Products.jsx  # Product listing
│   └── Product.css   # Product styles
├── Recommended/
│   ├── Recommended.jsx # Recommended section
│   └── Recommended.css 
├── Sidebar/
│   ├── Sidebar.jsx    # Filter sidebar
│   ├── Sidebar.css    
│   ├── Category/      # Category filter
│   ├── Colors/        # Color filter
│   └── Price/         # Price filter
└── App.jsx            # Main app component