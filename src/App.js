import React from "react";
import { Routes, Route } from "react-router-dom"; // Pastikan ini benar
import Register from "./Register"; // Pastikan path ke Register.js benar
import Login from "./Login"; // Pastikan path ke Login.js benar

function App() {
  return (
    <div>
      <header>
        <h1></h1>
      </header>

      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={
            <div style={{ textAlign: "center", padding: "20px", color: "red" }}>
              404 - Halaman Tidak Ditemukan
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
