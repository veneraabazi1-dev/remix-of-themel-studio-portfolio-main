import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/info@themel-studio.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.message,
            _subject: `Kontakt nga ${form.name}`,
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setForm({ name: "", email: "", message: "" });
      setStatus({
        type: "success",
        message: "Mesazhi u dergua me sukses.",
      });
    } catch {
      setStatus({
        type: "error",
        message: "Mesazhi nuk u dergua. Provo perseri.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-surface-light text-surface-light-fg">
        <div
          className="mx-auto max-w-4xl px-6 py-16 md:px-12 md:py-24"
          style={{ fontFamily: '"Inter", sans-serif' }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-3xl font-bold uppercase tracking-[0.2em] md:text-5xl"
            style={{ fontFamily: '"ISOCT2", serif', fontWeight: 700 }}
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
            sherbimeve tona.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 gap-16 md:grid-cols-2"
          >
            <div className="space-y-10">
              <div>
                <h3
                  className="mb-6 text-sm uppercase tracking-[0.25em] text-surface-light-fg/40 md:text-base"
                  style={{ fontFamily: '"ISOCT2", serif', fontWeight: 700 }}
                >
                  Informata
                </h3>
                <div className="space-y-5 text-[15px] md:text-[17px]">
                  <div>
                    <span
                      className="mb-1 block text-sm uppercase tracking-wide text-surface-light-fg/40 md:text-base"
                      style={{ fontFamily: '"ISOCT2", serif', fontWeight: 700 }}
                    >
                      Email
                    </span>
                    <span className="text-surface-light-fg/75">info@themel-studio.com</span>
                  </div>
                  <div>
                    <span
                      className="mb-1 block text-sm uppercase tracking-wide text-surface-light-fg/40 md:text-base"
                      style={{ fontFamily: '"ISOCT2", serif', fontWeight: 700 }}
                    >
                      Telefoni
                    </span>
                    <span className="text-surface-light-fg/75">+383 45 213 244</span>
                  </div>
                  <div>
                    <span
                      className="mb-1 block text-sm uppercase tracking-wide text-surface-light-fg/40 md:text-base"
                      style={{ fontFamily: '"ISOCT2", serif', fontWeight: 700 }}
                    >
                      Vendndodhja
                    </span>
                    <span className="text-surface-light-fg/75">Rr. EGNATIA, nr. 32, Prishtinë, Kosovë</span>
                  </div>
                </div>
              </div>

              <div>
                <h3
                  className="mb-6 text-xs uppercase tracking-[0.25em] text-surface-light-fg/40"
                  style={{ fontFamily: '"ISOCT2", serif', fontWeight: 700 }}
                >
                  Harta
                </h3>
                <div className="overflow-hidden rounded-[28px] border border-surface-light-fg/10 bg-white/40">
                 <iframe
                    title="32 Egnatia, Prishtinë"
                    src="https://www.google.com/maps?hl=sq&gl=xk&q=32+Egnatia,+Prishtinë&z=17&output=embed"
                    className="h-[320px] w-full grayscale contrast-125 brightness-95"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  className="mb-2 block text-xs uppercase tracking-[0.15em] text-surface-light-fg/40"
                  style={{ fontFamily: '"ISOCT2", serif', fontWeight: 700 }}
                >
                  Emri
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border-b border-surface-light-fg/15 bg-transparent pb-2 text-sm text-surface-light-fg outline-none transition-colors focus:border-surface-light-fg/40"
                />
              </div>
              <div>
                <label
                  className="mb-2 block text-xs uppercase tracking-[0.15em] text-surface-light-fg/40"
                  style={{ fontFamily: '"ISOCT2", serif', fontWeight: 700 }}
                >
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border-b border-surface-light-fg/15 bg-transparent pb-2 text-sm text-surface-light-fg outline-none transition-colors focus:border-surface-light-fg/40"
                />
              </div>
              <div>
                <label
                  className="mb-2 block text-xs uppercase tracking-[0.15em] text-surface-light-fg/40"
                  style={{ fontFamily: '"ISOCT2", serif', fontWeight: 700 }}
                >
                  Mesazhi
                </label>
                <textarea
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none border-b border-surface-light-fg/15 bg-transparent pb-2 text-sm text-surface-light-fg outline-none transition-colors focus:border-surface-light-fg/40"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="border border-surface-light-fg/15 px-8 py-3 text-xs uppercase tracking-[0.25em] text-surface-light-fg/60 transition-all hover:border-surface-light-fg/40 hover:text-surface-light-fg"
                style={{ fontFamily: '"ISOCT2", serif', fontWeight: 700 }}
              >
                {isSubmitting ? "Duke derguar..." : "Dergo"}
              </button>
              {status ? (
                <p
                  className={`text-sm ${
                    status.type === "success"
                      ? "text-green-700"
                      : "text-red-700"
                  }`}
                >
                  {status.message}
                </p>
              ) : null}
            </form>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
