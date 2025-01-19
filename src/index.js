import React from "react";
import ReactDOM from "react-dom/client"; // pastikan kita menggunakan ReactDOM untuk versi 18 ke atas
import App from "./App"; // pastikan App.js ada di tempat yang benar
import './index.css'; // Jika ada file CSS
import { BrowserRouter as Router } from "react-router-dom"; // Menggunakan Router jika ada routing

// Membuat root React untuk merender aplikasi
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <App />
  </Router>
);
