# Week 5: Advanced CSS (Grid & Responsive Design)

This week, we’ll learn how to build **modern layouts** using **CSS Grid** and make them responsive with **media queries**.

---

## 📚 Class 1: CSS Grid

### 1. What is CSS Grid?

* CSS Grid is a **two-dimensional layout system**.
* Perfect for building **rows and columns**.
* Unlike Flexbox (1D), Grid controls both **horizontal and vertical** alignment.

---

### 2. Grid Container Basics

```css
.container {
  display: grid;
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: 150px 150px;
  gap: 10px;
}
```

* `display: grid` → turns element into a grid container.
* `grid-template-columns` → defines columns.
* `grid-template-rows` → defines rows.
* `gap` → space between grid cells.

---

### 3. Fractional Units (fr)

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}
```

💡 `fr` distributes space proportionally.

---

### 4. Placing Grid Items

```css
.item1 {
  grid-column: 1 / 3; /* spans 2 columns */
  grid-row: 1 / 2; /* occupies first row */
}
```

---

### 5. Grid Areas

```css
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
```

---

### 6. Real-World Example: Image Gallery

```html
<div class="gallery">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>
```

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
.gallery div {
  background: lightblue;
  padding: 20px;
  text-align: center;
}
```

---

### 💻 Class 1 Exercises

1. Create a **3x3 grid layout**.
2. Make one grid item span across 2 columns.
3. Build a simple **image gallery** with 6 images.

---

## 📚 Class 2: Responsive Web Design

### 1. Why Responsive Design?

* Websites must look good on **desktops, tablets, and mobiles**.
* Responsive design adapts layout to screen size.

---

### 2. The Viewport Meta Tag

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

### 3. Relative Units for Flexibility

* `%` → relative to parent size.
* `em` and `rem` → relative to font size.
* `vh` and `vw` → relative to viewport.

---

### 4. Media Queries

```css
@media (max-width: 768px) {
  body {
    background-color: lightyellow;
  }
}
```

* Triggers styles when screen width ≤ 768px.

---

### 5. Responsive Layout Example

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
  }
}
```

💡 Layout changes from 3 columns → 1 column on smaller screens.

---

### 6. Mobile-First Design

* Start with styles for **mobile screens**.
* Add media queries for larger screens.

```css
/* Mobile first */
.container { grid-template-columns: 1fr; }

/* Tablet */
@media (min-width: 600px) {
  .container { grid-template-columns: 1fr 1fr; }
}

/* Desktop */
@media (min-width: 1024px) {
  .container { grid-template-columns: 1fr 1fr 1fr; }
}
```

---

### 💻 Class 2 Exercises

1. Make a **3-column layout** that collapses into 1 column on mobile.
2. Create a responsive **navigation menu** (stacked on mobile, horizontal on desktop).
3. Build a portfolio grid that adjusts column count on different screens.

---

## 🏠 Homework

1. Build a **responsive image gallery** using Grid + media queries.
2. Make your Week 4 Flexbox layout responsive for tablet and mobile.
3. Create a **responsive landing page** with header, hero section, 3 feature cards, and footer.

---
