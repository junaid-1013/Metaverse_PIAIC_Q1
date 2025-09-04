# Week 4: Advanced CSS (Layout & Flexbox)

This week, we move beyond basic styling into **page layouts**. You will learn how to control the positioning of elements, create multi-column designs, and build responsive layouts using **Flexbox**.

---

## 📚 Class 1: CSS Layout Basics

### 1. Width and Height

* Control element size with `width` and `height`.

```css
div {
  width: 300px;
  height: 200px;
  background: lightgray;
}
```

* Use `%` for relative sizing → adapts to parent/container size.

---

### 2. Positioning

CSS positioning defines how elements are placed on a page:

* **static** → default, normal flow.
* **relative** → positioned relative to itself.
* **absolute** → positioned relative to the nearest positioned ancestor.
* **fixed** → stays in place when scrolling.
* **sticky** → toggles between relative and fixed.

Example:

```css
.box {
  position: absolute;
  top: 50px;
  left: 100px;
}
```

💡 Use **sticky** for navbars that remain visible during scrolling.

---

### 3. Float and Clear

* `float` → moves elements left or right.
* `clear` → prevents elements from wrapping around floated ones.

Example:

```css
img {
  float: right;
  margin: 10px;
}
```

⚠️ Floats were historically used for layouts but now replaced by Flexbox/Grid.

---

### 4. Z-Index

Controls stacking order of elements.

```css
.box1 { z-index: 1; }
.box2 { z-index: 2; }
```

Higher z-index = displayed on top.

---

### 5. Real-World Example: Sticky Navbar

```html
<div class="navbar">Navigation</div>
```

```css
.navbar {
  position: sticky;
  top: 0;
  background: #333;
  color: white;
  padding: 10px;
}
```

---

### 💻 Class 1 Exercises

1. Create a two-column blog layout with float.
2. Build a sticky navbar at the top of the page.
3. Use absolute positioning to place a button at bottom-right.

---

## 📚 Class 2: Flexbox

### 1. Why Flexbox?

* Provides powerful tools for aligning and distributing space.
* Replaces floats and complicated hacks.
* Ideal for **responsive design**.

---

### 2. Flex Container Properties

```css
.container {
  display: flex;
  flex-direction: row; /* row | column */
  justify-content: space-between; /* main axis */
  align-items: center; /* cross axis */
  flex-wrap: wrap; /* allow items to wrap */
}
```

* `flex-direction`: row, column
* `justify-content`: start, end, center, space-between, space-around
* `align-items`: stretch, center, flex-start, flex-end
* `flex-wrap`: wrap items onto multiple lines

---

### 3. Flex Item Properties

```css
.item {
  flex-grow: 1;   /* how much item grows */
  flex-shrink: 1; /* how much item shrinks */
  flex-basis: 200px; /* initial size */
  order: 2; /* controls order */
}
```

---

### 4. Real-World Example: Responsive Navbar

```html
<div class="nav">
  <div>Home</div>
  <div>About</div>
  <div>Services</div>
  <div>Contact</div>
</div>
```

```css
.nav {
  display: flex;
  justify-content: space-around;
  background: #444;
  color: white;
  padding: 10px;
}
```

---

### 5. Real-World Example: Card Layout

```html
<div class="cards">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
</div>
```

```css
.cards {
  display: flex;
  gap: 15px;
}
.card {
  flex: 1;
  padding: 20px;
  border: 1px solid #ccc;
  background: #f9f9f9;
}
```

---

### 💻 Class 2 Exercises

1. Build a responsive navigation bar using Flexbox.
2. Create a 3-card layout where each card grows equally.
3. Create a photo gallery that wraps onto new rows when the screen shrinks.

---

## 🏠 Homework

1. Rebuild your Week 3 profile card layout using Flexbox.
2. Create a **pricing table** with 3 plans (Basic, Pro, Premium) using Flexbox.
3. Make a responsive header with logo on the left and nav links on the right.

---
