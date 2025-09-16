function ContactSection() {
  return (
    <>
      <section className="section contact" id="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-grid">
            
            {/* Email */}
            <div 
              className="contact-item"
              
              onClick={() => window.location.href = "mailto:nidhanidhu1106@gmail.com"}
              style={{ cursor: "pointer" }}
            >
              <div className="contact-icon">📧</div>
              <h3 className="contact-title">Mail

</h3>
              <p>nidhanidhu1106@gmial.com</p>
            </div>

            {/* Phone */}
            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <h3 className="contact-title">Phone</h3>
              <p>+91 98954 49488</p>
            </div>

            {/* Location */}
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <h3 className="contact-title">Location</h3>
              <p>Kerla, Malappuram </p>
            </div>

            {/* LinkedIn */}
            <div className="contact-item">
              <div className="contact-icon">🔗</div>
              <h3 className="contact-title">LinkedIn</h3>
              <p>NIDHA FATHIMA</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactSection;
