import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import ProjectCircle from "@/components/ProjectCircle";
import { projects } from "@/data/projects";

const homeProjectImages: Record<string, string> = {
  "strukture-druri": "/images/enveri_foto_1.jpg",
  "fasade-urbane": "/images/dona_foto/1.jpg",
  "berthame-teknike": "/images/toka/foto1.jpeg",
  "venus-house": "/images/venus/989898.jpeg",
};

const HomePage = () => {
  const location = useLocation();
  const projectsRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroSubtitleRef = useRef<HTMLParagraphElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [titleIntensity, setTitleIntensity] = useState(0);
  const [subtitleIntensity, setSubtitleIntensity] = useState(0);

  useEffect(() => {
    if (location.hash === "#projektet" && projectsRef.current) {
      setTimeout(() => {
        projectsRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 250);
    }
  }, [location]);

  useEffect(() => {
    const getIntensity = (
      element: HTMLElement | null,
      cursorX: number,
      cursorY: number,
      radius: number,
    ) => {
      if (!element) return 0;

      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distance = Math.hypot(cursorX - centerX, cursorY - centerY);

      return Math.max(0, 1 - distance / radius);
    };

    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;

      setMousePos({ x, y });
      setTitleIntensity(getIntensity(heroTitleRef.current, e.clientX, e.clientY, 320));
      setSubtitleIntensity(getIntensity(heroSubtitleRef.current, e.clientX, e.clientY, 260));
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <Layout>
      <div className="relative min-h-screen overflow-hidden bg-[#F4F4F4] text-[#111111]">
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

        <section className="relative z-10 flex min-h-[46vh] flex-col items-center justify-end px-6 pt-20 pb-6 text-center md:pt-28 md:pb-8">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <h1
              ref={heroTitleRef}
              data-cursor-text
              className="text-4xl font-semibold uppercase tracking-[0.28em] md:text-7xl"
              style={{
                fontFamily: '"ISOCT2", serif',
                color: "#000000",
                transform: `scale(${1 + titleIntensity * 0.12})`,
                transition: "transform 0.14s ease-out",
              }}
            >
              THEMEL
            </h1>

            <p
              ref={heroSubtitleRef}
              data-cursor-text
              className="mt-5 text-[11px] uppercase tracking-[0.38em] md:text-sm"
              style={{
                color: `rgba(44, 44, 44, ${0.56 + subtitleIntensity * 0.44})`,
                transform: `scale(${1 + subtitleIntensity * 0.08})`,
                transition: "transform 0.14s ease-out, color 0.14s ease-out",
              }}
            >
              Projektim <span className="text-[#8f6b36]">/</span> Renovim{" "}
              <span className="text-[#8f6b36]">/</span> Rindertim
            </p>
          </motion.div>
        </section>

        <section
          id="projektet"
          ref={projectsRef}
          className="relative z-10 px-6 pb-28 pt-8 md:px-12 md:pb-36 md:pt-10"
        >
          <div className="mx-auto grid max-w-7xl grid-cols-2 place-items-center gap-x-10 gap-y-14 md:grid-cols-4 md:gap-x-14 md:gap-y-10">
            {projects.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.08 }}
                className="group relative flex justify-center"
              >
                <ProjectCircle
                  slug={project.slug}
                  title={project.title}
                  imageIndex={i}
                  imageSrc={homeProjectImages[project.slug]}
                  grayscale
                />
              </motion.div>
            ))}
          </div>
        </section>

        <section className="relative z-10 px-6 pb-24 md:px-12 md:pb-32">
          <div className="pointer-events-none absolute inset-x-0 top-8 mx-auto h-[540px] max-w-6xl overflow-hidden">
            <div className="absolute left-[8%] top-8 h-[240px] w-[240px] rounded-full border border-black/[0.035]" />
            <div className="absolute right-[12%] top-24 h-[320px] w-[320px] rounded-full border border-black/[0.03]" />
            <div className="absolute left-1/2 top-2 h-[420px] w-[420px] -translate-x-1/2 rounded-full border border-black/[0.02]" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mx-auto max-w-5xl border-t border-black/8 pt-14 text-center md:pt-20 xl:max-w-[82rem]"
          >
            <h2
              className="text-[28px] uppercase tracking-[0.12em] text-[#111111] md:text-[42px]"
              style={{ fontFamily: '"ISOCT2", serif', fontWeight: 600 }}
            >
              Vizioni Arkitekturor
            </h2>

            <div
              className="mx-auto mt-10 flex max-w-5xl flex-col gap-5 text-left md:gap-6 xl:max-w-[82rem]"
              style={{ fontFamily: '"ISOCT2", serif' }}
            >
              <div className="flex flex-col gap-5 md:flex-row md:gap-6">
                <p
                  className="flex h-full w-full rounded-t-[60px] bg-[#ECECEC] px-12 py-7 text-justify text-[15px] font-medium leading-[1.95] tracking-[0.01em] text-[#111111] [hyphens:auto] [text-justify:inter-word] [-webkit-hyphens:auto] shadow-[0_18px_48px_rgba(0,0,0,0.09)] ring-1 ring-black/[0.05] transition-all duration-500 ease-out hover:-translate-y-[3px] hover:bg-[#E6E6E6] hover:shadow-[0_24px_64px_rgba(0,0,0,0.14)] md:h-[180px] md:w-[50%] md:py-8"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  Në THEMEL, çdo hapësirë fillon si një ide që merr jetë. Ne
                  krijojmë ambiente ku funksionaliteti dhe estetika harmonizohen
                  në çdo detaj, ku drita natyrale, materiali dhe proporcionet
                  ndërveprojnë për të formuar përvoja arkitekturore të
                  qëndrueshme dhe të rafinuara.
                </p>

                <p
                  className="flex h-full w-full rounded-t-[60px] bg-[#ECECEC] px-12 py-7 text-justify text-[15px] font-medium leading-[1.95] tracking-[0.01em] text-[#111111] [hyphens:auto] [text-justify:inter-word] [-webkit-hyphens:auto] shadow-[0_18px_48px_rgba(0,0,0,0.09)] ring-1 ring-black/[0.05] transition-all duration-500 ease-out hover:-translate-y-[3px] hover:bg-[#E6E6E6] hover:shadow-[0_24px_64px_rgba(0,0,0,0.14)] md:h-[180px] md:w-[50%] md:py-8"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  Qasja jonë integron projektimin, analizën teknike dhe realizimin praktik në një proces të koordinuar, 
                  ku çdo fazë trajtohet me kujdes dhe sipas standardeve më të larta profesionale.
                </p>
              </div>

              <div className="flex flex-col gap-5 md:flex-row md:gap-6">
                <p
                  className="flex h-full w-full rounded-b-[60px] bg-[#ECECEC] px-12 py-7 text-justify text-[15px] font-medium leading-[1.95] tracking-[0.01em] text-[#111111] [hyphens:auto] [text-justify:inter-word] [-webkit-hyphens:auto] shadow-[0_18px_48px_rgba(0,0,0,0.09)] ring-1 ring-black/[0.05] transition-all duration-500 ease-out hover:-translate-y-[3px] hover:bg-[#E6E6E6] hover:shadow-[0_24px_64px_rgba(0,0,0,0.14)] md:h-[180px] md:w-[50%] md:py-8"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  Renovimi nuk është vetëm përmirësim estetik; është transformim i
                  mënyrës së përjetimit të hapësirës duke sjellë më shumë dritë,
                  rrjedhshmëri dhe funksionalitet afatgjatë.
                </p>

                <p
                  className="flex h-full w-full rounded-b-[60px] bg-[#ECECEC] px-12 py-7 text-justify text-[15px] font-medium leading-[1.95] tracking-[0.01em] text-[#111111] [hyphens:auto] [text-justify:inter-word] [-webkit-hyphens:auto] shadow-[0_18px_48px_rgba(0,0,0,0.09)] ring-1 ring-black/[0.05] transition-all duration-500 ease-out hover:-translate-y-[3px] hover:bg-[#E6E6E6] hover:shadow-[0_24px_64px_rgba(0,0,0,0.14)] md:h-[180px] md:w-[50%] md:py-8"
                  style={{ fontFamily: '"Inter", sans-serif' }}
                >
                  Përvoja jonë e ndërtuar ndër vite lidh vizionin arkitekturor me
                  realizimin praktik, duke krijuar hapësira që frymëzojnë,
                  qëndrojnë në kohë dhe reflektojnë ekuilibrin midis bukurisë,
                  funksionit dhe qëndrueshmërisë.
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
