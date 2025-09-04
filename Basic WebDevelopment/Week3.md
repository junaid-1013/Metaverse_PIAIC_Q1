# Week 3: CSS Fundamentals

CSS (**Cascading Style Sheets**) is the language we use to style web pages. While HTML gives content structure, CSS controls **colors, fonts, layouts, and responsiveness**. This week, we begin our journey into making websites look professional.

---

## 📚 Class 1: Introduction to CSS

### 1. What is CSS?

* CSS tells the browser how to **display HTML elements**.
* Separates **structure (HTML)** from **design (CSS)**.
* Saves time by applying consistent styles across pages.

💡 Example: Without CSS, all websites would look like plain black text on white backgrounds.

---

### 2. Ways to Add CSS

* **Inline CSS** → Directly inside an element.

```html
<p style="color:red;">This is red text.</p>
```

* **Internal CSS** → Inside `<style>` in the HTML `<head>`.

```html
<style>
p { color: blue; }
</style>
```

* **External CSS** → In a separate `.css` file linked to HTML.

```html
<link rel="stylesheet" href="styles.css">
```

✅ Best practice → use **external CSS**.

---

### 3. CSS Syntax

```css
selector {
  property: value;
}
```

Example:

```css
h1 {
  color: green;
  font-size: 32px;
}
```

---

### 4. CSS Colors

* Named colors: `red`, `blue`
* HEX: `#ff0000`
* RGB: `rgb(255,0,0)`
* HSL: `hsl(0,100%,50%)`

```css
p { color: hsl(200, 80%, 50%); }
```

---

### 5. CSS Units

* **Absolute:** px (pixels)
* **Relative:** %, em, rem, vh, vw

Example:

```css
h2 { font-size: 2em; }
```

* `em` → relative to parent font size
* `rem` → relative to root font size
* `vh/vw` → relative to viewport height/width

---

### 6. CSS Selectors

* Element selector: `p {}`
* Class selector: `.box {}`
* ID selector: `#title {}`
* Grouping: `h1, h2, p {}`
* Universal: `* {}`

Advanced:

* Descendant: `div p {}`
* Child: `div > p {}`
* Attribute: `input[type="text"] {}`
* Pseudo-classes: `a:hover {}`

---

### 7. Text Styling

* Fonts: `font-family`, `font-size`, `font-weight`
* Alignment: `text-align`
* Spacing: `line-height`, `letter-spacing`
* Colors: `color`

```css
p {
  font-family: Arial, sans-serif;
  font-size: 16px;
  text-align: justify;
}
```

---

### 💻 Class 1 Exercises

1. Create a page with a heading and 2 paragraphs styled differently.
2. Apply colors using HEX, RGB, and HSL.
3. Style links with `:hover` to change color.

---

## 📚 Class 2: Box Model and Backgrounds

### 1. CSS Box Model

Every element is a box with:

* **Content** → text or image
* **Padding** → space inside border
* **Border** → line around content
* **Margin** → space outside border

```css
div {
  width: 200px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
}
```

💡 Use browser DevTools to see the box model live.

---

### 2. Backgrounds

* `background-color`
* `background-image`
* `background-repeat`
* `background-size`
* `background-position`

Example:

```css
body {
  background-color: lightblue;
  background-image: url("bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
```

---

### 3. Borders

* `border-style`: solid, dashed, dotted
* `border-width`
* `border-color`
* `border-radius` → rounded corners

```css
img {
  border: 5px dashed red;
  border-radius: 50%;
}
```

---

### 4. Display Property

* `block`: takes full width
* `inline`: only fits content
* `inline-block`: inline + allows width/height
* `none`: hides element

---

### 5. Real-World Example: Card Design

```html
<div class="card">
  <h2>Product Title</h2>
  <p>Description of the product.</p>
</div>
```

```css
.card {
  width: 250px;
  padding: 15px;
  margin: 10px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
}
```

---

### 💻 Class 2 Exercises

1. Create a profile card with border, padding, and margin.
2. Add a background image to a section with `background-size: cover;`.
3. Experiment with border-radius to create circles.

---

## 🏠 Homework

1. Redesign your Week 2 form using external CSS (colors, padding, border, fonts).
2. Create a “My Favorite Movie” card with a background image and styled text overlay.
3. Style a navigation bar with hover effects.

---
