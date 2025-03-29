# React Router Project

This project demonstrates the use of **React Router** for navigation between different pages in a React application.

## Installation

Make sure you have **Node.js** and **npm** installed. Then, follow these steps:

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <project-directory>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

## Project Structure

```
project-directory/
├── src/
│   ├── component/
│   │   ├── Home.js
│   │   ├── Contact.js
│   │   ├── Dashboard.js
│   │   ├── Detail.js
│   │   ├── Zero.js
│   │   ├── Hello.js
│   │   ├── Hii.js
│   ├── index.js
│   ├── App.js
├── public/
├── package.json
├── README.md
```

## Components

- **Home**: Displays the homepage.
- **Contact**: Displays contact details.
- **Dashboard**: Displays the dashboard.
- **Detail**: Parent component with nested routes.
  - **Zero**: Default page for Detail.
  - **Hello**: Subpage inside Detail.
  - **Hii**: Another subpage inside Detail.

## Routing Setup

Routing is managed using `react-router`. The routes are defined in `Main.js` as follows:

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/Contact" element={<Contact />} />
  <Route path="/Dashboard" element={<Dashboard />} />
  <Route path="/Detail" element={<Detail />}>
    <Route index element={<Zero />} />
    <Route path="Hello" element={<Hello />} />
    <Route path="Hii" element={<Hii />} />
  </Route>
</Routes>
```

## Dependencies

- **react**
- **react-dom**
- **react-router**

## Notes

- Make sure all component files are inside the `src/component/` directory.
- Ensure you import `BrowserRouter` and `Routes` correctly from `react-router`.
- If you experience any issues with routing, check the **case sensitivity** of paths.

## Contributing

Feel free to fork the repository and submit pull requests for improvements.

in html file if we use link and we click on the link it reload and it takes time
for using react router we can add all file in one like when we click on link it will open without all page reload
