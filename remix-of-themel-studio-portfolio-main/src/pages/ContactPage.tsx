import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import CustomCursor from "@/components/CustomCursor";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder
    console.log("Form submitted:", form);
  };

  return (
    <Layout>
      <CustomCursor />
      <div className="bg-surface-light text-surface-light-fg min-h-screen">
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold tracking-[0.2em] uppercase mb-6"
          >
            Kontakti
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm md:text-base text-surface-light-fg/55 leading-relaxed mb-16 max-w-xl"
          >
            Na kontaktoni për çdo pyetje rreth projekteve, bashkëpunimeve ose
            shërbimeve tona. Do t'ju përgjigjemi sa më shpejt.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16"
          >
            {/* Contact info */}
            <div>
              <h3 className="text-xs tracking-[0.25em] uppercase text-surface-light-fg/40 mb-6">
                Informata
              </h3>
              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-surface-light-fg/40 text-xs tracking-wide uppercase block mb-1">
                    Email
                  </span>
                  <span className="text-surface-light-fg/75">
                    info@themel-studio.com
                  </span>
                </div>
                <div>
                  <span className="text-surface-light-fg/40 text-xs tracking-wide uppercase block mb-1">
                    Telefoni
                  </span>
                  <span className="text-surface-light-fg/75">
                    +383 45 213 244
                  </span>
                </div>
                <div>
                  <span className="text-surface-light-fg/40 text-xs tracking-wide uppercase block mb-1">
                    Vendndodhja
                  </span>
                  <span className="text-surface-light-fg/75">
                   Rr. Ulpiana nr. 32, Prishtinë, Kosovë
                  </span>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-xs tracking-[0.15em] uppercase text-surface-light-fg/40 block mb-2">
                  Emri
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-surface-light-fg/15 pb-2 text-sm text-surface-light-fg outline-none focus:border-surface-light-fg/40 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs tracking-[0.15em] uppercase text-surface-light-fg/40 block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-surface-light-fg/15 pb-2 text-sm text-surface-light-fg outline-none focus:border-surface-light-fg/40 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs tracking-[0.15em] uppercase text-surface-light-fg/40 block mb-2">
                  Mesazhi
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-surface-light-fg/15 pb-2 text-sm text-surface-light-fg outline-none focus:border-surface-light-fg/40 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="text-xs tracking-[0.25em] uppercase text-surface-light-fg/60 border border-surface-light-fg/15 px-8 py-3 hover:text-surface-light-fg hover:border-surface-light-fg/40 transition-all"
              >
                Dërgo
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
