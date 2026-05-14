import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Globe2, Handshake, Mail, MapPin, Phone } from "lucide-react";

const services = [
  {
    title: "Technology Advisory",
    text: "We connect international construction technology providers with infrastructure opportunities across Ethiopia and East Africa through partnerships, training, and on-site integration.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    icon: Building2,
  },
  {
    title: "Smart Infrastructure",
    text: "We help public and private sectors adopt data-driven practices, 3D modeling, remote monitoring, and practical digital tools to optimize budgets, schedules, and safety.",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80",
    icon: Globe2,
  },
  {
    title: "Partnership Representation",
    text: "We represent trusted global companies with clarity, integrity, and strong local insight, helping international partners enter the Ethiopian market confidently.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    icon: Handshake,
  },
];

export default function AndinetConstructionWebsite() {
  return (
    <main style={{ background: "#fafaf9", color: "#171717", fontFamily: "Arial, sans-serif" }}>
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: "white", borderBottom: "1px solid #ddd" }}>
        <nav style={{ maxWidth: "1100px", margin: "0 auto", padding: "18px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", flexWrap: "wrap" }}>
          <div style={{ fontSize: "22px", letterSpacing: "2px", fontWeight: "600" }}>ANDINET</div>

          <div style={{ display: "flex", gap: "28px", fontSize: "14px", textTransform: "uppercase" }}>
            <a href="#services">Services</a>
            <a href="#story">Story</a>
            <a href="#contact">Contact</a>
          </div>

          <a href="#contact" style={{ background: "black", color: "white", padding: "10px 18px", borderRadius: "999px", textDecoration: "none" }}>
            Get started
          </a>
        </nav>
      </header>

      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 20px 50px", display: "grid", gap: "35px" }}>
        <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{ textAlign: "center" }}>
          <p style={{ letterSpacing: "3px", color: "#666", textTransform: "uppercase" }}>Construction Technology Bridge</p>
          <h1 style={{ fontSize: "clamp(42px, 8vw, 86px)", lineHeight: "0.95", margin: "20px 0" }}>
            Innovating Addis Ababa
          </h1>
          <p style={{ maxWidth: "760px", margin: "0 auto", fontSize: "20px", lineHeight: "1.7", color: "#555" }}>
            Connecting global construction technologies with infrastructure projects in Ethiopia and East Africa.
          </p>
          <p style={{ maxWidth: "760px", margin: "18px auto 0", fontSize: "18px", lineHeight: "1.7", color: "#555" }}>
            Through partnerships with global innovators, Andinet bridges funding, technology, and on-site expertise to deliver resilient infrastructure across East Africa.
          </p>

          <div style={{ marginTop: "28px", display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            <a href="#contact" style={{ background: "black", color: "white", padding: "14px 22px", borderRadius: "999px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              Start a partnership <ArrowRight size={18} />
            </a>
            <a href="#story" style={{ border: "1px solid black", color: "black", padding: "14px 22px", borderRadius: "999px", textDecoration: "none" }}>
              Learn more
            </a>
          </div>
        </motion.div>

        <img
          src="https://images.unsplash.com/photo-1600240644455-3edc55c375fe?auto=format&fit=crop&w=1200&q=80"
          alt="Modern bridge infrastructure"
          style={{ width: "100%", maxHeight: "520px", objectFit: "cover", borderRadius: "28px", boxShadow: "0 20px 50px rgba(0,0,0,0.18)" }}
        />
      </section>

      <section id="story" style={{ background: "#0ea5e9", color: "black", padding: "70px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gap: "30px" }}>
          <div style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(36px, 6vw, 70px)", margin: 0 }}>Our Story</h2>
            <p style={{ maxWidth: "850px", margin: "20px auto", fontSize: "19px", lineHeight: "1.7" }}>
              Eng. Andinet Assemanew builds bridges between international vendors and Ethiopian projects, guiding clients from concept through commissioning with clarity, integrity, and local insight.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80"
            alt="Bridge project landscape"
            style={{ width: "100%", maxHeight: "480px", objectFit: "cover", borderRadius: "28px" }}
          />
        </div>
      </section>

      <section id="services" style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 20px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "clamp(36px, 6vw, 70px)", margin: 0 }}>Our Services</h2>
          <p style={{ color: "#555", fontSize: "18px" }}>
            Practical advisory for companies, governments, contractors, and infrastructure investors.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} style={{ background: "white", borderRadius: "26px", overflow: "hidden", boxShadow: "0 12px 30px rgba(0,0,0,0.08)" }}>
                <img src={service.image} alt={service.title} style={{ width: "100%", height: "220px", objectFit: "cover" }} />
                <div style={{ padding: "24px" }}>
                  <Icon size={34} />
                  <h3 style={{ fontSize: "24px", marginTop: "18px" }}>{service.title}</h3>
                  <p style={{ color: "#555", lineHeight: "1.7" }}>{service.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section style={{ background: "black", color: "white", padding: "60px 20px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "30px", textAlign: "center" }}>
          <div><h3>01</h3><p>Market entry and representation</p></div>
          <div><h3>02</h3><p>Technology evaluation and training</p></div>
          <div><h3>03</h3><p>Project partnerships and local support</p></div>
        </div>
      </section>

      <section id="contact" style={{ maxWidth: "900px", margin: "0 auto", padding: "80px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(36px, 6vw, 70px)", margin: 0 }}>Trusted Partner.</h2>
        <p style={{ color: "#555", fontSize: "18px", lineHeight: "1.7" }}>
          Reach us for collaborations, project opportunities, or to discuss how construction technology can unlock faster, safer, and more cost-efficient infrastructure across East Africa.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginTop: "30px", textAlign: "left" }}>
          <div style={{ background: "white", padding: "18px", borderRadius: "18px", border: "1px solid #ddd" }}><Mail /> andassamenew@yahoo.com</div>
          <div style={{ background: "white", padding: "18px", borderRadius: "18px", border: "1px solid #ddd" }}><Phone /> +251 911 690 847</div>
          <div style={{ background: "white", padding: "18px", borderRadius: "18px", border: "1px solid #ddd" }}><MapPin /> Addis Ababa / Helsinki</div>
        </div>

        <form style={{ marginTop: "30px", display: "grid", gap: "14px" }}>
          <input style={{ padding: "16px", borderRadius: "14px", border: "1px solid #ccc" }} placeholder="Name" />
          <input style={{ padding: "16px", borderRadius: "14px", border: "1px solid #ccc" }} placeholder="Email" />
          <textarea style={{ padding: "16px", borderRadius: "14px", border: "1px solid #ccc", minHeight: "140px" }} placeholder="Tell us about your project" />
          <button style={{ background: "black", color: "white", padding: "16px", borderRadius: "999px", border: "none", fontSize: "16px" }}>
            Send message
          </button>
        </form>
      </section>

      <footer style={{ borderTop: "1px solid #ddd", padding: "26px", textAlign: "center", color: "#666" }}>
        © 2026 Andinet Construction Technology Bridge. All rights reserved.
      </footer>
    </main>
  );
}