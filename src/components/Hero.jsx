import { motion } from "framer-motion";

export default function Hero({ parallaxOffset, darkMode }) {
  return (
    <section className="relative mb-7 md:mb-12 px-4 md:px-20 py-4 md:py-8 isolate">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`
          relative z-10 rounded-3xl backdrop-blur-xl p-6 md:p-12 overflow-hidden
          ${darkMode
            ? "bg-gradient-to-br from-slate-800 via-slate-900 to-black"
            : "bg-gradient-to-br from-indigo-100 via-white to-slate-100"
          }
        `}
      >
        {/* Borde animado elegante y ultrafino */}
        <div
          className="absolute -inset-1 rounded-[1.75rem] animate-spin-slow
          bg-gradient-to-r from-white via-neutral-400 to-white
          pointer-events-none
          mask mask-out"
        />

        {/* Contenido */}
        <div className="relative z-10 rounded-3xl p-4 md:p-8 border border-neutral-300/10 backdrop-blur-xl">
          {/* Título */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.3 }}
            style={{ transform: `translateY(${parallaxOffset}px)` }}
            className={`text-3xl md:text-6xl font-extrabold tracking-tight leading-tight ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Innovación & Estrategia Digital
          </motion.h1>

          {/* Lista */}
          <motion.ul
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.6 }}
            className={`mt-6 text-base md:text-xl font-light tracking-wide space-y-4 max-w-3xl list-disc list-inside pl-2 md:pl-6 ${
              darkMode ? "text-neutral-300" : "text-neutral-800"
            }`}
          >
            <li>Impulsamos tu negocio para crecer con menos esfuerzo.</li>
            <li>Contenido viral auténtico que conecta y vende.</li>
            <li>Guiones estratégicos que captan la atención y convierten.</li>
            <li>Formamos creadores con ingresos sostenibles y estrategias claras.</li>
          </motion.ul>

          {/* Párrafo final */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 1 }}
            className={`mt-8 text-sm md:text-lg font-normal tracking-wide max-w-3xl text-justify ${
              darkMode ? "text-neutral-400" : "text-neutral-700"
            }`}
          >
            Somos un equipo de estrategas digitales apasionados por transformar marcas con creatividad, tecnología e innovación.
          </motion.p>
        </div>
      </motion.div>

      {/* Animación y máscara */}
      <style jsx>{`
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 6s linear infinite;
        }
        /* borde ultrafino */
        .mask {
          -webkit-mask-image: radial-gradient(closest-side, transparent 99.5%, black 100%);
          mask-image: radial-gradient(closest-side, transparent 99.5%, black 100%);
        }
      `}</style>
    </section>
  );
}
