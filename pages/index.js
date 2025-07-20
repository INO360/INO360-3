import { useState } from 'react';

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div style={{
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(to bottom right, #0078B7, #89C541)',
      color: 'white',
      padding: '2rem'
    }}>
      <div style={{ textAlign: 'center' }}>
        <img src='/ino360-logo.png' alt='INO360 Logo' style={{ width: '120px' }} />
        <h1 style={{ fontSize: '2.5rem', marginTop: '1rem' }}>INO360</h1>
        <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>
          Plataforma integral para la gestión de inocuidad alimentaria. Funciona online y offline.
        </p>
        {!loggedIn ? (
          <button onClick={() => setLoggedIn(true)} style={{ marginTop: '1rem', backgroundColor: 'white', color: '#0078B7', padding: '10px 20px', borderRadius: '8px', border: 'none' }}>
            Iniciar sesión (simulado)
          </button>
        ) : (
          <p style={{ marginTop: '1rem' }}>🔐 Sesión iniciada</p>
        )}
      </div>

      <section style={{ background: 'white', color: '#333', padding: '2rem', margin: '2rem auto', borderRadius: '1rem', maxWidth: '800px' }}>
        <h2 style={{ color: '#0078B7' }}>Nuestra Misión</h2>
        <p>
          Facilitar y elevar los estándares de inocuidad alimentaria mediante herramientas digitales accesibles,
          eficientes y confiables que funcionen online y offline.
        </p>
      </section>

      <section style={{ background: '#f4f4f4', color: '#333', padding: '2rem', margin: '2rem auto', borderRadius: '1rem', maxWidth: '800px' }}>
        <h2 style={{ color: '#0078B7' }}>Nuestra Visión</h2>
        <p>
          Ser la plataforma líder en gestión de inocuidad alimentaria en Latinoamérica, reconocida por su innovación,
          confiabilidad y compromiso con la seguridad alimentaria global.
        </p>
      </section>

      <section style={{ background: 'white', color: '#333', padding: '2rem', margin: '2rem auto', borderRadius: '1rem', maxWidth: '800px' }}>
        <h2 style={{ color: '#0078B7' }}>Testimonios</h2>
        <blockquote>“INO360 nos ahorró horas de trabajo en registros manuales. ¡Excelente!” – Andrea M.</blockquote>
        <blockquote style={{ marginTop: '1rem' }}>“Pasamos la auditoría sin observaciones gracias a esta plataforma.” – Felipe R.</blockquote>
      </section>

      <section style={{ background: '#f4f4f4', color: '#333', padding: '2rem', margin: '2rem auto', borderRadius: '1rem', maxWidth: '800px' }}>
        <h2 style={{ color: '#0078B7' }}>Planes de Suscripción</h2>
        <ul>
          <li><strong>Básico:</strong> $29.990/mes – Gestión de registros</li>
          <li><strong>Pro:</strong> $49.990/mes – + Auditorías automáticas</li>
          <li><strong>Premium:</strong> $89.990/mes – + Desarrollo personalizado</li>
        </ul>
      </section>

      <section style={{ background: 'white', color: '#333', padding: '2rem', margin: '2rem auto', borderRadius: '1rem', maxWidth: '800px' }}>
        <h2 style={{ color: '#0078B7' }}>Contáctanos</h2>
        <form action="mailto:info@ino360.com" method="POST" encType="text/plain">
          <input type="text" name="Nombre" placeholder="Tu nombre" required style={{ width: '100%', padding: '10px', marginBottom: '1rem', borderRadius: '8px', border: '1px solid #ccc' }} />
          <input type="email" name="Email" placeholder="Tu correo" required style={{ width: '100%', padding: '10px', marginBottom: '1rem', borderRadius: '8px', border: '1px solid #ccc' }} />
          <textarea name="Mensaje" placeholder="Escribe tu mensaje" rows="4" required style={{ width: '100%', padding: '10px', marginBottom: '1rem', borderRadius: '8px', border: '1px solid #ccc' }}></textarea>
          <button type="submit" style={{ backgroundColor: '#0078B7', color: 'white', padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>
            Enviar
          </button>
        </form>
      </section>

      <a
        href="https://wa.me/56973951843"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#25D366',
          padding: '12px',
          borderRadius: '50%',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
        }}
      >
        <img src='/whatsapp-icon.svg' alt='WhatsApp' style={{ width: '24px', height: '24px' }} />
      </a>

      <footer style={{ textAlign: 'center', marginTop: '3rem', fontSize: '0.9rem', color: '#eee' }}>
        © {new Date().getFullYear()} INO360 - Todos los derechos reservados
      </footer>
    </div>
  );
}