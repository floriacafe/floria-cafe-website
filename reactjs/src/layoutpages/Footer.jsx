import florialogo from "../assets/florialogo.jpg";
import "./footer.css";

function Footer() {
  const isOpen = (() => {
    const now = new Date();
    const minutes = now.getHours() * 60 + now.getMinutes();
    // Open daily 10:00 (600) until 02:00 next day (120)
    return minutes >= 600 || minutes < 120;
  })();

  return (
    <>
      <div className="footer">
        <div className="namelogo">
          <img src={florialogo} alt="floria" className="florialogo" />
          <h2>Floria Café & Lounge</h2>
        </div>

        <address>
          <a
            href="https://maps.app.goo.gl/vXKPNtDPciqa1L6u9"
            target="_blank"
            rel="noopener noreferrer"
            title="Open in Google Maps"
          >
            📍 One Golden Square Mall, New Cairo
          </a>
        </address>

        <div className="hours">
          <strong>Working Hours:</strong>&nbsp;Sun–Sat 10:00 AM – 2:00 AM
          <span className={`status ${isOpen ? "open" : "closed"}`}>
            {isOpen ? "Open now" : "Closed"}
          </span>
        </div>

        <div className="social-links">
          <a href="https://www.facebook.com/Floria.Cafe.Lounge" target="_blank"
            rel="noopener noreferrer" aria-label="Facebook" className="social fb">Facebook</a>
          <a href="https://www.instagram.com/floria.cafe.lounge/?hl=en" target="_blank"
            rel="noopener noreferrer" aria-label="Instagram" className="social ig">Instagram</a>
          <a href="https://www.tiktok.com/@floria_cafe_lounge" target="_blank"
            rel="noopener noreferrer" aria-label="TikTok" className="social tk">TikTok</a>
        </div>
      </div>
    </>
  )
}

export default Footer
