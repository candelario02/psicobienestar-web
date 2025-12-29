import React, { useState } from 'react';
import './App.css';
import fotoPerfil from './assets/psicologa.jpg'; 

function App() {
  // ESTADOS: Controlan qué se muestra en pantalla (modales)
  const [mostrarForm, setMostrarForm] = useState(false);
  const [servicioSeleccionado, setServicioSeleccionado] = useState(null);

  // BASE DE DATOS DE SERVICIOS: Aquí modificas los textos de las tarjetas
  const serviciosInfo = {
    individual: {
      titulo: "Terapia Individual",
      icono: "🌿",
      duracion: "3 a 6 meses (frecuencia semanal)",
      resumen: "Sesiones de 50 min para identificar patrones de pensamiento y conducta.",
      metodologia: [
        "Fase 1: Evaluación y objetivos personalizados.",
        "Fase 2: Identificación de disparadores emocionales.",
        "Fase 3: Herramientas de regulación y cierre."
      ],
      beneficios: ["Autoconocimiento", "Gestión emocional", "Autoestima"]
    },
    ansiedad: {
      titulo: "Manejo de Ansiedad",
      icono: "🧠",
      duracion: "8 a 12 sesiones intensivas",
      resumen: "Enfoque especializado en técnicas de calma y reestructuración cognitiva.",
      metodologia: [
        "Fase 1: Psicoeducación nerviosa.",
        "Fase 2: Respiración diafragmática.",
        "Fase 3: Prevención de recaídas."
      ],
      beneficios: ["Paz mental", "Control de pánico", "Calma diaria"]
    },
    crecimiento: {
      titulo: "Crecimiento Personal",
      icono: "✨",
      duracion: "Proceso continuo (Módulos de 4 meses)",
      resumen: "Potencia tus habilidades sociales y proyecta tu mejor versión.",
      metodologia: [
        "Módulo 1: Fortalecimiento del autoconcepto.",
        "Módulo 2: Límites asertivos.",
        "Módulo 3: Proyecto de vida."
      ],
      beneficios: ["Liderazgo", "Seguridad", "Relaciones sanas"]
    },
    pareja: {
      titulo: "Terapia de Pareja",
      icono: "🤝",
      duracion: "4 a 8 meses",
      resumen: "Mediación profesional para restaurar la confianza y comunicación.",
      metodologia: [
        "Sesión 1: Diagnóstico relacional.",
        "Sesiones 2-6: Dinámicas de comunicación.",
        "Fase final: Reconstrucción de acuerdos."
      ],
      beneficios: ["Confianza", "Resolución", "Intimidad"]
    }
  };

  const irAWhatsapp = () => {
    window.open('https://wa.me/51936712554?text=Hola,%20deseo%20hacer%20una%20consulta%20gratuita', '_blank');
  };

  return (
    <div className="psico-container">
      {/* 1. NAVEGACIÓN */}
      <header className="navbar">
        <div className="logo">❤️ PsicoBienestar</div>
        <nav className="menu">
          <a href="#inicio">Inicio</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#servicios">Servicios</a>
        </nav>
      </header>

      {/* 2. HERO / BIENVENIDA */}
      <section id="inicio" className="hero">
        <h1>Tu camino hacia el bienestar comienza aquí</h1>
        <div className="hero-buttons">
          <button className="btn-agendar" onClick={() => setMostrarForm(true)}>📩 Agendar Cita</button>
          <button className="btn-consulta" onClick={irAWhatsapp}>💬 Consultar WhatsApp</button>
        </div>
      </section>

      {/* 3. SECCIÓN SOBRE MÍ */}
      <section id="sobre-mi" className="sobre-mi">
        <div className="sobre-mi-contenido">
          <img src={fotoPerfil} alt="Psicóloga" className="foto-redonda" />
          <div className="texto-profesional">
            <span className="badge">Psicóloga Colegiada</span>
            <h2>Presentación Profesional</h2>
            <p className="bio-texto">Especialista en salud mental con enfoque en psicología clínica.</p>
            <div className="formacion-academica">
              <div className="grado">
                <span>🎓</span>
                <div>
                  <h4>Licenciada en Psicología</h4>
                  <p>UTP | <strong>C.Ps.P. 123456</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GRID DE SERVICIOS */}
      <section id="servicios" className="servicios-grid">
        {Object.keys(serviciosInfo).map((key) => (
          <div key={key} className="servicio-card" onClick={() => setServicioSeleccionado(serviciosInfo[key])}>
            <div className="icono">{serviciosInfo[key].icono}</div>
            <h3>{serviciosInfo[key].titulo}</h3>
            <span className="ver-mas">Saber más →</span>
          </div>
        ))}
      </section>

      {/* 5. MODAL DE DETALLE DE SERVICIO (Abre al dar clic en "Saber más") */}
      {servicioSeleccionado && (
        <div className="modal-overlay" onClick={() => setServicioSeleccionado(null)}>
          <div className="form-card modal-detallado" onClick={e => e.stopPropagation()}>
            <button className="btn-cerrar" onClick={() => setServicioSeleccionado(null)}>×</button>
            <div className="modal-header">
              <span className="icono-grande">{servicioSeleccionado.icono}</span>
              <h2>{servicioSeleccionado.titulo}</h2>
            </div>
            <div className="modal-body">
              <p>{servicioSeleccionado.resumen}</p>
              <div className="info-seccion">
                <h4>📌 Ruta del Tratamiento</h4>
                <ul>
                  {servicioSeleccionado.metodologia.map((paso, i) => <li key={i}>{paso}</li>)}
                </ul>
              </div>
              <div className="info-seccion">
                <h4>✅ Beneficios</h4>
                <div className="tags-beneficios">
                  {servicioSeleccionado.beneficios.map((b, i) => <span key={i} className="tag">{b}</span>)}
                </div>
              </div>
              <div className="duracion-box">
                <strong>⏱️ Duración:</strong> {servicioSeleccionado.duracion}
              </div>
            </div>
            <button className="btn-enviar" onClick={() => {setServicioSeleccionado(null); setMostrarForm(true);}}>
              Agendar consulta sobre este servicio
              <button className="btn-agendar">
  Agendar consulta sobre este servicio
</button>
            </button>
          </div>
        </div>
      )}

      {/* 6. MODAL DE FORMULARIO DE CONTACTO */}
      {mostrarForm && (
        <div className="modal-overlay" onClick={() => setMostrarForm(false)}>
          <div className="form-card" onClick={e => e.stopPropagation()}>
            <button className="btn-cerrar" onClick={() => setMostrarForm(false)}>×</button>
            <h2>Agendar Cita</h2>
            <form action="https://formspree.io/f/xdaoypry" method="POST">
              <input type="text" name="nombre" placeholder="Tu nombre" required />
              <input type="text" name="telefono" placeholder="Tu teléfono" required />
              <input type="email" name="email" placeholder="Tu correo" required />
              <textarea name="mensaje" placeholder="¿Cómo puedo ayudarte?" required></textarea>
              <button type="submit" className="btn-enviar">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;