# Week 1: Introduction to HTML

Welcome to **Week 1** of your Web Development journey! 🎉
In this week, we will explore the **foundation of the web** — **HTML (HyperText Markup Language)**. HTML defines the **structure** of a webpage.

---

## 📚 Class 1: Getting Started with HTML

### 1. What is HTML?

* **HTML** stands for **HyperText Markup Language**.
* It is the **skeleton of a webpage**: defines structure, not style or behavior.
* HTML uses **tags** inside `< >` to describe content.

👉 Fun Fact: HTML was first created by **Tim Berners-Lee in 1991**.

---

### 2. Basic Structure of an HTML Document

Every HTML5 document follows this structure:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
    <meta charset="UTF-8">
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This is my first webpage.</p>
  </body>
</html>
```

* `<!DOCTYPE html>` → Tells browser this is HTML5.
* `<html>` → Root element.
* `<head>` → Contains metadata (title, styles, scripts, charset).
* `<body>` → Visible content.

---

### 3. Headings & Paragraphs

* Headings: `<h1>` to `<h6>` (h1 = largest, h6 = smallest).
* Paragraph: `<p>` for text blocks.

Example:

```html
<h1>Main Title</h1>
<h2>Subtitle</h2>
<p>This is a paragraph with some text.</p>
```

---

### 4. Line Breaks & Horizontal Rules

* `<br>` → Line break (new line without starting a new paragraph).
* `<hr>` → Horizontal divider.

Example:

```html
<p>Hello<br>World</p>
<hr>
```

---

### 5. Text Formatting Tags

* Bold: `<b>` or `<strong>`
* Italic: `<i>` or `<em>`
* Underline: `<u>`
* Highlight: `<mark>`
* Superscript: `<sup>` → 2<sup>2</sup>
* Subscript: `<sub>` → H<sub>2</sub>O

Example:

```html
<p>This is <b>bold</b>, <i>italic</i>, <u>underlined</u>, and <mark>highlighted</mark>.</p>
```

---

### 6. Lists in HTML

* **Unordered List** (`<ul>`) → Bullets
* **Ordered List** (`<ol>`) → Numbers
* **Nested Lists** → Lists inside lists

Example:

```html
<ul>
  <li>Apples</li>
  <li>Oranges</li>
  <li>Bananas</li>
</ul>

<ol>
  <li>Step 1</li>
  <li>Step 2</li>
</ol>
```

---

### 7. Links in HTML

Links are created with the `<a>` tag.

```html
<a href="https://www.google.com" target="_blank">Visit Google</a>
```

* `href` = destination URL
* `target="_blank"` = opens link in new tab

---

### 8. Images in HTML

```html
<img src="https://via.placeholder.com/150" alt="Sample Image" width="200">
```

* `src` = image path (local or online)
* `alt` = description (for SEO & accessibility)
* `width` / `height` = size

---

## 💻 Class 1 Exercises

1. Create a simple HTML page with:

   * A title in `<head>`
   * A heading + a paragraph
   * A horizontal line `<hr>`
   * A line break `<br>`

---

## 📚 Class 2: Working with More HTML Elements

In this class, we go deeper into the building blocks of content: **formatting text, creating lists, linking pages, and displaying images**. Think of this as the toolkit you need to make your pages readable, structured, and engaging.

---

### 📝 Text Formatting in Depth

While headings and paragraphs provide structure, text formatting gives meaning and emphasis.

* **Semantic vs Non-semantic tags:**

  * `<b>` makes text bold but has no meaning.
  * `<strong>` makes text bold **and** signals importance for screen readers.
* `<i>` vs `<em>`: italic vs emphasized meaning.
* `<u>` underline (not recommended for links to avoid confusion).
* `<mark>` highlight text.
* `<abbr>` abbreviation tooltips.
* `<blockquote>` for longer quotes, often styled indented.
* `<cite>` for citation of a source.
* `<pre>` preserves spacing, useful for poems or code snippets.

**Example:**

```html
<p>The word <strong>Warning</strong> is more than just <b>bold</b>.</p>
<p>Here is an <em>emphasized</em> phrase, and an <i>italic</i> style.</p>
<blockquote cite="https://developer.mozilla.org">
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand." - Martin Fowler
</blockquote>
<abbr title="Cascading Style Sheets">CSS</abbr> is used for styling.
<pre>
Line 1 stays exactly
  Line 2 with spaces
    Line 3 indented
</pre>
```

---

### 📋 Lists: Beyond the Basics

Lists are more than bullets and numbers.

* **Unordered lists `<ul>`** – bulleted items.
* **Ordered lists `<ol>`** – numbered steps.
* **Nested lists** – list inside another list (useful for categories and subcategories).
* **Description lists `<dl>`** – used for glossaries or term-definition pairs.

**Example:**

```html
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language, defines structure.</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets, defines presentation.</dd>
</dl>
```

💡 *Real-world use:* FAQs, glossary pages, step-by-step guides.

---

### 🔗 Links in Detail

Links are what make the web a **web**.

* **External Links:** `<a href="https://junaidalibhatti.vercel.app">Visit</a>`
* **Internal Links (same site):** `<a href="about.html">About Us</a>`
* **Open in new tab:** `target="_blank"`
* **Email Links:** `<a href="mailto:junaid.ali101452@gmail.com">Send Email</a>`
* **Telephone Links:** `<a href="tel:+1234567890">Call Us</a>`
* **Downloadable files:** `<a href="brochure.pdf" download>Download Brochure</a>`
* **Anchor Links (jump on page):** `<a href="#section2">Go to Section 2</a>`

**Example:**

```html
<a href="#contact">Jump to Contact Section</a>
...
<h2 id="contact">Contact Us</h2>
```

---

### 🖼️ Images in HTML

Images make content engaging and visual. But there are important considerations:

#### 1. File Formats

* **.jpg (JPEG):** Best for photographs, millions of colors, smaller file size.
* **.png:** Supports transparency, great for logos or icons.
* **.gif:** Supports animation, but limited colors.
* **.svg:** Vector format, scalable without losing quality. Best for logos & icons.
* **.webp:** Modern format, smaller size with high quality, supported by most browsers.

#### 2. Image Sizing

```html
<img src="photo.jpg" width="300" height="200" alt="Sample Photo">
```

* `width` and `height` can be in **pixels** or set with CSS.
* Avoid stretching images disproportionately.

#### 3. Accessibility with `alt`

* The `alt` text describes the image.
* Screen readers announce it for visually impaired users.
* Helps SEO (Google indexes images by alt text).

Bad Example:

```html
<img src="dog.png">
```

Good Example:

```html
<img src="dog.png" alt="Golden retriever playing with a ball">
```

#### 4. Clickable Images

```html
<a href="profile.html">
  <img src="avatar.png" alt="Profile Picture">
</a>
```

#### 5. Figure & Figcaption

Use when images need a caption.

```html
<figure>
  <img src="mountain.jpg" alt="Mountain Landscape">
  <figcaption>Figure 1: Scenic mountain view at sunset</figcaption>
</figure>
```

---

### 💻 Class 2 Exercises

1. Create a **Glossary Page** using description lists for at least 5 terms.
2. Build a **navigation menu** with anchor links to sections on the same page.
3. Add **3 images**:

   * One JPG photo
   * One PNG logo
   * One SVG icon
     Each should have proper alt text.
4. Make one image **clickable** and wrap it in a link.
5. Add captions to your images using `<figure>` and `<figcaption>`.

---

1. Create a list of your **top 5 favorite movies** using `<ol>`.
2. Create a nested grocery list with fruits, vegetables, and drinks.
3. Add a link to your favorite website.
4. Insert an image of your favorite place.

---

## 🏠 Homework

* Create a personal profile page with:

  * Your name in `<h1>`
  * A short introduction `<p>`
  * A list of hobbies `<ul>`
  * A link to your favorite site `<a>`
  * An image `<img>`

---

## ✅ Key Takeaways

* HTML is the **structure** of a webpage.
* Use proper document structure (`<!DOCTYPE>`, `<html>`, `<head>`, `<body>`).
* Headings organize content, paragraphs hold text.
* Lists, links, and images make content richer.
* Accessibility (alt text, semantic elements) is very important.

Next week → **Forms, Tables, and Media in HTML**
