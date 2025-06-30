import React, { useState, useEffect, useRef } from "react";

export default function App() {
  const [activeSection, setActiveSection] = useState("nosotros");
  const [darkMode, setDarkMode] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const sectionRefs = {
    nosotros: useRef(null),
    servicios: useRef(null),
    proyectos: useRef(null),
    contacto: useRef(null),
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrollY(scrollTop);

      Object.entries(sectionRefs).forEach(([key, ref]) => {
        if (ref.current) {
          const offsetTop = ref.current.offsetTop - 100;
          const height = ref.current.offsetHeight;
          if (scrollTop >= offsetTop && scrollTop < offsetTop + height) {
            setActiveSection(key);
          }
        }
      });

      setShowBackToTop(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    sectionRefs[id].current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const parallaxOffset = scrollY * 0.5;
  const mouseParallaxX = (mousePosition.x - window.innerWidth / 2) * 0.01;
  const mouseParallaxY = (mousePosition.y - window.innerHeight / 2) * 0.01;

  // contenido de ejemplo
  const teamMembers = [
    {
      name: "Juan Pérez",
      role: "Ingeniero de Software",
      bio: "Experto en desarrollo full-stack con más de 5 años de experiencia.",
      image: "https://placehold.co/400x400?text=Juan",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      name: "Ana López",
      role: "Diseñadora UX/UI",
      bio: "Apasionada por la experiencia de usuario y el diseño centrado en el humano.",
      image: "https://placehold.co/400x400?text=Ana",
      skills: ["Figma", "Tailwind", "UX Research"],
    },
  ];

  const services = [
    {
      title: "Desarrollo Web",
      description: "Sitios rápidos, responsivos y optimizados.",
      icon: "🌐",
      features: ["React", "Vite", "Tailwind", "SEO"],
    },
    {
      title: "Apps Móviles",
      description: "Aplicaciones multiplataforma intuitivas.",
      icon: "📱",
      features: ["React Native", "Flutter", "UI/UX"],
    },
    {
      title: "Marketing Digital",
      description: "Estrategias efectivas para crecer online.",
      icon: "🚀",
      features: ["Google Ads", "Social Media", "Analytics"],
    },
  ];

  const projects = [
    {
      title: "Tienda Virtual",
      description: "E-commerce completo con pagos integrados.",
      category: "Web",
      image: "https://placehold.co/800x600?text=Tienda",
      tech: ["React", "Node", "MongoDB"],
    },
    {
      title: "App Fitness",
      description: "Seguimiento de rutinas y progreso de usuarios.",
      category: "Móvil",
      image: "https://placehold.co/800x600?text=Fitness",
      tech: ["React Native", "Firebase"],
    },
  ];

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      } font-sans overflow-x-hidden transition-all duration-1000 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Fondo dinámico */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute inset-0 transition-all duration-1000 ${
            darkMode
              ? "bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"
              : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
          }`}
        ></div>

        <div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mouseParallaxX * 2}px, ${
              mouseParallaxY * 2
            }px)`,
          }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse delay-1000"
          style={{
            transform: `translate(${-mouseParallaxX * 3}px, ${
              -mouseParallaxY * 3
            }px)`,
          }}
        ></div>

        {/* Partículas */}
        <div className="particle-container">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className={`particle ${darkMode ? "bg-white/30" : "bg-indigo-500/30"}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${15 + Math.random() * 25}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* HEADER */}
      <header
        className={`sticky top-0 z-40 border-b shadow-2xl transition-all duration-500 ${
          darkMode
            ? "bg-black/30 backdrop-blur-xl border-white/10"
            : "bg-white/30 backdrop-blur-xl border-black/10"
        }`}
      >
        <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-black bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-pulse">
            Dev & Market
          </h1>
          <ul className="hidden md:flex space-x-8">
            {Object.keys(sectionRefs).map((id) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className={`relative px-4 py-2 rounded-full transition-all duration-300 hover:scale-110 ${
                    activeSection === id
                      ? "text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg"
                      : "hover:text-blue-400 hover:bg-white/10"
                  }`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={toggleDarkMode}
            className="p-3 rounded-full bg-yellow-500/20 hover:bg-yellow-500/30 backdrop-blur-sm transition hover:scale-110"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>
        </nav>
      </header>

      <main className="container mx-auto px-6 pt-20 pb-32 relative z-10">
        {/* HERO */}
               {/* HERO */}
               <section className="mb-40 text-center relative">
          <h1
            className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-float leading-tight"
            style={{ transform: `translateY(${parallaxOffset}px)` }}
          >
            Innovación Digital
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-12 text-gray-200 dark:text-gray-300">
            Transformamos ideas en experiencias extraordinarias
          </p>
        </section>

    

        {/* NOSOTROS */}
        <section ref={sectionRefs.nosotros} className="mb-40">
          <h2 className="text-5xl font-bold mb-10">Nuestro Equipo</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="rounded-xl backdrop-blur-lg bg-white/10 p-6 shadow-xl"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <h3 className="text-2xl font-bold">{member.name}</h3>
                <p className="text-blue-400">{member.role}</p>
                <p className="text-gray-300 mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, si) => (
                    <span
                      key={si}
                      className="px-2 py-1 text-xs rounded bg-gradient-to-r from-blue-500 to-purple-500"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICIOS */}
        <section ref={sectionRefs.servicios} className="mb-40">
          <h2 className="text-5xl font-bold mb-10">Servicios</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div
                key={i}
                className="rounded-xl backdrop-blur-lg bg-white/10 p-6 shadow-xl text-center"
              >
                <div className="text-5xl mb-4">{s.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{s.title}</h3>
                <p className="text-gray-300 mb-4">{s.description}</p>
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

        {/* PROYECTOS */}
        <section ref={sectionRefs.proyectos} className="mb-40">
          <h2 className="text-5xl font-bold mb-10">Proyectos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <div
                key={i}
                className="rounded-xl backdrop-blur-lg bg-white/10 p-6 shadow-xl"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-60 object-cover rounded-xl mb-4"
                />
                <h3 className="text-2xl font-bold">{p.title}</h3>
                <p className="text-blue-400">{p.category}</p>
                <p className="text-gray-300 mb-4">{p.description}</p>
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

        {/* CONTACTO */}
        <section ref={sectionRefs.contacto} className="mb-40">
          <h2 className="text-5xl font-bold mb-10">Contáctanos</h2>
          <form className="max-w-3xl mx-auto flex flex-col gap-4">
            <input
              type="text"
              placeholder="Nombre"
              className="p-4 rounded bg-white/20 backdrop-blur"
            />
            <input
              type="email"
              placeholder="Correo"
              className="p-4 rounded bg-white/20 backdrop-blur"
            />
            <textarea
              placeholder="Mensaje"
              rows="5"
              className="p-4 rounded bg-white/20 backdrop-blur"
            ></textarea>
            <button
              type="submit"
              className="p-4 rounded bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold hover:scale-105 transition"
            >
              Enviar
            </button>
          </form>
        </section>
      </main>

      {/* botón volver arriba */}
      {showBackToTop && (
        <button
          onClick={backToTop}
          className="fixed bottom-8 right-8 p-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-2xl hover:scale-110 transition z-50"
        >
          ↑
        </button>
      )}

      {/* navegación móvil */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-40">
        <div
          className={`rounded-2xl shadow-xl py-3 flex justify-around ${
            darkMode ? "bg-gray-800/60" : "bg-white/60"
          } backdrop-blur`}
        >
          {Object.keys(sectionRefs).map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`px-4 py-2 rounded ${
                activeSection === id
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                  : "hover:bg-white/10"
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* estilos internos */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .particle-container {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .particle {
          position: absolute;
          border-radius: 50%;
          animation: moveParticle linear infinite;
        }
        @keyframes moveParticle {
          0% {
            transform: translateY(100vh);
            opacity: 0;
          }
          100% {
            transform: translateY(-100vh);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
