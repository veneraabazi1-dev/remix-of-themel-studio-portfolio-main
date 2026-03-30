import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-surface-light text-surface-light-fg">
        <div className="mx-auto max-w-4xl px-6 py-16 md:px-12 md:py-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-3xl font-bold uppercase tracking-[0.2em] md:text-5xl"
          >
            Kontakti
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16 max-w-xl text-justify text-sm leading-relaxed text-surface-light-fg/55 md:text-base"
          >
            Na kontaktoni per cdo pyetje rreth projekteve, bashkepunimeve ose
            sherbimeve tona. Do t&apos;ju pergjigjemi sa me shpejt.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 gap-16 md:grid-cols-2"
          >
            <div className="space-y-10">
              <div>
                <h3 className="mb-6 text-xs uppercase tracking-[0.25em] text-surface-light-fg/40">
                  Informata
                </h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="mb-1 block text-xs uppercase tracking-wide text-surface-light-fg/40">
                      Email
                    </span>
                    <span className="text-surface-light-fg/75">info@themelstudio.com</span>
                  </div>
                  <div>
                    <span className="mb-1 block text-xs uppercase tracking-wide text-surface-light-fg/40">
                      Telefoni
                    </span>
                    <span className="text-surface-light-fg/75">+383 45 213 244</span>
                  </div>
                  <div>
                    <span className="mb-1 block text-xs uppercase tracking-wide text-surface-light-fg/40">
                      Vendndodhja
                    </span>
                    <span className="text-surface-light-fg/75">Rr. Ulpiana nr. 32, Prishtinë, Kosovë</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-6 text-xs uppercase tracking-[0.25em] text-surface-light-fg/40">
                  Harta
                </h3>
                <div className="overflow-hidden rounded-[28px] border border-surface-light-fg/10 bg-white/40">
                  <iframe
                    title="Prishtina Map"
                    src="https://www.google.com/maps?q=Prishtine,Kosove&z=13&output=embed"
                    className="h-[320px] w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-surface-light-fg/40">
                  Emri
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border-b border-surface-light-fg/15 bg-transparent pb-2 text-sm text-surface-light-fg outline-none transition-colors focus:border-surface-light-fg/40"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-surface-light-fg/40">
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border-b border-surface-light-fg/15 bg-transparent pb-2 text-sm text-surface-light-fg outline-none transition-colors focus:border-surface-light-fg/40"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.15em] text-surface-light-fg/40">
                  Mesazhi
                </label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none border-b border-surface-light-fg/15 bg-transparent pb-2 text-sm text-surface-light-fg outline-none transition-colors focus:border-surface-light-fg/40"
                />
              </div>
              <button
                type="submit"
                className="border border-surface-light-fg/15 px-8 py-3 text-xs uppercase tracking-[0.25em] text-surface-light-fg/60 transition-all hover:border-surface-light-fg/40 hover:text-surface-light-fg"
              >
                Dergo
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
