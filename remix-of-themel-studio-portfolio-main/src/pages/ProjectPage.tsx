import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import CustomCursor from "@/components/CustomCursor";
import Lightbox from "@/components/Lightbox";
import { getProjectBySlug } from "@/data/projects";

const galleryPlaceholders = ["Pamje 1", "Pamje 2", "Pamje 3", "Pamje 4", "Pamje 5", "Pamje 6"];

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
      <CustomCursor />

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
            <p className="text-sm md:text-base leading-relaxed text-surface-light-fg/70">
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
              {galleryPlaceholders.map((label, i) => (
                <button
                  key={i}
                  onClick={() => openLightbox(i)}
                  className="group relative"
                >
                  <div className="w-full aspect-square rounded-full overflow-hidden flex items-center justify-center bg-surface-light-fg/5 transition-all duration-500 group-hover:bg-surface-light-fg/10">
                    {/* Expanding rings on hover */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-[90%] h-[90%] rounded-full border border-surface-light-fg/5 transition-all duration-700 group-hover:w-[105%] group-hover:h-[105%] group-hover:border-surface-light-fg/10" />
                      <div className="absolute w-[80%] h-[80%] rounded-full border border-surface-light-fg/5 transition-all duration-500 group-hover:border-surface-light-fg/8" />
                    </div>
                    <span className="text-surface-light-fg/30 text-[10px] tracking-[0.2em] uppercase">
                      {label}
                    </span>
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
                <p className="text-sm leading-relaxed text-surface-light-fg/65">
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
        images={galleryPlaceholders}
        currentIndex={lightboxIndex}
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() =>
          setLightboxIndex((prev) =>
            prev < galleryPlaceholders.length - 1 ? prev + 1 : 0
          )
        }
        onPrev={() =>
          setLightboxIndex((prev) =>
            prev > 0 ? prev - 1 : galleryPlaceholders.length - 1
          )
        }
      />
    </Layout>
  );
};

export default ProjectPage;
