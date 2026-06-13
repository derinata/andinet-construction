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


         <section
  id="news"
  style={{
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "80px 20px",
  }}
>
  <div style={{ textAlign: "center", marginBottom: "40px" }}>
    <h2 style={{ fontSize: "clamp(36px, 6vw, 70px)", margin: 0 }}>
      Latest Partnership Announcement
    </h2>
  </div>

<div
  style={{
    marginBottom: "80px",
    background: "#ffffff",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
  }}
>
  <h2
    style={{
      fontSize: "clamp(28px, 4vw, 50px)",
      marginBottom: "20px"
    }}
  >
    Strategic Partnership with Kinlong
  </h2>

  <img
    src="/images/kinlong-meeting.jpg"
    alt="Kinlong Meeting"
    style={{
      width: "50%",
      display: "block",
      marginLeft: "0 auto 20px auto",
      borderRadius: "20px",
      marginBottom: "20px"
    }}
  />

  <p
    style={{
      fontSize: "18px",
      lineHeight: "1.8"
    }}
  >
    Productive and encouraging trilateral business discussion held May 26, 2026 with representatives of Kinlong led by Mrs. Vanna and Winner Construction Materials Supplier PLC.
    The meeting focused on strategic cooperation, construction hardware solutions, and future market opportunities in Ethiopia’s growing infrastructure and real estate sector.
    Looking forward to building strong international partnerships and sustainable business collaboration.
  </p>
</div>
             <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "30px",
      alignItems: "center",
    }}
  >
    <img
      src="/images/partnership-mou.jpg"
      alt="Partnership MOU"
      style={{
        width: "100%",
        borderRadius: "20px",
        boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
      }}
    />

    <div>
      <h3 style={{ fontSize: "30px", marginBottom: "20px" }}>
        ECEVBA Signs Strategic Partnership Agreement
      </h3>

      <p style={{ color: "#555", lineHeight: "1.8" }}>
        On May 21, 2026, ECEVBA proudly signed its first trilateral
        Memorandum of Understanding (MOU) with MIE Global and Prana
        Events.
      </p>

      <p style={{ color: "#555", lineHeight: "1.8" }}>
        This partnership was established to collaborate on the China
        Trade Week initiative within the Electric Vehicle sector,
        creating opportunities for international cooperation,
        innovation, and sustainable development.
      </p>

      <p style={{ color: "#555", lineHeight: "1.8" }}>
        We are excited about this milestone and look forward to
        strengthening global partnerships in the electric vehicle
        industry.
      </p>
    </div>
  </div>
</section>
        <section
  id="home"
  style={{
    borderTop: "1px solid #ddd",
    textAlign: "center",
    padding: "70px 20px",
  }}
>
  <p
    style={{
      color: "#6b21a8",
      fontWeight: "700",
      letterSpacing: "3px",
      textTransform: "uppercase",
      marginBottom: "22px",
    }}
  >
    Construction Technology Bridge
  </p>

  <h1
    style={{
      fontSize: "clamp(42px, 7vw, 76px)",
      lineHeight: "1.05",
      margin: 0,
    }}
  >
    Innovating Addis Ababa
  </h1>

  <p
    style={{
      maxWidth: "850px",
      margin: "25px auto 0",
      fontSize: "22px",
      color: "#444",
      lineHeight: "1.6",
    }}
  >
    Connecting global construction technologies with infrastructure projects
    in Ethiopia and East Africa.
  </p>

  <p
    style={{
      maxWidth: "900px",
      margin: "25px auto 0",
      fontSize: "20px",
      color: "#444",
      lineHeight: "1.6",
    }}
  >
    Through partnerships with global innovators, Andinet bridges funding,
    technology, and on-site expertise to deliver resilient infrastructure
    across East Africa.
  </p>

  <div
    style={{
      marginTop: "38px",
      display: "flex",
      justifyContent: "center",
      gap: "18px",
      flexWrap: "wrap",
    }}
  >
    <a
      href="#contact"
      style={{
        background: "black",
        color: "white",
        padding: "18px 34px",
        borderRadius: "40px",
        textDecoration: "none",
        fontSize: "18px",
      }}
    >
      Start a partnership →
    </a>

    <a
      href="#story"
      style={{
        color: "black",
        padding: "18px 34px",
        borderRadius: "40px",
        border: "1px solid black",
        textDecoration: "none",
        fontSize: "18px",
      }}
    >
      Learn more
    </a>
  </div>


</section>


      <section
  id="story"
  style={{
    background: "#f5f5f4",
    padding: "90px 20px",
  }}
>
  <div
    style={{
      maxWidth: "1100px",
      margin: "0 auto",
      textAlign: "center",
    }}
  >
    <h2
      style={{
        fontSize: "clamp(36px, 6vw, 70px)",
        marginBottom: "20px",
      }}
    >
      Our Story
    </h2>

    <p
      style={{
        maxWidth: "850px",
        margin: "0 auto 45px",
        fontSize: "20px",
        lineHeight: "1.8",
        color: "#444",
      }}
    >
      Eng. Andinet Assemanew builds bridges between international vendors
      and Ethiopian projects, guiding clients from concept through
      commissioning with clarity, integrity, and local insight.
    </p>

    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        borderRadius: "28px",
        overflow: "hidden",
        boxShadow: "0 18px 45px rgba(0,0,0,0.12)",
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80"
        alt="Bridge project landscape"
        style={{
          width: "100%",
          height: "360px",
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>
  </div>
</section>
<section
  id="partners"
  style={{
    background: "#ffffff",
    padding: "90px 20px",
  }}
>
  <div
    style={{
      maxWidth: "1100px",
      margin: "0 auto",
    }}
  >
    <div style={{ textAlign: "center", marginBottom: "60px" }}>
      <h2
        style={{
          fontSize: "clamp(36px, 6vw, 70px)",
          marginBottom: "20px",
        }}
      >
        Leadership & Global Partners
      </h2>

      <p
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          color: "#555",
          fontSize: "19px",
          lineHeight: "1.8",
        }}
      >
        Building international bridges between innovation, infrastructure,
        technology, and sustainable development.
      </p>
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "30px",
      }}
    >
      <div
        style={{
          background: "#f5f5f4",
          padding: "35px",
          borderRadius: "24px",
        }}
      >
        <h3 style={{ fontSize: "30px", marginBottom: "25px" }}>
          Leadership Team
        </h3>

        <div style={{ display: "grid", gap: "18px", color: "#444" }}>
          <p><strong>Chief Advisor:</strong> Dr. Peter Jeng</p>

          <p><strong>Business Developer CEO:</strong> Eng. Tigist Gonfa</p>

          <p><strong>Manufacturing & Infrastructure CEO:</strong> Mr. Endalk Demeke</p>

          <p><strong>Spanish Representative:</strong> Dr. Yirgalem Yifru</p>

          <p><strong>Finnish Representative:</strong> Eng. Derej Asamenew</p>
        </div>
      </div>

      <div
        style={{
          background: "#f5f5f4",
          padding: "35px",
          borderRadius: "24px",
        }}
      >
        <h3 style={{ fontSize: "30px", marginBottom: "25px" }}>
          Global Partners
        </h3>

        <div style={{ display: "grid", gap: "14px", color: "#444" }}>
          <p>CIAPST - China International for Promotion of Science and Technology</p>

          <p>MIE Events</p>

          <p>Alsina Formwork</p>

          <p>JA Solar</p>

          <p>ZP Motors</p>

          <p>ADTO Group</p>

          <p>Kinlong</p>

          <p>SFA France</p>

          <p>ITC China</p>
        </div>
      </div>
    </div>
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


      <footer style={{ borderTop: "1px solid #ddd", padding: "26px", textAlign: "center", color: "#666" }}>
        © 2026 Andinet Construction Technology Bridge. All rights reserved.


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
          <a
  href="mailto:andassamenew@yahoo.com"
  style={{
    background: "black",
    color: "white",
    padding: "16px",
    borderRadius: "999px",
    textDecoration: "none",
    display: "block",
    textAlign: "center",
    fontSize: "16px"
  }}
>
  Send message
</a>
        </form>
      </section>
      </footer>
    </main>
  );
}