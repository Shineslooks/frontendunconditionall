import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3000/web2/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (res.ok) {
        setResponse({ success: true, message: "Login berhasil!", ...data });
      } else {
        setResponse({ success: false, message: data.message || "Login gagal." });
      }
    } catch (error) {
      setResponse({ success: false, message: "Terjadi kesalahan saat menghubungi server." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-[#f5f5f5] relative"
      style={{
        background: "linear-gradient(to bottom, #a1c4fd, #c2e9fb)", // Latar belakang gradien untuk halaman
      }}
    >
      {/* Pattern Acak - Random Pattern Elements */}
      <div
        className="absolute top-0 left-0 right-0 bottom-0 z-0"
        style={{
          background: "url('/patternyouth.png') no-repeat center center",
          backgroundSize: "cover",
          opacity: 0.15, // Sesuaikan transparansi untuk efek subtle
        }}
      ></div>

      {/* Elemen Pattern Tambahan - Bisa Menambahkan Lebih Banyak Pola */}
      <div
        className="absolute top-0 right-0 z-0"
        style={{
          background: "url('/patternyouth.png') no-repeat center center",
          backgroundSize: "contain",
          opacity: 0.1,
          width: "250px",
          height: "250px",
        }}
      ></div>

      <div className="relative max-w-md w-full bg-white p-8 rounded-xl shadow-lg backdrop-filter backdrop-blur-lg z-20">
        {/* Logo di Luar Kotak Form */}
        <div className="absolute top-0 left-0 right-0 flex justify-center z-30">
          <img
            src="/Logo_Youth.png" // Tempatkan logo Anda di sini
            alt="Logo Youth"
            className="w-32 h-32 mb-6"
          />
        </div>

        {/* Form Login */}
        <div className="mt-24">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">Login</h1>
          <p className="text-lg text-center text-gray-600 mb-6">Masuk untuk melanjutkan ke acara</p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-lg text-gray-800">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Masukkan username"
                className="w-full px-4 py-3 bg-transparent border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-lg text-gray-800">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan password"
                className="w-full px-4 py-3 bg-transparent border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-lg shadow-md hover:opacity-90 transition-all duration-300"
              disabled={loading}
            >
              {loading ? (
                <span className="spinner-border spinner-border-sm text-white"></span>
              ) : (
                "Login"
              )}
            </button>
          </form>

          {/* Feedback Response */}
          {response && (
            <div
              className={`mt-6 p-4 rounded-lg ${response.success ? "bg-green-500" : "bg-red-500"} text-white`}
            >
              <p className="font-semibold">{response.message}</p>
              {response.success && (
                <div className="mt-2">
                  <p><strong>Tiket Anda: Jangan lupa membawa coklat!</strong></p>
                  {/* Menampilkan Gambar Tiket */}
                  <img
                    src={response.ticketUrl || "/Ticketyouth.png"} // Pastikan path gambar benar
                    alt="Tiket Anda"
                    className="w-full rounded-lg shadow-lg mt-2"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
