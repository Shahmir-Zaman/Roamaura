# Roamaura

Unlock Adventure. Discover Unique Stays. Live Inspired.

---

## Overview

Roamaura is a modern web platform for discovering, listing, and managing unique rental properties worldwide. Designed for travelers and hosts, it streamlines the process of finding and sharing memorable stays, combining intuitive design with robust features for a seamless experience.

---

## Features Table

|      | Component       | Details                              |
| :--- | :-------------- | :----------------------------------- |
| ⚙️  | **Architecture**  | <ul><li>MVC pattern</li><li>Express.js server</li><li>MongoDB backend</li><li>EJS templating</li></ul> |
| 🔩 | **Code Quality**  | <ul><li>Modular routes</li><li>Schema validation</li><li>Async error handling</li></ul> |
| 📄 | **Documentation** | <ul><li>README overview</li><li>Clear folder structure</li></ul> |
| 🔌 | **Integrations**  | <ul><li>Passport.js authentication</li><li>Bootstrap 5 UI</li></ul> |
| 🧩 | **Modularity**    | <ul><li>Separation of models, routes, utils</li><li>Reusable middleware</li></ul> |
| 🧪 | **Testing**       | <ul><li>No automated tests present</li></ul> |
| ⚡️  | **Performance**   | <ul><li>Efficient MongoDB queries</li><li>Static asset serving</li></ul> |
| 🛡️ | **Security**      | <ul><li>Session management</li><li>Input validation with Joi</li><li>Authentication</li></ul> |
| 📦 | **Dependencies**  | <ul><li>express</li><li>mongoose</li><li>passport</li><li>ejs</li><li>joi</li></ul> |
| 🚀 | **Scalability**   | <ul><li>Modular codebase</li><li>MongoDB scalability</li></ul> |

---

## Why Roamaura?

Roamaura empowers users to explore and share extraordinary stays with ease. The platform is crafted for both hosts and travelers, offering:

- 🌍 **Global Listings:** Browse and manage unique properties worldwide.
- 🔒 **Secure Authentication:** Robust user login and session management.
- ⚡ **Fast Experience:** Optimized queries and responsive UI.
- 🧩 **Modular Design:** Easily extendable and maintainable codebase.
- 🎨 **Modern UI:** Clean, mobile-friendly interface with Bootstrap 5.
- 🛡️ **Data Validation:** Reliable input checks for safe operations.

---

## Project Structure
Roamaura/ ├── app.js ├── middleware.js ├── package.json ├── README.md ├── schema.js ├── init/ │ ├── data.js │ └── index.js ├── models/ │ ├── listing.js │ ├── review.js │ └── user.js ├── public/ │ ├── css/ │ │ └── style.css │ └── js/ │ └── script.js ├── routes/ │ ├── listing.js │ ├── review.js │ └── user.js ├── utils/ │ ├── ExpressError.js │ └── wrapAsync.js └── views/ ├── includes/ │ ├── flash.ejs │ ├── footer.ejs │ └── navbar.ejs ├── layouts/ │ └── boilerplate.ejs ├── listings/ │ ├── edit.ejs │ ├── error.ejs │ ├── index.ejs │ ├── new.ejs │ └── show.ejs └── users/ ├── login.ejs └── signup.ejs

---

## Getting Started

1. **Clone the repository:**
2. git clone https://github.com/Shahmir-Zaman/roamaura.git cd roamaura
---
2. **Install dependencies:**
   
3. **Set up MongoDB:**
- Ensure MongoDB is running locally at `mongodb://127.0.0.1:27017/roamora`
- (Optional) Seed the database with sample data:
  ```
  node [index.js](http://_vscodecontentref_/28)
  ```

4. **Start the server:**
 node app.js


5. **Visit the app:**
- Open [http://localhost:8080](http://localhost:8080) in your browser.

---

## License

[MIT](LICENSE)

---

## Tagline

<tagline>
Unlock Adventure. Discover Unique Stays. Live Inspired.
</tagline>
