# My Watch List

A **Single Page Application (SPA)** built with **ReactJS**, allowing users to explore, manage, and share personalized movie lists.

---

## Technologies Used

-  **React**
-  **React Router**
-  **Tailwind CSS**

---

## Functionality

### Guest Users (Not Logged In)

Guests can:

-  See home page with recommended movies
-  See the movies catalog
-  Browse other users **Top 10 Movie Lists**
-  See directors catalog
-  Explore detailed pages for:
   -  **Movies**
   -  **Directors**

---

### Registered Users

Logged-in users can:

-  Everything guest users can do
-  Add new movies to the server (persistent)
-  Manage their own **Top 10 Movie List** (public) and **Watch List** (private in profile)
-  Search in already added movies
-  Search and load info for movies from **OMDB API**

---

## Installation

1. Clone the repository
2. In terminal in **server** folder run the server using `node server.js` in terminal and leave it running
3. Open new terminal in **client** folder and install dependencies using `npm install`
4. In the same terminal run the client using `&& npm run dev` in terminal
5. Open `http://localhost:5173/` in browser
