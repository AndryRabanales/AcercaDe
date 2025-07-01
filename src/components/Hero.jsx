import { motion } from "framer-motion";

export default function Hero({ parallaxOffset, darkMode }) {
  return (
    <section className="relative mb-32 px-6 md:px-20 py-16 isolate">
      {/* Contenedor glass con glow fuego */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 p-8 md:p-12
        shadow-[0_0_60px_rgba(255,120,0,0.3)] ring-1 ring-amber-500/30"
      >
        {/* Decoración glow alrededor */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none
        bg-gradient-to-br from-amber-600/10 via-red-600/10 to-orange-600/10" />

        {/* Título con gradiente fuego */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.3 }}
          style={{ transform: `translateY(${parallaxOffset}px)` }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight
          bg-gradient-to-r from-amber-500 via-red-600 to-orange-500 bg-clip-text text-transparent"
        >
          Innovación & Estrategia Digital
        </motion.h1>

        {/* Lista justificada con estilo fuego */}
        <motion.ul
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.6 }}
          className="mt-6 text-lg md:text-xl font-light tracking-wide space-y-6 max-w-3xl text-justify pl-8 text-neutral-200"
        >
          <li>🔥 Impulsamos tu negocio para crecer con menos esfuerzo.</li>
          <li>🔥 Contenido viral auténtico que conecta y vende.</li>
          <li>🔥 Guiones estratégicos que captan la atención y convierten.</li>
          <li>🔥 Formamos creadores que generan ingresos sostenibles sin modas pasajeras ni anuncios caros.</li>
        </motion.ul>

        {/* Párrafo final */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 1 }}
          className="mt-8 text-base md:text-lg font-normal tracking-wide max-w-3xl text-justify text-neutral-200"
        >
          Somos un equipo de estrategas digitales apasionados por transformar marcas con creatividad, tecnología e innovación.
        </motion.p>
      </motion.div>
    </section>
  );
}
