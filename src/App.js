import React from "react";
import logo from "./Panda_Towing_Logo.png"
import { useRef, useState, useEffect } from "react";
import img4399 from "./IMG_4399.jpg";
import img4400 from "./IMG_4400.jpg";
import img4401 from "./IMG_4401.jpg";
import img4402 from "./IMG_4402.jpg";



const phone = "(204) 619-9540";
const phoneHref = "tel:+12046199540";


const reviews = [
  {
    name: "Amanveer Singh",
    meta: "8 reviews • 1 photo • 4 weeks ago",
    text:
      "My car wouldn’t start in a grocery store parking lot and I was blocking traffic. Panda Towing came to the rescue in under 30 minutes and towed my car without any hassle. The whole process was smooth and the driver even gave me tips to avoid battery issues in the future. Amazing customer service and very professional team!",
  },
  {
    name: "Ruel Bantados",
    meta: "10 reviews • 5 photos • Edited 3 months ago",
    text:
      "I was stranded unexpectedly in the middle of nowhere due to a damaged oil pan. Panda towing got to me so fast I thought they were in the area. Amazing service. 10/10 will recommend to anyone who needs roadside assistance. Thank you again for your quick yet amazing service!",
  },
  {
    name: "Abel Tewelde",
    meta: "2 reviews • 1 month ago",
    text:
      "A huge thank you to Panda Towing for going above and beyond when I had car trouble during my stay. They helped arrange towing and made a stressful situation so much easier to handle. I'm incredibly grateful for their kindness and support!",
  },
];

/* ---------------- Icons (inline SVG) ---------------- */
function PhoneIcon({ size = 20 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V21a1 1 0 01-1 1C10.3 22 2 13.7 2 3a1 1 0 011-1h3.49a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.24 1.02l-2.2 2.2z" fill="currentColor" />
    </svg>
  );
}
function StarIcon({ size = 18 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true"><path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
  );
}

function MapPinIcon({ size = 18 }) {
  return (<svg viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" /></svg>);
}
function ClockIcon({ size = 18 }) {
  return (<svg viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 11h-5V7h2v4h3v2z" /></svg>);
}
function ShieldTickIcon({ size = 18 }) {
  return (<svg viewBox="0 0 24 24" width={size} height={size}><path fill="currentColor" d="M12 2l8 4v6c0 5.33-3.8 10.33-8 11-4.2-.67-8-5.67-8-11V6l8-4zm-1 13l5-5-1.4-1.4L11 12.2l-1.6-1.6L8 12l3 3z" /></svg>);
}

/* ---------------- Sections ---------------- */
function Nav() {
  return (
    <header className="nav wrap">
      <div className="nav-left">
        
        <div className="brand">
          <strong className="brand-full">Panda Towing LTD</strong>
          <img src={logo} alt="Panda Towing LTD" className="brand-logo" />
          <span className="brand-tagline">Winnipeg, Manitoba · 24/7</span>
        </div>

      </div>
      <nav className="nav-links">
        <a href="#services">Services</a>
        <a href="#reviews">Reviews</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a className="btn btn-primary call-btn" href="tel:+12046199540">
          Call (204) 619-9540
        </a>
      </nav>
    </header>
  );
}

// Hero Section  - Main Page
function Hero() {
  return (
    <section className="hero">
       <div className="hero-logo-bg">
    <img src={logo} alt="Panda Towing Logo" />
  </div>

      <div className="wrap hero-inner">
        <div className="availability">
          <span className="dot" />
          <span className="chip-text">Available 24/7</span>
        </div>
        <h1>PANDA TOWING <span className="thin">LTD</span></h1>
        <p className="sub">Reliable, fast, and professional towing services in Winnipeg. <span className="highlight">Fast response times</span>, <span className="highlight">competitive rates</span>, and a commitment to customer satisfaction.</p>
        <div className="hero-cta-row">
          <a className="btn btn-primary lg" href={phoneHref}><PhoneIcon /> Call Now: {phone}</a>
          <div className="rating"><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /> <b>4.9/5</b> <span className="muted">Customer Rating</span></div>
        </div>
        <div className="hero-bullets">
          <div><ClockIcon /> Open 24 Hours</div>
          <div><MapPinIcon /> Winnipeg, Manitoba</div>
          <div><ShieldTickIcon /> Licensed & Insured</div>
        </div>
      </div>
    </section>
  );
}

/* --- Service Icons (inline SVGs) --- */
const IconRoadside = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden {...props}>
    <path fill="currentColor" d="M3 6h10v5h2l2-3h4v10h-2a2 2 0 11-4 0H9a2 2 0 11-4 0H3V6zM17 11V9h2l1 2h-3z" />
  </svg>
);

const IconWinch = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden {...props}>
    <path fill="currentColor" d="M12 2h-2v8a3 3 0 003 3 3 3 0 01-3 3 5 5 0 100 10v-2a3 3 0 110-6 5 5 0 005-5V2z" />
  </svg>
);

const IconTire = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden {...props}>
    <path fill="currentColor" d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 3a7 7 0 110 14A7 7 0 0112 5zm0 3a4 4 0 100 8 4 4 0 000-8z" />
  </svg>
);

const IconFlatbed = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden {...props}>
    <path fill="currentColor" d="M2 14h12l5-4h3v8H2v-4zm5 5a2 2 0 11-4 0 2 2 0 014 0zm12 0a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const IconBoost = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden {...props}>
    <path fill="currentColor" d="M11 21h-1l1-7H7l6-11h1l-1 7h4l-6 11z" />
  </svg>
);

const IconLock = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden {...props}>
    <path fill="currentColor" d="M12 2a5 5 0 00-5 5v3H5v12h14V10h-2V7a5 5 0 00-5-5zm-3 8V7a3 3 0 116 0v3H9z" />
  </svg>
);



// Services Section - 
const services = [
  { key: "road", title: "Roadside Assistance", desc: "Tire change, boosts, and more.", icon: IconRoadside },
  { key: "winch", title: "Winch Out Service", desc: "Recovery from snow, mud, or ditches.", icon: IconWinch },
  { key: "flat", title: "Flat Tire", desc: "Swap your spare or tow you to a tire shop.", icon: IconTire },
  { key: "flatbed", title: "Flatbed Towing", desc: "Safe transport for AWD & low-clearance vehicles.", icon: IconFlatbed },
  { key: "boost", title: "Boost Service", desc: "On-site jump-start to get you moving again.", icon: IconBoost },
  { key: "lock", title: "Lock Out", desc: "Keys locked in? We’ll get you back inside safely.", icon: IconLock },
];





function ServicesSlider() {
  const trackRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const updateArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanLeft(scrollLeft > 4);
    setCanRight(scrollLeft + clientWidth < scrollWidth - 4);
  };

  useEffect(() => {
    updateArrows();
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => updateArrows();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  const scrollByCards = (dir = 1) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = Math.max(280, el.clientWidth * 0.9);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className="svc-slider">
      <button
        className={`svc-arrow left ${canLeft ? "" : "disabled"}`}
        onClick={() => scrollByCards(-1)}
        aria-label="Scroll services left"
        disabled={!canLeft}
      >
        ‹
      </button>

      <div className="svc-track" ref={trackRef}>
        {services.map((s) => (
          <article className="svc-card" key={s.key}>
            <div className="svc-icon" aria-hidden="true">
              <s.icon />
            </div>

            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </article>
        ))}
      </div>

      <button
        className={`svc-arrow right ${canRight ? "" : "disabled"}`}
        onClick={() => scrollByCards(1)}
        aria-label="Scroll services right"
        disabled={!canRight}
      >
        ›
      </button>
    </div>
  );
}

function Services() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="services" className="section section-alt">
      <div className="wrap">
        <h2>Our Services</h2>
        <p className="lead">From flat tires to full towing, we’ve got you covered – any time, any place</p>

        {!expanded ? (
          <ServicesSlider />
        ) : (
          <div className="svc-grid">
            {services.map((s) => (
              <article className="svc-card" key={s.key}>
                <div className="svc-icon" aria-hidden="true">
                  <s.icon />
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </article>
            ))}
          </div>
        )}

        {/* <div className="center-row">
          <button className="btn btn-outline" onClick={() => setExpanded((v) => !v)}>
            {expanded ? "Back to slider" : "View all services"}
          </button>
        </div> */}

        <div className={`center-row ${expanded ? "" : "is-center"}`}>
          <button className="btn btn-outline" onClick={() => setExpanded(v => !v)}>
            {expanded ? "Back to slider" : "View all services"}
          </button>
        </div>
      </div>
    </section>
  );
}



const imgs = [img4399, img4400, img4401, img4402];

function Fleet() {

  // const imgs = [
  //   "/IMG_4399.jpg",
  //   "/IMG_4400.jpg",
  //   "/IMG_4401.jpg",
  //   "/IMG_4402.jpg",
  // ];
  
  return (
    <section id="fleet" className="section">
      <div className="wrap">
        <h2>Our Fleet</h2>
        <p className="lead">A look at some of the trucks and equipment we use to keep Winnipeg moving.</p>
        <div className="fleet">
          {imgs.map((src, i) => (
            <div key={i} className="fleet-card"><img src={src} alt="fleet" /></div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="section section-alt">
      <div className="wrap">
        <div className="stars-row"><StarIcon size={22} /><StarIcon size={22} /><StarIcon size={22} /><StarIcon size={22} /><StarIcon size={22} /> <b>4.9/5</b></div>
        <h2>Customer Reviews</h2>
        <p className="lead">See what our customers say about our professional towing services.</p>
        <div className="review-grid">
          {reviews.map((r) => (
            <div className="review-card" key={r.name}>
              <div className="review-head">
                <div className="avatar">{r.name.charAt(0)}</div>
                <div>
                  <strong>{r.name}</strong>
                  <div className="muted small">{r.meta}</div>
                </div>
              </div>
              <p>{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="wrap contact">
        <div className="contact-list">
          <div className="contact-item">
            <div className="contact-icon"><PhoneIcon /></div>
            <div>
              <h4>Phone</h4>
              <a href={phoneHref}>{phone}</a>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon"><MapPinIcon /></div>
            <div>
              <h4>Address</h4>
              <div>1100 Notre Dame Ave<br />Winnipeg, MB R3E 0N8</div>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon"><ClockIcon /></div>
            <div>
              <h4>Hours</h4>
              <div>Open 24 Hours · Every Day</div>
            </div>
          </div>
        </div>

        <div className="emergency card">
          <h3>Emergency Towing</h3>
          <p>Stranded? Need immediate assistance?</p>
          <a className="btn btn-danger lg" href={phoneHref}><PhoneIcon /> Call Emergency Line</a>
          <ul className="ticks">
            <li><span className="tick" /><span>Fast response times</span></li>
            <li><span className="tick" /><span>Professional drivers</span></li>
            <li><span className="tick" /><span>Competitive rates</span></li>
            <li><span className="tick" /><span>Licensed & insured</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function PandaTowingSite() {
  return (
    <main>
      <Nav />
      <Hero />
      <Services />
      <Fleet />
      <Reviews />
      <Contact />

      {/* Floating Call Button */}
      <a className="float-call" href={phoneHref} aria-label={`Call ${phone}`}>
        <PhoneIcon size={24} />
      </a>

      <footer className="footer">
        <div className="wrap footer-inner center">
          <h4>PANDA TOWING LTD</h4>
          <p className="muted">Professional towing services in Winnipeg, Manitoba</p>
          <p className="tags"><span>#winnipegtowing</span> <span>#pandatowing</span> <span>#batteryboostservice</span></p>
          <div className="muted small">© {new Date().getFullYear()} Panda Towing LTD. All rights reserved.</div>
        </div>
      </footer>

      <style>{`
        :root {
          --purple: #7c3aed; /* primary */
          --purple-600: #6d28d9;
          --purple-700: #5b21b6;
          --ink: #17151f;
          --muted: #667085;
          --surface: #ffffff;
          --surface-alt: #f7f5ff;

          --ring: rgba(124,58,237,.2);
          --radius: 16px;
          --shadow: 0 10px 30px rgba(17, 12, 40, .15);
        }
        * { box-sizing: border-box; }
        body { margin: 0; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; color: var(--ink); background: linear-gradient(180deg,#ffffff, #faf6ff); }
        a { color: inherit; text-decoration: none; }
        img { max-width: 100%; display: block; }

        .wrap { max-width: 1180px; margin: 0 auto; padding: 0 20px; }
        .section { padding: 84px 0; }
        .section-alt { background: radial-gradient(1000px 300px at 0% 0%, rgba(124,58,237,.08), transparent 60%), var(--surface); }
        h1, h2 { line-height: 1.1; margin: 0 0 14px; }
        h1 { font-size: clamp(34px, 5vw, 64px); font-weight: 900; letter-spacing: .5px; }
        h2 { font-size: clamp(26px, 3.2vw, 44px); font-weight: 800; }
        .thin { display:block; font-size: .6em; font-weight: 800; color: var(--purple-700); margin-top: 6px; }
        .lead { color: var(--muted); font-size: clamp(16px, 1.6vw, 20px); margin-bottom: 24px; }
        .muted { color: var(--muted); }
        .small { font-size: 14px; }
        .highlight { color: var(--purple-700); font-weight: 700; }

        /* Nav */
        .nav { position: sticky; top: 0; z-index: 50; display:flex; align-items:center; justify-content:space-between; gap: 16px; padding: 14px 20px; background: rgba(255,255,255,.75); backdrop-filter: blur(8px); border-bottom: 1px solid #eee; }
        .nav-left { display:flex; align-items:center; gap: 12px; }
        .brand { display:flex; flex-direction:column; font-size: 14px; }
        .brand strong { font-size: 16px; }
        .nav-links { display:flex; align-items:center; gap: 14px; }
        .nav-links a { font-weight: 600; opacity:.9; }
        .nav-links a:hover { opacity:1; color: var(--purple-700); }
        /* Default desktop view */
        /* Show text brand on desktop, hide logo */
.brand-logo {
  display: none;
  height: 40px;
}

.brand-full {
  display: inline-block;
}

.brand-tagline {
  font-size: 0.85rem;
  color: var(--muted);
}

/* On mobile: show logo, hide text + tagline */
@media (max-width: 640px) {
  .brand-full,
  .brand-tagline {
    display: none !important;
  }

  .brand-logo {
    display: inline-block;
  }
}


/* Show call button normally */
.call-btn {
  display: inline-flex;
}

/* Hide call button on small screens */
@media (max-width: 640px) {
  .call-btn {
    display: none !important;
  }
}


        /* Buttons */
        .btn { display:inline-flex; align-items:center; gap:8px; padding: 12px 16px; border-radius: var(--radius); border: 1px solid #ddd; font-weight: 800; box-shadow: 0 1px 0 rgba(0,0,0,.02); }
        .btn svg { margin-top: -1px; }
        .btn-primary { background: var(--purple); color: white; border-color: transparent; }
        .btn-primary:hover { background: var(--purple-600); }
        .btn-ghost { background: white; }
        .btn-ghost:hover { border-color: var(--purple); }
        .btn-danger { background: #e11d48; color: white; border-color: transparent; }
        .btn-danger:hover { background: #be123c; }
        .btn.lg { padding: 14px 18px; font-size: 16px; }

        /* Hero */
       .hero {
  position: relative;
  padding: 96px 0;
  background: radial-gradient(1400px 400px at 20% 0%, rgba(124,58,237,.12), transparent 60%), 
              linear-gradient(180deg, #fff, #fbfaff);
  overflow: hidden;
}

.hero-logo-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 650px; /* adjust size */
  height: auto;
  transform: translate(-50%, -50%);
  opacity: 0.09; /* light transparency so content stays visible */
  z-index: 0;
  pointer-events: none; /* ensures it doesn't block clicks */
}

.hero-logo-bg img {
  width: 100%;
  height: auto;
}

.hero-inner {
  position: relative;
  z-index: 1; /* ensures content is above logo */
}

        .hero-inner { position: relative; z-index: 1; text-align: left; }
        .availability { display:inline-flex; align-items:center; gap:10px; padding:10px 14px; border-radius: 999px; border:1px solid #eee; box-shadow: var(--shadow); background:white; margin-bottom: 16px; font-weight: 700; }
        .availability .dot { width:10px; height:10px; background:#10b981; border-radius:50%; box-shadow:0 0 0 3px rgba(16,185,129,.25); }
        .sub { color: #4b5563; font-size: clamp(18px, 2vw, 22px); max-width: 940px; }
        .hero-cta-row { display:flex; gap: 16px; align-items:center; flex-wrap: wrap; margin: 20px 0 10px; }
        .rating { display:flex; align-items:center; gap:6px; font-weight:700; }
        .rating b { margin-left: 6px; }
        .hero-bullets { display:flex; gap: 26px; flex-wrap: wrap; color: var(--muted); margin-top: 14px; font-weight: 700; }
        .hero-bullets > div { display:flex; align-items:center; gap:8px; }
        .chip-text{color:var(--amber); font-weight:600}
        .dot{width:.6rem; height:.6rem; background:var(--green); border-radius:999px; animation:pulse 2s infinite}
        .chip{display:inline-flex; align-items:center; gap:.75rem; padding:.75rem 1rem; border:1px solid rgba(245,158,11,.2); background:rgba(255,255,255,.06); backdrop-filter:saturate(140%) blur(6px); border-radius:999px; margin-bottom:1rem}
        .availability {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 999px;
  border: 1px solid #eee;
  box-shadow: var(--shadow);
  background: white;
  margin-bottom: 16px;
  font-weight: 700;
}

.availability .dot {
  position: relative;
  width: 10px;
  height: 10px;
  background: #10b981; /* green */
  border-radius: 50%;
}

.availability .dot::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: rgba(16,185,129,0.4);
  animation: signal 1.5s ease-out infinite;
}

@keyframes signal {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }
}




        /* Services slider refined */
.svc-slider {
  position: relative;
  padding: 12px 60px;
  margin-top: 8px;
}


.svc-track {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: calc((100% - 44px) / 3); /* exactly 3 cards per view desktop */
  gap: 22px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 8px;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}
.svc-track::-webkit-scrollbar { display: none; }


.svc-card {
  scroll-snap-align: center;
  background: linear-gradient(180deg, #ffffff, #fbfaff);
  border: 1px solid #eee;
  border-radius: 20px;
  padding: 28px;                  /* bigger padding */
  box-shadow: 0 8px 24px rgba(20, 12, 60, 0.08);
  display: flex;
  flex-direction: column;
  gap: 12px;                      /* more spacing inside */
  transition: transform .25s ease, box-shadow .25s ease;
}

.svc-card h3 {
  font-size: 1.6rem;              /* bigger title */
}

.svc-card p {
  font-size: 1.2rem;                /* bigger description */
}


.svc-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 34px rgba(95, 55, 220, .15);
}

/* Icon */
.svc-icon {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: #f4f0ff;
  display: grid;
  place-items: center;
  font-size: 24px;
  color: var(--purple-700);
}


/* Bigger, plain arrows without circles */
.svc-arrow {
  background: none;             /* no background */
  border: none;                  /* remove border */
  box-shadow: none;              /* remove shadow */
  color: var(--purple-700);      /* arrow color */
  font-size: 48px;               /* make arrow bigger */
  font-weight: bold;             /* make arrow thicker */
  cursor: pointer;
  line-height: 1;
  padding: 0;
  z-index: 2;
}

.svc-arrow.left {
  position: absolute;
  top: 50%;
  left: -20px;                   /* move slightly outside track */
  transform: translateY(-50%);
}

.svc-arrow.right {
  position: absolute;
  top: 50%;
  right: -20px;                  /* move slightly outside track */
  transform: translateY(-50%);
}

.svc-arrow.disabled {
  opacity: 0.3;                  /* faded when inactive */
  cursor: default;
}


@media (max-width: 1024px) {
  .svc-track { grid-auto-columns: calc((100% - 22px) / 1.5); } /* slightly larger on tablet */
}

@media (max-width: 640px) {
  .svc-track { grid-auto-columns: 100%; } /* full width on mobile */
}


// @media (max-width: 1024px) {
//   .svc-track { grid-auto-columns: calc((100% - 22px) / 2); } /* 2 cards per view */
// }
// @media (max-width: 640px) {
//   .svc-track { grid-auto-columns: 100%; } /* 1 card per view */
//   .svc-slider { padding: 12px 44px; }
// }

/* default: left aligned */
.center-row{
  display:flex;
  justify-content:flex-start;     /* left by default */
  margin-top:18px;
}

/* when slider is visible: center it */
.center-row.is-center{
  justify-content:center !important;  /* center only in slider mode */
}



        /* Fleet */
        .fleet { display:grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
        .fleet-card { background: #fff; border:1px solid #eee; border-radius: 20px; overflow: hidden; box-shadow: var(--shadow); }
        .fleet-card img { width: 100%; height: 260px; object-fit: cover; }

        /* Reviews */
        .stars-row { display:flex; align-items:center; gap:6px; color: var(--purple-700); font-weight:800; }
        .review-grid { display:grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .review-card { background: white; border:1px solid #eee; border-radius: 24px; padding: 20px; box-shadow: var(--shadow); }
        .review-head { display:flex; align-items:center; gap:12px; margin-bottom:10px; }
        .avatar { width:42px; height:42px; border-radius:50%; background: var(--purple); color:white; display:grid; place-items:center; font-weight:900; }

        /* Contact */
        .contact { display:grid; grid-template-columns: 1fr 1fr; gap: 28px; align-items: start; }
        .contact-list { display:grid; gap: 16px; }
        .contact-item { display:flex; gap: 12px; align-items:center; background: white; border:1px solid #eee; border-radius: 18px; padding: 14px; box-shadow: var(--shadow); }
        .contact-icon { width:46px; height:46px; border-radius: 14px; display:grid; place-items:center; background:#f4f0ff; color: var(--purple-700); }
        .card { background: linear-gradient(180deg, #fff, #fbfaff); border:1px solid #eee; border-radius: 22px; padding: 22px; box-shadow: var(--shadow); }
        .ticks { list-style:none; padding:0; margin:14px 0 0; display:grid; gap:10px; }
        .ticks li { display:flex; align-items:center; gap:10px; }
        .tick { width:10px; height:10px; background:#10b981; border-radius:50%; box-shadow:0 0 0 3px rgba(16,185,129,.15); }

//         /* Footer */
//         .footer { background: #0f0b1a; color: #e9e6ff; margin-top: 36px; padding: 40px 0; }
//         .footer-inner.center { text-align:center; }
//         .tags { display:flex; gap:16px; justify-content:center; margin: 8px 0 14px; color: #c0b5ff; font-weight:800; }

//         /* Mobile adjustments */
// @media (max-width: 660px) {
//   .footer-inner {
//     flex-direction: column;
//     align-items: center;
//     text-align: center;
//   }
//   .footer-col {
//     min-width: 100%;
//   }
// }

/* Footer (safe + responsive) */
.footer{
  background:#0f0b1a;
  color:#e9e6ff;
  margin-top:36px;
  padding:40px 0;
  overflow-x:hidden;                 /* stop sideways scroll on tiny screens */
}

.footer .wrap{
  max-width:1200px;
  margin:0 auto;
  padding:0 20px;                    /* safe side padding */
  box-sizing:border-box;
}

/* center variant if you use it somewhere */
.footer-inner.center{
  text-align:center;
  justify-content:center;
}

/* columns */
.footer-col{
  flex:1 1 260px;                    /* flexible with a sensible min width */
  min-width:220px;
}


.footer-inner {
  display: flex;
  flex-direction: column; /* always stacked */
  align-items: center;
  text-align: center;
  gap:8px;
}
/* tags row */
.tags{
  display:flex;
  flex-wrap:wrap;                    /* allow long tags to wrap */
  gap:12px 16px;
  justify-content:center;
  margin:8px 0 14px;
  color:#c0b5ff;
  font-weight:800;
}

/* bottom bar */
.footer-bottom{
  margin-top:28px;
  padding-top:18px;
  border-top:1px solid rgba(233,230,255,.12);
  text-align:center;
  font-size:14px;
  color:rgba(233,230,255,.75);
}


/* Mobile adjustments */
@media (max-width: 660px){
  .footer-inner{
    flex-direction:column;           /* stack */
    align-items:center;
    text-align:center;
  }
  .footer-col{
    min-width:100%;                  /* each column is full-width */
  }
}



        /* Floating Call */
        .float-call { position: fixed; right: 19px; bottom: 60px; width: 58px; height: 58px; border-radius: 50%; display:grid; place-items:center; background: var(--purple); color: white; box-shadow: 0 16px 30px rgba(95, 55, 220, .35); border: 2px solid white; z-index: 60; margin-right:16px; }
        .float-call:hover { background: var(--purple-600); }
        /* Floating Call Button */

/* Pulse animation */
.float-call::before,
.float-call::after {
  content: "";
  position: absolute;
  border-radius: 50%;
  background: rgba(124,58,237,0.35);
  inset: 0;
  z-index: -1;
  animation: call-pulse 1.8s ease-out infinite;
}
.float-call::after {
  animation-delay: 0.9s; /* stagger for double pulse */
}

@keyframes call-pulse {
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  100% {
    transform: scale(2.4);
    opacity: 0;
  }
}


        /* Responsive */
        @media (max-width: 1100px) {
          .cards { grid-template-columns: repeat(2, 1fr); }
          .fleet { grid-template-columns: repeat(2, 1fr); }
          .review-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 700px) {
          .section { padding: 64px 0; }
          .nav { padding: 12px 14px; }
          .hero { padding: 78px 0; }
          .hero-cta-row { flex-direction: column; align-items: flex-start; }
          .hero-bullets { gap: 14px; }
          .cards, .fleet, .review-grid, .contact { grid-template-columns: 1fr; }
          .float-call { width: 54px; height: 54px; }
        }
      `}</style>
    </main>
  );
}
