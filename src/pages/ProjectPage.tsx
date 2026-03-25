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
  "/images/venus/1212.jpeg",
  "/images/venus/212.jpeg",
  "/images/venus/33.jpeg",
  "/images/venus/424242646ge 2026-02-19 at 23.07.52.jpeg",
  "/images/venus/46455552.jpeg",
  "/images/venus/764764.jpeg",
  "/images/venus/877.jpeg",
  "/images/venus/989898.jpeg",
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
              style={{ fontFamily: '"Times New Roman", serif' }}
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
                  <span className="text-surface-light-fg/40 tracking-wide uppercase text-xs">
                    {m.label}
                  </span>
                  <span className="text-surface-light-fg/80">{m.value}</span>
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
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {galleryImages.map((image, i) => (
                <button
                  key={i}
                  onClick={() => openLightbox(i)}
                  className="group relative flex justify-center"
                >
                  <div className="relative flex h-[190px] w-[190px] items-center justify-center md:h-[260px] md:w-[260px]">
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                      <div className="h-[92%] w-[92%] rounded-full border transition-all duration-700 ease-out group-hover:scale-[1.03]" style={{ borderColor: "rgba(128, 128, 128, 0.32)" }} />
                      <div className="absolute h-[108%] w-[108%] rounded-full border transition-all duration-700 ease-out group-hover:scale-[1.05]" style={{ borderColor: "rgba(128, 128, 128, 0.26)" }} />
                      <div className="absolute h-[124%] w-[124%] rounded-full border opacity-0 transition-all duration-700 ease-out group-hover:scale-[1.07] group-hover:opacity-100" style={{ borderColor: "rgba(128, 128, 128, 0.22)" }} />
                      <div className="absolute h-[140%] w-[140%] rounded-full border opacity-0 transition-all duration-700 ease-out group-hover:scale-[1.09] group-hover:opacity-100" style={{ borderColor: "rgba(128, 128, 128, 0.18)" }} />
                    </div>

                    <div className="relative h-[160px] w-[160px] overflow-hidden rounded-full bg-surface-light-fg/5 transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:bg-surface-light-fg/10 md:h-[220px] md:w-[220px]">
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
              { title: "Koncepti", text: project.concept },
              { title: "Qasja e Dizajnit", text: project.design },
              { title: "Materialet", text: project.materials },
            ].map((section) => (
              <div key={section.title}>
                <h3 className="text-xs tracking-[0.25em] uppercase text-surface-light-fg/40 mb-4">
                  {section.title}
                </h3>
                <p
                  className="text-justify text-[14px] leading-7 text-surface-light-fg/65 md:text-[15px]"
                  style={{ fontFamily: '"Times New Roman", serif' }}
                >
                  {section.text}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Plans */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xs tracking-[0.25em] uppercase text-surface-light-fg/40 mb-6">
              Planet / Planimetri
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {["Plan A", "Plan B"].map((label) => (
                <div
                  key={label}
                  className="aspect-[4/3] border border-surface-light-fg/8 flex items-center justify-center"
                >
                  <span className="text-surface-light-fg/20 text-xs tracking-[0.2em] uppercase">
                    {label}
                  </span>
                </div>
              ))}
            </div>
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
