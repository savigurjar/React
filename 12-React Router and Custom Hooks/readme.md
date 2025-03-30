# React Router GitHub Profile Fetcher

This is a simple React application that uses **React Router** to fetch and display GitHub user profiles dynamically.

---

## 🚀 Features
- Dynamic routing using **React Router** (`react-router-dom`)
- Fetching GitHub user data using **GitHub API**
- Error handling for invalid users
- Loading state for better UX

---

## 📌 Installation & Setup

1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-username/github-profile-fetcher.git
   ```
2. **Navigate to the project folder**:
   ```sh
   cd github-profile-fetcher
   ```
3. **Install dependencies**:
   ```sh
   npm install
   ```
4. **Start the development server**:
   ```sh
   npm start
   ```

---

## 📁 Project Structure
```
📦 github-profile-fetcher
├── 📂 src
│   ├── 📂 components
│   │   ├── Home.js
│   │   ├── Main.js
│   │   ├── Body.js
│   │   ├── Github.js
│   ├── App.js
│   ├── index.js
├── 📜 package.json
├── 📜 README.md
```

---

## 🔗 Usage
### **Navigating Between Pages**
- Home Page: `http://localhost:3000/`
- GitHub Profile Page: `http://localhost:3000/Github/username`

Replace `username` with any valid GitHub username.

Example:
```
http://localhost:3000/Github/octocat
```

---

## 🛠️ Technologies Used
- **React** (Frontend Framework)
- **React Router** (Client-side Routing)
- **GitHub API** (Fetching user data)

---

## ⚠️ Troubleshooting
### **1. Getting `Cannot read properties of null (reading 'avatar_url')`?**
**Solution:** Ensure that `profile?.avatar_url` is used instead of `profile.avatar_url`. The project already includes this fix.

### **2. API Not Working?**
- Ensure you have a valid username in the URL.
- Check GitHub API rate limits.


---



































Route paramRoute parameters (route params) are values taken from the URL when it has a dynamic part. These values help in identifying specific data. are the parsed values from a dynamic segment
For example, in this URL:
/user/123

**If the route is defined as /user/:id, the id is a route param.

<Route path="/Github:name" element={<Github />} />

: -> this is neccessary

 "https://api.github.com/users?per_page=10"
  https://api.github.com/users/taylorotwell
 `https://api.github.com/users?since=6000&per_page=20`
