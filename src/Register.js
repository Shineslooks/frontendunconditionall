import React, { useState } from "react";
import { API_URL } from "./api"; // Impor URL API dari api.js

function Register() {
  const [nama, setNama] = useState("");
  const [gereja, setGereja] = useState("");
  const [response, setResponse] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/web1/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: nama, church: gereja }),
      });

      // Coba parsing respons JSON
      let data;
      try {
        data = await res.json();
      } catch (parseError) {
        console.error("Error parsing JSON:", parseError);
        setResponse({ success: false, message: "Respons server tidak valid." });
        return;
      }

      console.log("Response dari server:", data); // Log tambahan untuk debugging

      if (!res.ok) {
        setResponse({ success: false, message: data.message || "Terjadi kesalahan." });
      } else {
        setResponse({
          success: true,
          message: "Pendaftaran berhasil!",
          username: data.username,
          password: data.password,
        });
      }
    } catch (error) {
      console.error("Error saat fetch:", error); // Log tambahan untuk debugging
      setResponse({ success: false, message: "Gagal menghubungi server." });
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/soundofp.jpg')", // Ganti dengan gambar yang sesuai
        backgroundSize: "cover",
      }}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-10"></div>

      <div className="relative max-w-md w-full bg-white bg-opacity-30 p-8 rounded-xl shadow-lg backdrop-filter backdrop-blur-lg z-20">
        <div className="text-center mb-6">
          <img
            src="/Logo_Youth.png"
            alt="Logo Youth"
            className="w-32 h-32 mb-6 mx-auto"
          />
          <h1 className="text-3xl font-bold text-white mb-2">Selamat Datang</h1>
          <p className="text-lg text-white">Siap berseru bersama Sound Of Praise?</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label htmlFor="nama" className="block text-lg text-white">
              Nama
            </label>
            <input
              type="text"
              id="nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Masukkan nama Anda"
              className="w-full px-4 py-3 bg-transparent border border-white rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              required
            />
          </div>

          <div>
            <label htmlFor="gereja" className="block text-lg text-white">
              Gereja
            </label>
            <input
              type="text"
              id="gereja"
              value={gereja}
              onChange={(e) => setGereja(e.target.value)}
              placeholder="Masukkan nama gereja"
              className="w-full px-4 py-3 bg-transparent border border-white rounded-lg text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
          >
            Daftar
          </button>
        </form>

        {response && (
          <div
            className={`mt-6 p-4 rounded-lg ${
              response.success ? "bg-green-500" : "bg-red-500"
            } text-white`}
          >
            <p className="font-semibold">{response.message}</p>
            {response.success && (
              <div className="mt-2">
                <p>
                  <strong>Username:</strong> {response.username}
                </p>
                <p>
                  <strong>Password:</strong> {response.password}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Register;
