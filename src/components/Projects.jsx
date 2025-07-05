export default function Projects({ projects, darkMode }) {
  return (
    <section id="proyectos" className="mb-40">
      <h2 className="text-5xl font-bold mb-10">Proyectos</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="w-full rounded-xl backdrop-blur-lg bg-white/10 p-6 shadow-xl animate-pulse-elegant"
          >
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-60 object-cover rounded-xl mb-4"
              style={{ objectPosition: "top" }}
            />
            <h3 className="text-2xl font-bold">
              {p.url ? (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {p.title}
                </a>
              ) : (
                p.title
              )}
            </h3>
            <p className="text-blue-400">{p.category}</p>
            <p className="mb-4">
              {darkMode ? p.description : (
                <span className="text-gray-900">{p.description}</span>
              )}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t, ti) => (
                <span
                  key={ti}
                  className="px-2 py-1 text-xs rounded bg-gradient-to-r from-blue-500 to-purple-500"
                >
                  {t}
                </span>
              ))}
            </div>
            {p.url && (
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition hover:scale-105"
              >
                Visitar canal
              </a>
            )}
          </div>
        ))}
      </div>
      {/* animación CSS en línea para pulso elegante */}
      <style jsx>{`
        @keyframes pulseElegant {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 10px rgba(99,102,241,0.4);
          }
          50% {
            transform: scale(1.02);
            box-shadow: 0 0 20px rgba(139,92,246,0.6);
          }
        }
        .animate-pulse-elegant {
          animation: pulseElegant 2s infinite;
        }
      `}</style>
    </section>
  );
}
