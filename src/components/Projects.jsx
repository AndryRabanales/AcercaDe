export default function Projects({ projects, darkMode }) {
    return (
      <section id="proyectos" className="mb-40">
        <h2 className="text-5xl font-bold mb-10">Proyectos</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="w-full rounded-xl backdrop-blur-lg bg-white/10 p-6 shadow-xl">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-60 object-cover rounded-xl mb-4"
              />
              <h3 className="text-2xl font-bold">{p.title}</h3>
              <p className="text-blue-400">{p.category}</p>
              <p className="mb-4">
                {darkMode ? p.description : <span className="text-gray-900">{p.description}</span>}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t, ti) => (
                  <span
                    key={ti}
                    className="px-2 py-1 text-xs rounded bg-gradient-to-r from-blue-500 to-purple-500"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  