export default function Services({ services, darkMode }) {
    return (
      <section id="servicios" className="mb-40">
        <h2 className="text-5xl font-bold mb-10">Servicios</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="w-full rounded-xl backdrop-blur-lg bg-white/10 p-6 shadow-xl text-center">
              <div className="text-5xl mb-4">{s.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{s.title}</h3>
              <p className="mb-4">
                {darkMode ? s.description : <span className="text-gray-900">{s.description}</span>}
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {s.features.map((f, fi) => (
                  <span
                    key={fi}
                    className="px-2 py-1 text-xs rounded bg-gradient-to-r from-blue-500 to-purple-500"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  