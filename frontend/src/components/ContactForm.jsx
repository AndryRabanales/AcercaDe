import { useState } from "react";

export default function ContactForm({ darkMode }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  // manejar cambios en inputs
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("enviando");

    try {
      const res = await fetch("http://localhost:4000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.status === "ok") {
        setStatus("exito");
        setFormData({ name: "", email: "", message: "" }); // limpia
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="mb-40 px-4">
      <h2 className="text-5xl font-bold mb-10 text-center">Contáctanos</h2>

      <form
        onSubmit={handleSubmit}
        className={`max-w-3xl mx-auto flex flex-col gap-4 p-6 rounded-xl shadow-xl ${
          darkMode ? "bg-white/10 backdrop-blur border border-white/20" : "bg-white/80"
        } transition-all duration-500`}
      >
        <input
          type="text"
          name="name"
          placeholder="Nombre completo"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-4 rounded bg-white/90 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-4 focus:ring-purple-400"
        />

        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-4 rounded bg-white/90 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-4 focus:ring-purple-400"
        />

        <textarea
          name="message"
          placeholder="Cuéntanos más sobre tu proyecto..."
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          className="p-4 rounded bg-white/90 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-4 focus:ring-purple-400"
        ></textarea>

        <button
          type="submit"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:scale-105 transition shadow-lg"
        >
          Enviar
        </button>

        {status === "enviando" && (
          <p className="text-center text-yellow-500">Enviando...</p>
        )}
        {status === "exito" && (
          <p className="text-center text-green-500">¡Mensaje enviado correctamente!</p>
        )}
        {status === "error" && (
          <p className="text-center text-red-500">Ocurrió un error. Intenta de nuevo.</p>
        )}
      </form>
    </section>
  );
}
