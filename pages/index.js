export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #0078B7, #89C541)',
      color: 'white',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <img src='/ino360-logo.png' alt='INO360 Logo' style={{ width: '150px', marginBottom: '1rem' }} />
      <h1 style={{ fontSize: '2.5rem' }}>Bienvenido a INO360</h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '1rem auto' }}>
        Plataforma de gestión de inocuidad alimentaria. Funciona online y offline, accesible desde cualquier lugar.
      </p>
      <a
        href='https://wa.me/56973951843'
        target='_blank'
        rel='noopener noreferrer'
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#25D366',
          color: 'white',
          padding: '12px',
          borderRadius: '50%',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
        }}
      >
        <img src='/whatsapp-icon.svg' alt='WhatsApp' style={{ width: '24px', height: '24px' }} />
      </a>
    </div>
  )
}