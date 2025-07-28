import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function ContactForm({ darkMode }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFeedback(null);
    setError(null);

    if (!phone || phone.length < 5) {
      setError("Por favor ingresa un número de teléfono válido.");
      return;
    }

    try {
      const res = await fetch("https://acercaback-production.up.railway.app/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message }),
      });
      
    
      const data = await res.json();

      if (data.status === "ok") {
        setFeedback("Mensaje enviado correctamente.");
        setName("");
        setEmail("");
        setMessage("");
        setPhone("");
      } else {
        setError("Ocurrió un error al enviar el mensaje.");
      }
    } catch (err) {
      console.error(err);
      setError("Error de conexión.");
    }
  };

  return (
    <div
      className={ `contacto max-w-xl mx-auto p-8 rounded-3xl shadow-xl border transition-colors duration-700 ${
        darkMode
          ? "bg-black text-white border-gray-700"
          : "bg-white text-gray-800 border-gray-300"
      }`}
    >
      <h2
        className={`text-4xl font-extrabold mb-4 text-center bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text animate-pulse`}
      >
        Contáctanos
      </h2>
      <p className="mb-6 text-center text-gray-600 text-lg">
        Estamos listos para impulsar tu proyecto
      </p>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="transition-all hover:scale-105">
          <label className="block mb-1">Nombre completo</label>
          <input
            className={`w-full p-3 rounded-xl border focus:ring-2 focus:ring-purple-600 transition-all ${
              darkMode
                ? "bg-[#111] border-gray-600 text-white placeholder-gray-400"
                : "bg-white border-gray-300 text-black placeholder-gray-500"
            }`}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tu nombre"
            required
          />
        </div>
        <div className="transition-all hover:scale-105">
          <label className="block mb-1">Correo electrónico</label>
          <input
            className={`w-full p-3 rounded-xl border focus:ring-2 focus:ring-purple-600 transition-all ${
              darkMode
                ? "bg-[#111] border-gray-600 text-white placeholder-gray-400"
                : "bg-white border-gray-300 text-black placeholder-gray-500"
            }`}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@correo.com"
            required
          />
        </div>
        <div className="transition-all hover:scale-105">
          <label className="block mb-1">Teléfono</label>
          <PhoneInput
            country={"mx"}
            preferredCountries={["mx", "us", "es", "ar", "br", "co", "cl", "pe"]}
            enableSearch
            value={phone}
            onChange={setPhone}
            placeholder="Número de teléfono"
            inputStyle={{
              width: "100%",
              backgroundColor: darkMode ? "#111" : "#fff",
              color: darkMode ? "#fff" : "#000",
              borderColor: darkMode ? "#4b5563" : "#ccc",
              borderRadius: "0.75rem",
              height: "50px",
            }}
            buttonStyle={{
              backgroundColor: darkMode ? "#111" : "#f3f3f3",
              border: darkMode ? "1px solid #4b5563" : "1px solid #ccc",
              borderRadius: "0.75rem 0 0 0.75rem",
            }}
            dropdownStyle={{
              backgroundColor: darkMode ? "#111" : "#fff",
              color: darkMode ? "#fff" : "#000",
              maxHeight: "200px",
            }}
          />
        </div>
        <div className="transition-all hover:scale-105">
          <label className="block mb-1">Mensaje</label>
          <textarea
            className={`w-full p-3 rounded-xl border focus:ring-2 focus:ring-purple-600 transition-all ${
              darkMode
                ? "bg-[#111] border-gray-600 text-white placeholder-gray-400"
                : "bg-white border-gray-300 text-black placeholder-gray-500"
            }`}
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Cuéntanos sobre tu proyecto..."
            required
          />
        </div>
        <div className="space-y-2">
  <button
    type="submit"
    className="w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white p-4 rounded-xl hover:brightness-110 transition-all shadow-lg shadow-purple-800/30"
  >
    Enviar mensaje
  </button>

  {feedback && (
    <div
      className={`flex items-center justify-center gap-2 mt-2 px-4 py-2 rounded-xl backdrop-blur-sm border transition-all duration-500
      ${darkMode
        ? "bg-white/10 text-white border-white/20 shadow shadow-white/10"
        : "bg-black/10 text-black border-black/20 shadow shadow-black/10"
      } animate-pulse`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke={darkMode ? "white" : "black"}
        className="w-5 h-5"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
      <span className="font-medium">{feedback}</span>
    </div>
  )}

  {error && (
    <div
      className={`flex items-center justify-center gap-2 mt-2 px-4 py-2 rounded-xl backdrop-blur-sm border transition-all duration-500
      ${darkMode
        ? "bg-white/10 text-white border-white/20 shadow shadow-white/10"
        : "bg-black/10 text-black border-black/20 shadow shadow-black/10"
      } animate-pulse`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke={darkMode ? "white" : "black"}
        className="w-5 h-5"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
      <span className="font-medium">{error}</span>
    </div>
  )}
</div>

      </form>
    </div>
  );
}

export default ContactForm;
