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
    <main className="min-h-screen bg-stone-50 text-neutral-950">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-black/10 bg-stone-50/90 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="font-serif text-xl tracking-wide">ANDINET</div>
          <div className="hidden gap-8 text-sm uppercase tracking-[0.2em] md:flex">
            <a href="#services" className="hover:opacity-60">Services</a>
            <a href="#story" className="hover:opacity-60">Story</a>
            <a href="#contact" className="hover:opacity-60">Contact</a>
          </div>
          <button className="rounded-full bg-black px-5 text-white hover:bg-neutral-800">Get started</button>
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 pt-32 md:grid-cols-[1.05fr_0.95fr] md:items-center">
        <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-neutral-500">Construction Technology Bridge</p>
          <h1 className="font-serif text-6xl leading-[0.9] tracking-tight md:text-8xl">
            Innovating Addis Ababa
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-neutral-700">
            Connecting global construction technologies with infrastructure projects in Ethiopia and East Africa.
          </p>
          <p className="mt-5 max-w-xl leading-7 text-neutral-700">
            Through partnerships with global innovators, Andinet bridges funding, technology, and on-site expertise to deliver resilient infrastructure across East Africa.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-full bg-black px-7 py-6 text-white hover:bg-neutral-800">
              Start a partnership <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button variant="outline" className="rounded-full border-black px-7 py-6">
              Learn more
            </button>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative">
          <div className="absolute -right-4 -top-6 hidden rounded-full bg-black px-5 py-10 text-center text-xs uppercase tracking-[0.45em] text-white md:block [writing-mode:vertical-rl]">
            Learn More
          </div>
          <img
            src="https://images.unsplash.com/photo-1600240644455-3edc55c375fe?auto=format&fit=crop&w=1200&q=80"
            alt="Modern bridge infrastructure"
            className="h-[520px] w-full rounded-t-full object-cover shadow-2xl"
          />
        </motion.div>
      </section>

      <section id="story" className="bg-sky-500 px-5 py-20 text-black">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div>
            <h2 className="font-serif text-5xl uppercase md:text-7xl">Our Story</h2>
            <p className="mt-6 max-w-xl text-lg leading-8">
              Eng. Andinet Assemanew builds bridges between international vendors and Ethiopian projects, guiding clients from concept through commissioning with clarity, integrity, and local insight.
            </p>
            <button className="mt-8 rounded-full bg-black px-8 text-white hover:bg-neutral-800">Our team</button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80"
            alt="Bridge project landscape"
            className="h-[420px] w-full rounded-3xl object-cover shadow-xl"
          />
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-5 py-24">
        <div className="mb-12 flex items-end justify-between gap-6">
          <h2 className="font-serif text-5xl uppercase md:text-7xl">Our Services</h2>
          <p className="hidden max-w-sm text-neutral-600 md:block">
            Practical advisory for companies, governments, contractors, and infrastructure investors.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="overflow-hidden rounded-3xl border-black/10 bg-white shadow-sm">
                <img src={service.image} alt={service.title} className="h-56 w-full object-cover" />
                <div className="p-6">
                  <Icon className="mb-5 h-8 w-8" />
                  <h3 className="font-serif text-3xl uppercase">{service.title}</h3>
                  <p className="mt-4 leading-7 text-neutral-700">{service.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-black px-5 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <p className="text-5xl font-semibold">01</p>
            <p className="mt-3 text-neutral-300">Market entry and representation</p>
          </div>
          <div>
            <p className="text-5xl font-semibold">02</p>
            <p className="mt-3 text-neutral-300">Technology evaluation and training</p>
          </div>
          <div>
            <p className="text-5xl font-semibold">03</p>
            <p className="mt-3 text-neutral-300">Project partnerships and local support</p>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-4xl px-5 py-24 text-center">
        <p className="font-serif text-5xl uppercase md:text-7xl">Trusted Partner.</p>
        <p className="mt-6 text-neutral-600">Reach us for collaborations, project opportunities, or to discuss how construction technology can unlock faster, safer, and more cost-efficient infrastructure across East Africa.</p>
        <div className="mt-10 grid gap-4 text-left md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-5"><Mail className="mb-3 h-5 w-5" />info@andinetbridge.com</div>
          <div className="rounded-2xl border bg-white p-5"><Phone className="mb-3 h-5 w-5" />+358 00 000 0000</div>
          <div className="rounded-2xl border bg-white p-5"><MapPin className="mb-3 h-5 w-5" />Addis Ababa / Helsinki</div>
        </div>
        <form className="mt-10 grid gap-4 text-left">
          <input className="rounded-2xl border bg-white px-5 py-4 outline-none focus:ring-2 focus:ring-black" placeholder="Name" />
          <input className="rounded-2xl border bg-white px-5 py-4 outline-none focus:ring-2 focus:ring-black" placeholder="Email" />
          <textarea className="min-h-36 rounded-2xl border bg-white px-5 py-4 outline-none focus:ring-2 focus:ring-black" placeholder="Tell us about your project" />
          <button className="rounded-full bg-black py-6 text-white hover:bg-neutral-800">Send message</button>
        </form>
      </section>

      <footer className="border-t px-5 py-8 text-center text-sm text-neutral-500">
        © 2026 Andinet Construction Technology Bridge. All rights reserved.
      </footer>
    </main>
  );
}

