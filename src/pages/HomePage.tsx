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
                fontFamily: '"Cormorant Garamond", "Times New Roman", serif',
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
          <div className="mx-auto grid max-w-7xl grid-cols-2 place-items-center gap-x-6 gap-y-10 md:grid-cols-4 md:gap-x-10 md:gap-y-6">
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
                  imageSrc={homeProjectImages[project.slug]}
                  grayscale
                />
              </motion.div>
            ))}
          </div>
        </section>

        <section className="relative z-10 px-6 pb-24 md:px-12 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mx-auto max-w-4xl border-t border-black/10 pt-12 text-center md:pt-16"
          >
            <h2
              className="text-2xl uppercase tracking-[0.18em] text-[#111111] md:text-4xl"
              style={{ fontFamily: '"Times New Roman", serif', fontWeight: 600 }}
            >
              Vizioni Arkitekturor
            </h2>

            <div
              className="mx-auto mt-8 max-w-3xl space-y-6 text-justify text-[15px] leading-8 text-[#2a2a2a] md:mt-10 md:text-[17px]"
              style={{ fontFamily: '"Times New Roman", serif' }}
            >
              <p>
                Ne THEMEL, cdo hapesire fillon si nje ide qe merr jete. Ne krijojme
                ambiente ku funksionaliteti dhe estetika harmonizohen ne cdo
                detaj, ku drita natyrale, materiali dhe proporcionet
                nderveprojne per te formuar pervoja arkitekturore te
                qendrueshme dhe te rafinuara.
              </p>

              <p>
                Qasja jone integron projektimin, analizen teknike dhe realizimin
                praktik ne nje proces te koordinuar, ku cdo faze eshte e
                menduar me kujdes dhe ne perputhje me standardet me te larta
                profesionale.
              </p>

              <p>
                Renovimi nuk eshte vetem permiresim estetik; eshte transformim i
                menyres se perjetimit te hapesires duke sjelle me shume drite,
                rrjedhshmeri dhe funksionalitet afatgjate.
              </p>

              <p>
                Pervoja jone e ndertuar nder vite lidh vizionin arkitekturor me
                realizimin praktik, duke krijuar hapesira qe frymezojne,
                qendrojne ne kohe dhe reflektojne ekuilibrin midis bukurise,
                funksionit dhe qendrueshmerise.
              </p>
            </div>
          </motion.div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
