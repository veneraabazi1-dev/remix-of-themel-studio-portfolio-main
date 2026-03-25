import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import ProjectCircle from "@/components/ProjectCircle";
import { projects } from "@/data/projects";

const HomePage = () => {
  const location = useLocation();
  const projectsRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (location.hash === "#projektet" && projectsRef.current) {
      setTimeout(() => {
        projectsRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 250);
    }
  }, [location]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;

      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <Layout>
      <p>poltaaaaa</p>
      <div className="relative min-h-screen overflow-hidden bg-[#f8f8f4] text-[#DASDAS]">
        {/* Background circles */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute top-[6%] left-[4%] h-[180px] w-[180px] rounded-full border border-black/[0.05] transition-transform duration-500 ease-out"
            style={{ transform: `translate(${mousePos.x * 0.9}px, ${mousePos.y * 0.6}px)` }}
          />
          <div
            className="absolute top-[10%] left-[22%] h-[420px] w-[420px] rounded-full border border-black/[0.045] transition-transform duration-700 ease-out"
            style={{ transform: `translate(${mousePos.x * -0.7}px, ${mousePos.y * 0.8}px)` }}
          />
          <div
            className="absolute top-[2%] right-[8%] h-[260px] w-[260px] rounded-full border border-black/[0.05] transition-transform duration-700 ease-out"
            style={{ transform: `translate(${mousePos.x * 0.8}px, ${mousePos.y * -0.5}px)` }}
          />
          <div
            className="absolute top-[28%] right-[18%] h-[620px] w-[620px] rounded-full border border-black/[0.03] transition-transform duration-1000 ease-out"
            style={{ transform: `translate(${mousePos.x * 0.45}px, ${mousePos.y * -0.75}px)` }}
          />
          <div
            className="absolute bottom-[18%] left-[8%] h-[360px] w-[360px] rounded-full border border-black/[0.04] transition-transform duration-700 ease-out"
            style={{ transform: `translate(${mousePos.x * -0.6}px, ${mousePos.y * 0.8}px)` }}
          />
          <div
            className="absolute bottom-[4%] left-[-4%] h-[260px] w-[260px] rounded-full border border-black/[0.05] transition-transform duration-700 ease-out"
            style={{ transform: `translate(${mousePos.x * -0.8}px, ${mousePos.y * -0.4}px)` }}
          />
          <div
            className="absolute bottom-[8%] right-[6%] h-[220px] w-[220px] rounded-full border border-black/[0.06] transition-transform duration-500 ease-out"
            style={{ transform: `translate(${mousePos.x * 0.7}px, ${mousePos.y * 0.55}px)` }}
          />
        </div>

        {/* Hero */}
        <section className="relative z-10 flex min-h-[50vh] flex-col items-center justify-end px-6 pt-28 pb-8 text-center md:pt-36 md:pb-10">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <h1
              className="text-5xl font-semibold uppercase tracking-[0.28em] md:text-8xl"
              style={{ fontFamily: '"Cormorant Garamond", "Times New Roman", serif' }}
            >
              THEMEL
            </h1>

            <p className="mt-5 text-[11px] uppercase tracking-[0.38em] text-[#6a6a63] md:text-sm">
              Projektim <span className="text-[#b08d57]">·</span> Renovim{" "}
              <span className="text-[#b08d57]">·</span> Rindërtim
            </p>
          </motion.div>
        </section>

        {/* Projects */}
        <section
          id="projektet"
          ref={projectsRef}
          className="relative z-10 px-6 pb-20 pt-4 md:px-12 md:pb-28 md:pt-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10 text-center"
          >
            <h2 className="text-[11px] uppercase tracking-[0.34em] text-[#77776f] md:text-xs">
              Projektet
            </h2>
          </motion.div>

          <div className="mx-auto grid max-w-6xl grid-cols-2 place-items-center gap-y-10 gap-x-6 md:grid-cols-4 md:gap-y-6 md:gap-x-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.08 }}
              >
                <ProjectCircle
                  slug={project.slug}
                  title={project.title}
                  imageIndex={i}
                />
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;