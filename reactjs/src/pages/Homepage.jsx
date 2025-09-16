import "./homepage.css";
import lovecup from "../assets/love-cup.svg";
import leaf from "../assets/leaf.svg";
import award from "../assets/award.svg";
import CurvedLoop from "../blocks/CurvedLoop";
import Loadingscreen from "../layoutpages/Loadingscreen";
import { NavLink } from "react-router-dom";

const Homepage = () => {
  // Use static relative paths for public assets
  const couchView = "/Floria-pics/couch-view.jpg";
  const counterView = "/Floria-pics/counter-view.jpg";
  const insideView1 = "/Floria-pics/inside-view1.jpg";
  const insideView2 = "/Floria-pics/inside-view2.jpg";
  const loveView1 = "/Floria-pics/love-view1.jpg";
  const loveView2 = "/Floria-pics/love-view2.jpg";
  const nightView = "/Floria-pics/night-view.jpg";
  const outsideView1 = "/Floria-pics/outside-view1.jpg";

  const galleryFiles = [
    couchView,
    counterView,
    insideView1,
    insideView2,
    loveView1,
    loveView2,
    nightView,
    outsideView1,
  ];
  const galleryAlts = [
    "Warm ambient seating with soft lighting",
    "Signature latte with artful foam",
    "Cozy corner with plush pillows and books",
    "Fresh pastry selection on display",
    "Barista crafting a pour-over coffee",
    "Sunlit table with a latte and flowers",
    "Elegant counter with artisan equipment",
    "Nighttime lounge vibe with warm tones",
  ];
  const galleryDescriptions = [
    "Cozy pink seating and florals",
    "Elegant bar counter at Floria",
    "Bright lounge seating",
    "Floria wall logo and sofas",
    "Romantic pink decor corner",
    "Private celebration setup",
    "Night lounge with neon glow",
    "Cafe exterior and terrace",
  ];

  return (
    <>
    <Loadingscreen />
      <div className="container-hero" style={{ marginBottom: 0 }}>
        <section className="hero" style={{ marginBottom: 0, paddingBottom: 0 }}>
          <div className="coffee-beans bean-1"></div>
          <div className="coffee-beans bean-2"></div>
          <div className="coffee-beans bean-3"></div>

          <div className="hero-left">
            <span className="hero-subtitle">Premium Coffee Experience</span>
            <h1>Floria Cafe</h1>
            <p>Experience the art of coffee in every cup</p>

            <div className="hero-features">
              <div className="feature-item">
                <img
                  src={lovecup}
                  alt="Cup"
                  width={28}
                  height={28}
                  loading="lazy"
                  decoding="async"
                />
                <span>Freshly Roasted Daily</span>
              </div>
              <div className="feature-item">
                <img
                  src={leaf}
                  alt="Leaf"
                  width={28}
                  height={28}
                  loading="lazy"
                  decoding="async"
                />
                <span>100% Organic Beans</span>
              </div>
              <div className="feature-item">
                <img
                  src={award}
                  alt="Award"
                  width={28}
                  height={28}
                  loading="lazy"
                  decoding="async"
                />
                <span>Award Winning Taste</span>
              </div>
            </div>

            <div className="hero-actions">
              <NavLink to="/menu" className="cta-button">
                Explore Our Menu
              </NavLink>
              <NavLink to="/location" className="cta-button-secondary">
                Visit Us
              </NavLink>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Coffee Varieties</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1k+</span>
                <span className="stat-label">Happy Customers</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4.9★</span>
                <span className="stat-label">Average Rating</span>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <div className="model-container">
              <model-viewer
                src="/models_3d/cup_of_cappuccino.glb"
                alt="A 3D model of a cappuccino"
                camera-controls
                auto-rotate
                ar
                loading="lazy"
                shadow-intensity="1"
                reveal="auto"
              ></model-viewer>
            </div>
          </div>
        </section>
      </div>

      <div
        style={{
          minHeight: 50,
          maxHeight: 200,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
          zIndex: 1,
        }}
      >
        <CurvedLoop
          text="Handcrafted Coffee • Locally Sourced Ingredients • Cozy Ambience • Floria Cafe • "
          marqueeText="Handcrafted Coffee • Locally Sourced Ingredients • Cozy Ambience • Floria Cafe • "
          speed={1.2}
          curveAmount={160}
          direction="left"
          className="hero-marquee"
          style={{ color: "#4B2E2B" }}
        />
      </div>

      <div
        style={{
          minHeight: 50,
          maxHeight: 180,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
          zIndex: 1,
        }}
      >
        <CurvedLoop
          text="Welcome to the Floria Gallery • Explore Our Coffee Art • Sip, Smile, Discover • "
          marqueeText="Welcome to the Floria Gallery • Explore Our Coffee Art • Sip, Smile, Discover • "
          speed={1.2}
          curveAmount={160}
          direction="right"
          className="hero-marquee"
          style={{ color: "#C4663E" }}
        />
      </div>

      {/* Gallery Room Section */}
      <section className="gallery-section" aria-labelledby="gallery-heading">
        <div className="gallery-container">
          <h2 id="gallery-heading" className="gallery-title">Step Inside Floria</h2>

          <div className="gallery-grid">
            {galleryFiles.map((src, i) => (
              <article className="gallery-card" key={src || i}>
                <div className="image-wrap">
                  <img
                    src={src}
                    alt={galleryAlts[i] || `Gallery photo ${i + 1}`}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      // quick debug to verify the exact URL that failed
                      console.warn("Image failed to load:", e.currentTarget.src);
                    }}
                  />
                  <span className="hover-badge" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M3 7h12v5a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V7z" stroke="#C4663E" strokeWidth="1.5" />
                      <path d="M15 9h3a2 2 0 0 1 0 4h-1" stroke="#C4663E" strokeWidth="1.5" />
                      <path d="M4 18h11" stroke="#C4663E" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </div>

                <p className="image-caption">
                  {galleryDescriptions[i] || galleryAlts[i] || `Floria Cafe photo ${i + 1}`}
                </p>
              </article>
            ))}
          </div>
        </div>

        <br />

        <div className="lines">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </section>

    </>
  );
};

export default Homepage;