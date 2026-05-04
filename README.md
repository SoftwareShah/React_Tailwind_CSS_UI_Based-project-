# 🏦 Digital Banking Platform UI

A beginner-level **React + Tailwind CSS** UI project built during my learning phase at **Apna College**.  
This project focuses on practising core React and Tailwind concepts by building a real-looking interface.

---

## 🖥️ Project Preview

> A Digital Banking Platform landing page with a responsive navbar, hero section, and an auto-scrolling customer segmentation card carousel.

---

## 🚀 Tech Stack

| Technology | Version |
|---|---|
| React | 19 |
| Tailwind CSS | 4 |
| Vite | 8 |
| Lucide React (icons) | 1.3 |

---

## 📁 Folder Structure

```
src/
├── App.jsx                        # Root component — holds cards data
├── index.css                      # Tailwind import + scroll animation
└── Components/
    ├── Section1/
    │   ├── Section1.jsx           # Full page wrapper
    │   ├── Navbar.jsx             # Top navigation bar
    │   ├── Page1Content.jsx       # Left + Right layout
    │   ├── LeftContent.jsx        # Hero card (text + arrow)
    │   ├── HeroText.jsx           # Heading and paragraph
    │   ├── ArrowText.jsx          # Arrow icon
    │   ├── RightContent.jsx       # Auto-scroll card strip
    │   └── RightCard.jsx          # Individual image card
    └── Section2/
        └── Section2.jsx           # Placeholder for next section
```

---

## ✅ Concepts Practised

### ⚛️ React
- **Functional Components** — every UI piece is a separate function component
- **Props** — passing `id`, `img`, `label` from parent to child
- **Props Drilling** — `App` → `Section1` → `Page1Content` → `RightContent` → `RightCard`
- **Array `.map()`** — dynamically rendering cards from a data array
- **`key` prop** — unique keys for list items including duplicated set
- **Component Composition** — small components combined to build complex UI
- **Implicit Return** — clean arrow function components with no `return` keyword

### 🎨 Tailwind CSS
- **Responsive prefixes** — `sm:` `md:` `lg:` for mobile-first design
- **Flexbox** — `flex`, `flex-col`, `flex-row`, `justify-between`, `items-center`, `gap`
- **Positioning** — `relative`, `absolute`, `inset-0` for layering elements
- **Overflow** — `overflow-hidden` to clip scroll strip and card images
- **Gradient overlay** — `bg-gradient-to-t from-black/75` over card images
- **Backdrop blur** — `backdrop-blur-sm` for frosted glass label effect
- **Opacity colors** — `bg-white/20`, `bg-black/75`
- **Hover & Transition** — `hover:bg-blue-600 transition` on buttons
- **Typography** — `font-bold`, `leading-tight`, `tracking-widest`, `uppercase`
- **Sizing** — `w-1/3`, `w-2/3`, `min-h-screen`, `calc(100vh - 73px)`
- **`shrink-0`** — prevents cards from shrinking inside flex scroll container

### 🎞️ CSS
- **`@keyframes`** — custom scroll animation
- **`transform: translateX()`** — moves card strip horizontally
- **`width: max-content`** — keeps all cards in one row for seamless loop

### 🟨 JavaScript
- **Array of objects** — cards data defined outside component (single source of truth)
- **`import` / `export default`** — modular component files
- **Arrow functions** — used in every component and `.map()` callback

---

## 🔄 How the Auto-Scroll Works

1. Cards data is an array of 6 objects in `App.jsx`
2. `RightContent` renders the array **twice** (original + duplicate = 12 cards)
3. A CSS `@keyframes` animation moves the strip left by `-50%` of its width
4. When the first 6 cards scroll out, the duplicate 6 are already in place
5. The animation loops `infinite` — creating a seamless carousel with no JavaScript

```css
@keyframes scroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.auto-scroll {
  display: flex;
  width: max-content;
  animation: scroll 29s linear infinite;
}
```

---

## ⚙️ Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/your-username/digital-banking-ui.git

# 2. Go into the folder
cd digital-banking-ui

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📚 What I Learned

This project helped me understand how to:
- Break a UI design into small reusable components
- Pass data from a top-level component down through props
- Build a fully responsive layout using only Tailwind utility classes
- Layer elements on top of images using `relative` / `absolute` positioning
- Create a smooth infinite scroll animation using pure CSS

---

## 🙋‍♂️ Author

Built with 💙 during the **Apna College React Learning Phase**

> *This is a learning project — not a production application.*
