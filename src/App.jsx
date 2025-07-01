import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import BackToTopButton from "./components/BackToTopButton";
import MobileNav from "./components/MobileNav";
import Background from "./components/Background";

import { services } from "./data/services";
import { projects } from "./data/projects";

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

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const backToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const parallaxOffset = scrollY * 0.5;
  const mouseParallaxX = (mousePosition.x - window.innerWidth / 2) * 0.01;
  const mouseParallaxY = (mousePosition.y - window.innerHeight / 2) * 0.01;

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      } font-sans overflow-x-hidden transition-all duration-1000 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* fondo animado */}
      <Background
        darkMode={darkMode}
        mouseParallaxX={mouseParallaxX}
        mouseParallaxY={mouseParallaxY}
      />

      {/* header */}
      <Header
        activeSection={activeSection}
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        scrollToSection={scrollToSection}
        sectionRefs={sectionRefs}
      />

      {/* contenido principal */}
      <main className="w-full max-w-7xl mx-auto px-0 pt-0 pb-0 relative z-10">
        <Hero parallaxOffset={parallaxOffset} darkMode={darkMode} />

        <section ref={sectionRefs.servicios} className="m-0 p-0">
          <Services services={services} darkMode={darkMode} />
        </section>

        <section ref={sectionRefs.proyectos} className="m-0 p-0">
          <Projects projects={projects} darkMode={darkMode} />
        </section>

        <section ref={sectionRefs.contacto} className="m-0 p-0">
          <ContactForm darkMode={darkMode} />
        </section>
      </main>

      {/* botón volver arriba */}
      <BackToTopButton show={showBackToTop} backToTop={backToTop} />

      {/* navegación móvil */}
      <MobileNav
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        darkMode={darkMode}
        sectionRefs={sectionRefs}
      />

      {/* estilos internos */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
