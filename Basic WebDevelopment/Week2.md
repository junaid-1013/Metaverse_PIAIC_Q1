# Week 2: Forms, Tables, and Media

## 📚 Class 1: Forms in HTML

Forms are the primary way we gather **user input** on the web. Every time you log in, register, or search for something, you’re interacting with a form.

---

### 1. The `<form>` Tag

* Acts as a **container** for input elements.
* Important attributes:

  * `action` → URL where data will be sent (e.g., server script).
  * `method` → how to send data: `GET` (appends in URL) or `POST` (hidden, more secure).
  * `target` → where response is displayed (`_self`, `_blank`).

```html
<form action="/submit" method="post">
  <!-- inputs go here -->
</form>
```

---

### 2. Input Elements

Inputs define what kind of data a user can enter.

* Text: `<input type="text">`
* Password: `<input type="password">`
* Email: `<input type="email">`
* Number (integer): `<input type="number">`
* Number (floating point):

```html
<label for="price">Enter price:</label>
<input type="number" id="price" name="price" step="0.01" min="0">
```

* Date: `<input type="date">`
* Range: `<input type="range" min="1" max="10">`
* Color: `<input type="color">`
* File: `<input type="file">`
* Radio: `<input type="radio" name="gender">`
* Checkbox: `<input type="checkbox">`
* Submit: `<input type="submit" value="Submit">`

💡 **Note on Floating Numbers:** Use the `step` attribute for decimals. Example: GPA input with `step="0.1"`.

---

### 3. Labels and Accessibility

Always use `<label>` for inputs so screen readers and users know what they’re entering.

```html
<label for="username">Username:</label>
<input type="text" id="username" name="username">
```

---

### 4. Dropdowns and Textareas

* Dropdown menu:

```html
<select name="country">
  <option value="pk">Pakistan</option>
  <option value="us">USA</option>
  <option value="uk">UK</option>
</select>
```

* Textarea for long text:

```html
<textarea rows="4" cols="40">Type here...</textarea>
```

---

### 5. Fieldsets and Legends

Group inputs with `<fieldset>` and give context with `<legend>`.

```html
<fieldset>
  <legend>Login Details</legend>
  <label>Email:</label>
  <input type="email"><br>
  <label>Password:</label>
  <input type="password">
</fieldset>
```

---

### 6. Placeholders and Required

* `placeholder` shows a hint.
* `required` ensures the field isn’t left empty.

```html
<input type="email" placeholder="Enter your email" required>
```

---

### 7. Example: Registration Form

```html
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" required><br><br>

  <label for="email">Email:</label>
  <input type="email" id="email" required><br><br>

  <label for="password">Password:</label>
  <input type="password" id="password" required><br><br>

  <label>Gender:</label>
  <input type="radio" name="gender" value="male"> Male
  <input type="radio" name="gender" value="female"> Female<br><br>

  <label>GPA:</label>
  <input type="number" step="0.1" min="0" max="4"><br><br>

  <label>Hobbies:</label>
  <input type="checkbox"> Sports
  <input type="checkbox"> Music
  <input type="checkbox"> Coding<br><br>

  <label>Country:</label>
  <select>
    <option>Pakistan</option>
    <option>USA</option>
    <option>UK</option>
  </select><br><br>

  <input type="submit" value="Register">
</form>
```

---

### 💡 Best Practices

* Always use `<label>`.
* Prefer HTML5 input types for built-in validation.
* Group related inputs with `<fieldset>`.
* Use placeholders only as hints, not as replacements for labels.
* For decimals, always use the `step` attribute.

---

### 💻 Class 1 Exercises

1. Build a **login form** with username & password.
2. Create a **survey form** with radio buttons and checkboxes.
3. Add a GPA field that accepts decimals.
4. Add `required` validation to your registration form.

---

## 📚 Class 2: Tables and Media

### 1. Tables in HTML

Tables structure data into rows and columns.

```html
<table border="1" cellpadding="10" cellspacing="5">
  <caption>Student Marks</caption>
  <tr>
    <th>Name</th>
    <th>Math</th>
    <th>Science</th>
  </tr>
  <tr>
    <td>Ayesha</td>
    <td>90</td>
    <td>85</td>
  </tr>
</table>
```

* `<th>`: header cell (bold + centered).
* `<td>`: table data cell.
* `colspan` / `rowspan`: merge cells.
* `cellpadding` / `cellspacing`: adjust spacing inside/outside cells.
* CSS property `border-collapse: collapse;` for clean borders.

**Example of merged cells:**

```html
<tr>
  <td colspan="2">Merged Cell</td>
</tr>
```

---

### 2. Nested Tables

Tables can contain another table inside a cell.

```html
<table border="1" cellpadding="5">
  <tr>
    <th>Invoice #</th>
    <th>Items</th>
  </tr>
  <tr>
    <td>001</td>
    <td>
      <table border="1" cellpadding="3">
        <tr><th>Item</th><th>Price</th></tr>
        <tr><td>Pen</td><td>$1.20</td></tr>
        <tr><td>Notebook</td><td>$2.50</td></tr>
      </table>
    </td>
  </tr>
</table>
```

💡 *Use case:* invoices, schedules with sub-sessions. But avoid overusing nested tables — modern layouts prefer CSS.

---

### 3. Media Elements

#### Images

```html
<img src="cat.jpg" alt="A cute cat" width="200">
```

#### Video

```html
<video controls width="400">
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support this video.
</video>
```

#### Audio

```html
<audio controls>
  <source src="song.mp3" type="audio/mpeg">
  Your browser does not support this audio.
</audio>
```

#### YouTube Embed

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowfullscreen></iframe>
```

---

### 4. Real-World Example: Weekly Timetable

```html
<table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse;">
  <caption>Class Schedule</caption>
  <tr>
    <th>Day</th>
    <th>9-10</th>
    <th>10-11</th>
  </tr>
  <tr>
    <td>Monday</td>
    <td>Math</td>
    <td>Science</td>
  </tr>
</table>
```

---

### 💻 Class 2 Exercises

1. Create a **student report card** with marks of 5 subjects.
2. Build your own **weekly timetable**.
3. Add a **nested table** showing invoice items inside an order table.
4. Embed an image gallery with at least 3 pictures.
5. Embed one audio, one video, and one YouTube video.

---

## 🏠 Homework

1. Build a **registration form** with:

   * Name, Email, Password, Gender, Age
   * Interests (checkboxes), Country (dropdown)
   * GPA input that accepts decimals
2. Create a **product table** with name, price, and description. At least one row should use `colspan`.
3. Make a **portfolio page** with:

   * Your photo
   * Short bio
   * Embedded video introduction
   * A nested table showing projects with details

---