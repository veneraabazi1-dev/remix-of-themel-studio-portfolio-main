import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import Lightbox from "@/components/Lightbox";
import { getProjectBySlug } from "@/data/projects";

const imageSet = Array.from({ length: 10 }, (_, index) => `/images/enveri_foto/${index + 1}.jpg`);
const donaImageSet = Array.from({ length: 10 }, (_, index) => `/images/dona_foto/${index + 1}.jpg`);
const tokaImageSet = [
  "/images/toka/-19 at 2.jpeg",
  "/images/toka/2424246-02-19 at 23.07.52.jpeg",
  "/images/toka/age 202.jpeg",
  "/images/toka/App Im.jpeg",
  "/images/toka/App Image 2026-02-19 at .jpeg",
  "/images/toka/foto1.jpeg",
  "/images/toka/olo2026-02-19 at 23.07.54.jpeg",
  "/images/toka/Whasss.jpeg",
  "/images/toka/Whats.jpeg",
  "/images/toka/WhatsA.jpeg",
  "/images/toka/WhatsApp Ima.jpeg",
  "/images/toka/WhatsApp Imag.jpeg",
  "/images/toka/WhatsApp Image 2026-02-19 at 23.0.jpeg",
];
const venusImageSet = [
  "/images/ig-apartment/PROJEKTI/1.jpeg",
  "/images/ig-apartment/PROJEKTI/2.jpeg",
  "/images/ig-apartment/PROJEKTI/3.jpeg",
  "/images/ig-apartment/PROJEKTI/4.jpeg",
  "/images/ig-apartment/PROJEKTI/5.jpeg",
];

const galleryBySlug: Record<string, string[]> = {
  "strukture-druri": imageSet,
  "fasade-urbane": donaImageSet,
  "berthame-teknike": tokaImageSet,
  "venus-house": venusImageSet,
};

const ProjectPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug || "");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!project) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center">
          <h1 className="text-2xl tracking-[0.2em] uppercase text-foreground mb-6">
            Projekti nuk u gjet
          </h1>
          <Link
            to="/"
            className="text-muted-foreground text-sm tracking-wide hover:text-foreground transition-colors"
          >
            ← Kthehu në kryefaqje
          </Link>
        </div>
      </Layout>
    );
  }

  const galleryImages = (galleryBySlug[project.slug] || imageSet).map((src, index) => ({
    label: `Pamje ${index + 1}`,
    src,
  }));

  const metadata = [
    { label: "Lokacioni", value: project.location },
    { label: "Viti", value: project.year },
    { label: "Statusi", value: project.status },
    { label: "Sipërfaqja", value: project.area },
    { label: "Programi", value: project.program },
  ];

  const openLightbox = (i: number) => {
    setLightboxIndex(i);
    setLightboxOpen(true);
  };

  return (
    <Layout>
      <div className="bg-surface-light text-surface-light-fg min-h-screen">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-24">
          {/* Back */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Link
              to="/#projektet"
              className="text-surface-light-fg/50 text-xs tracking-[0.2em] uppercase hover:text-surface-light-fg transition-colors"
            >
              ← Projektet
            </Link>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold tracking-[0.2em] uppercase mt-8 mb-12"
          >
            {project.title}
          </motion.h1>

          {/* Intro 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20"
          >
            <p
              className="text-justify text-[15px] leading-8 text-surface-light-fg/70 md:text-[17px]"
              style={{ fontFamily: '"Inter", sans-serif' }}
            >
              {project.description}
            </p>
            <div>
              {metadata.map((m, i) => (
                <div
                  key={m.label}
                  className={`flex justify-between py-3 text-sm ${
                    i < metadata.length - 1
                      ? "border-b border-surface-light-fg/10"
                      : ""
                  }`}
                >
                  <span
                    className="text-surface-light-fg/40 tracking-wide uppercase text-xs"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                  >
                    {m.label}
                  </span>
                  <span
                    className="text-surface-light-fg/80"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                  >
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
              {galleryImages.map((image, i) => (
                <button
                  key={i}
                  onClick={() => openLightbox(i)}
                  className="group relative flex justify-center"
                >
                  <div className="relative flex aspect-square w-full max-w-[190px] items-center justify-center md:h-[260px] md:w-[260px] md:max-w-none">
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                      <div className="h-[96%] w-[96%] rounded-full border transition-all duration-700 ease-out group-hover:scale-[1.02]" style={{ borderColor: "rgba(128, 128, 128, 0.32)" }} />
                      <div className="absolute h-[106%] w-[106%] rounded-full border transition-all duration-700 ease-out group-hover:scale-[1.035]" style={{ borderColor: "rgba(128, 128, 128, 0.26)" }} />
                      <div className="absolute h-[116%] w-[116%] rounded-full border opacity-0 transition-all duration-700 ease-out group-hover:scale-[1.05] group-hover:opacity-100" style={{ borderColor: "rgba(128, 128, 128, 0.22)" }} />
                      <div className="absolute h-[126%] w-[126%] rounded-full border opacity-0 transition-all duration-700 ease-out group-hover:scale-[1.065] group-hover:opacity-100" style={{ borderColor: "rgba(128, 128, 128, 0.18)" }} />
                    </div>

                    <div className="relative aspect-square w-[84%] overflow-hidden rounded-full bg-surface-light-fg/5 transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:bg-surface-light-fg/10 md:h-[220px] md:w-[220px] md:aspect-auto">
                      <img
                        src={image.src}
                        alt={image.label}
                        className="absolute inset-0 h-full w-full object-cover grayscale"
                      />
                      <div className="absolute inset-0 bg-black/10 transition-colors duration-700 group-hover:bg-black/0" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Concept, Design, Materials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20"
          >
            {[
              {
                title: "Koncepti",
                text: "Koncepti i projektit fokusohet në krijimin e një hapësire të qetë dhe harmonike përmes linjave të pastra, materialeve natyrore dhe ndriçimit indirekt që thekson arkitekturën e brendshme, duke krijuar një ambient të balancuar dhe funksional.",
              },
              { title: "Qasja e Dizajnit", text: project.design },
              { title: "Materialet", text: project.materials },
            ].map((section) => (
              <div
                key={section.title}
                className="flex h-full rounded-t-[24px] bg-[#ECECEC] px-12 py-7 text-left shadow-[0_18px_48px_rgba(0,0,0,0.09)] ring-1 ring-black/[0.05] transition-all duration-500 ease-out hover:-translate-y-[3px] hover:bg-[#E6E6E6] hover:shadow-[0_24px_64px_rgba(0,0,0,0.14)] md:px-12 md:py-8"
              >
                <div>
                  <h3
                    className="mb-4 text-center text-xs font-bold uppercase tracking-[0.25em] text-surface-light-fg/40"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                  >
                    {section.title}
                  </h3>
                  <p
                    className="text-justify text-[15px] font-medium leading-[1.95] tracking-[0.01em] text-[#111111] [hyphens:auto] [text-justify:inter-word] [-webkit-hyphens:auto]"
                    style={{ fontFamily: '"Inter", sans-serif' }}
                  >
                    {section.text}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      <Lightbox
        images={galleryImages.map((image) => image.src)}
        currentIndex={lightboxIndex}
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() =>
          setLightboxIndex((prev) =>
            prev < galleryImages.length - 1 ? prev + 1 : 0
          )
        }
        onPrev={() =>
          setLightboxIndex((prev) =>
            prev > 0 ? prev - 1 : galleryImages.length - 1
          )
        }
      />
    </Layout>
  );
};

export default ProjectPage;
