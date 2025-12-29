/* RESET */
html {
  scroll-behavior: smooth;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: system-ui, sans-serif;
}

@keyframes pageFade {
  to {
    opacity: 1;
  }
}

body {
  background: #ffffff;
  color: #222;
  opacity: 0;
  animation: pageFade 0.6s ease forwards;
}

/* NAVBAR */
/* NAVBAR */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 40px;
  background: #ffc0cb; /* Pink bar */
}

/* LOGO PILL */
.logo {
  font-weight: 700;
  color: #ffc0cb;          /* Pink text */
  background: #ffffff;    /* White pill */
  padding: 8px 18px;
  border-radius: 24px;
  font-size: 0.95rem;
}

/* NAV LINKS */
.navbar nav a {
  text-decoration: none;
  color: #ffc0cb;          /* Pink text */
  background: #ffffff;    /* White pill */
  margin-left: 14px;
  padding: 7px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.25s ease;
}

/* HOVER EFFECT */
.navbar nav a:hover {
  background: #ffc0cb;
  color: #ffffff;
  border: 1px
  solid #ffffff;
                /* White text */
  border-color: #ffffff;
}

.navbar nav a.active {
  background: #ffffff;
  color: #ffc0cb;
  box-shadow: 0 0 0 2px rgba(255,255,255,0.6);
}
/* SEARCH BAR */
.search-bar {
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.search-bar input {
  width: 340px;
  padding: 12px 18px;
  border-radius: 30px;
  border: 1px solid #ffc0cb;
  outline: none;
}
.sub a{
  display: inline-block;
  padding: 30px 60px  ;
  font-weight: 700;
  color: #ffffff;          /* Pink text */
  background: #ffc0cb;    /* White pill */
  padding: 8px 18px;
  border-radius: 24px;
  font-size: 0.95rem;
}
#suggestions {
  position: absolute;
  top: 48px;
  width: 340px;
  background: white;
  border-radius: 14px;
  list-style: none;
  padding: 6px 0;
  box-shadow: 0 8px 18px rgba(0,0,0,0.12);
  display: none;
  z-index: 5;
}

#suggestions li {
  padding: 8px 16px;
  cursor: pointer;
}

#suggestions li:hover {
  background: #fff0f5;
}

.search-bar input::placeholder {
  color: #aaa;
}

.search-bar input:focus {
  border-color: #ffc0cb;
  box-shadow: 0 0 0 2px rgba(255,192,203,0.3);
}

/* HERO */
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;   /* reduced */
  background: #fff5f8;
   border-bottom: 1px solid #f3c2cd;
}

.hero-box {
  text-align: center;
  max-width: 600px;
}

.hero-box h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero-box p {
  color: #555;
  margin-bottom: 2rem;
}

.btn-primary {
  background: #ffc0cb;
  padding: 12px 28px;
  color: #222;
  text-decoration: none;
  border-radius: 30px;
}

/* GALLERY */
.gallery-section {
  max-width: 1200px;
  margin: auto;
  padding: 2.5rem 2rem; /* reduced top padding */
}
/* FORCE MODAL TO SHOW */
.modal.active {
  display: flex !important;
}

/* FLOATING SUBSCRIBE WRAPPER */
.subscribe-wrap {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 110000;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0; /* no gap so image touches button */
}

.subscribe-img {
  width: 228px;
  height: 342px;
 
  object-fit: cover;
  display: block;
 
}

.subscribe-btn  a {
  background: #ffc0cb;
  color: #fff;
  border: none;
  padding: 10px 18px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.95rem;
  box-shadow: 0 8px 20px rgba(0,0,0,0.18);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: max-content;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.subscribe-wrap:hover .subscribe-btn  a {
  transform: translateY(-4px);
  box-shadow: 0 14px 28px rgba(0,0,0,0.22);
   background: #ffffff;            /* Pink bg */
  color:  #ffc0cb;                 /* White text */
  border-color: #ffc0cb;
}

.subscribe-btn:active  a{
  transform: translateY(-1px) scale(0.99);
}

@media (max-width: 600px) {
  .subscribe-wrap { right: 14px; bottom: 14px; }
  .subscribe-img { width: 48px; height: 48px; }
  .subscribe-btn { padding: 8px 12px; font-size: 0.9rem; }
}


.gallery-section h2 {
  margin-bottom: 1.5rem;
}


/* FILTER */
.filter-bar {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 2rem;
}

.filter-bar button {
  padding: 8px 18px;
  border-radius: 20px;
  border: 1px solid #ffc0cb;
  background: white;
  cursor: pointer;
}

.filter-bar button.active {
  background: #ffc0cb;
}

/* GRID */
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.img-card {
  position: relative;
  height: 260px;
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 6px 14px rgba(0,0,0,0.12);
}
/* FORCE MODAL TO SHOW */
.modal.active {
  display: flex !important;
}

.img-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/* FORCE MODAL TO SHOW */
.modal.active {
  display: flex !important;
}

.tag {
  position: absolute;
  bottom: 12px;
  left: 12px;
  background: rgba(255,192,203,0.9);
  padding: 4px 10px;
  font-size: 0.75rem;
  border-radius: 12px;
}
.logo,
.navbar nav a {
  transition: all 0.25s ease;
}

.logo:hover {
  transform: translateY(-1px);
}

.navbar nav a:hover {
  transform: translateY(-2px);
}

.btn-primary {
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 18px rgba(255, 192, 203, 0.45);
}
.img-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.img-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 26px rgba(0,0,0,0.15);
}
.img-card {
  transition: all 0.35s ease;
}
button:active,
a:active {
  transform: scale(0.97);
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .gallery {
    grid-template-columns: 1fr;
  }

  .hero-box h1 {
    font-size: 2.2rem;
  }
}

/* =========================
   FOOTER
========================= */
.footer {
  background: #ffc0cb;
  margin-top: 4rem;
  padding: 2rem 1.5rem;
}

.footer-content {
  max-width: 1200px;
  margin: auto;
  text-align: center;
}

.footer-text {
  color: #ffffff;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

/* SOCIAL LINKS */
.social-links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
}

.social-links a {
  text-decoration: none;
  color: #ffc0cb;                 /* Pink text */
  padding: 7px 16px;
  border-radius: 20px;
  background: #ffffff;            /* White background */
  border: 1px solid #ffffff;      /* Clean edge */
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.25s ease;
  box-shadow: 0 2px 6px rgba(0,0,0,0.08);
}

/* Hover effect */
.social-links a:hover {
  background: #ffc0cb;            /* Pink bg */
  color: #ffffff;                 /* White text */
  border-color: #ffffff;
}


/* FULLSCREEN IMAGE MODAL */
/* =========================
   FULLSCREEN IMAGE MODAL
========================= */
.modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 99999;
}

.modal.active {
  display: flex;
}

/* FULLSCREEN IMAGE */
.modal-img {
  width: 100vw;
  height: 100vh;
  object-fit: contain;
}

/* CLOSE BUTTON (TOP RIGHT – THEME PERFECT) */
.modal-close {
  position: fixed;
  top: 16px;
  right: 16px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background: #ffc0cb;
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: bold;
  cursor: pointer;
  z-index: 100000;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 18px rgba(255,192,203,0.6);
  transition: transform 0.2s ease, background 0.2s ease;
}

.modal-close:hover {
  background: #ffffff;
  color: #ffc0cb;
  transform: scale(1.1);
}

/* FORCE MODAL TO SHOW */
.modal.active {
  display: flex !important;
}

/* FADE ANIMATION */
@keyframes fadeIn {
  from { opacity: 0 }
  to { opacity: 1 }
}

.empty-state {
  text-align: center;
  margin-top: 2rem;
  color: #888;
  display: none;
}
/* FORCE MODAL TO SHOW */
.modal.active {
  display: flex !important;
}

/* =========================
   CUTE FOX VIDEO CARD 🦊
========================= */
/* =========================
   CUTE AUTO FOX VIDEO 🦊
========================= */
.fox-card {
  border: 10px;
  border-color: #f3c2cd;
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 180px;
  border-radius: 22px;
  background: #fff;
  box-shadow: 0 14px 30px rgba(0,0,0,0.2);
  overflow: hidden;
  z-index: 9000;
  animation: foxFloat 4s ease-in-out infinite;
}

@keyframes foxFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.fox-card video {
  width: 100%;
  display: block;
  pointer-events: none; /* user can’t accidentally pause */
}

/* ACTION BAR */
.fox-actions {
  padding: 10px;
  text-align: center;
  background: #fff;
  font-family: "Good Timing W00 Heavy Italic", system-ui, sans-serif;
  letter-spacing: 1px;
}

.fox-subscribe {
  display: inline-block;
  background: #ffc0cb;
  color: #ffffff;
  padding: 8px 18px;
  border-color: #f3c2cd;
  border-radius: 22px;
  font-weight: 700;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.25s ease;
}

.fox-subscribe:hover {
  border: 10px #f3c2cd;
  background: #ffffff;
  color: #ffc0cb;
  box-shadow: 0 8px 18px rgba(0,0,0,0.15);
}

/* MOBILE */
@media (max-width: 600px) {
  .fox-card {
    width: 140px;
    bottom: 14px;
    right: 14px;
  }
}
