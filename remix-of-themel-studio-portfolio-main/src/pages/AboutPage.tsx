import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import CustomCursor from "@/components/CustomCursor";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const timeline = [
  { year: "2005", text: "Fillimi profesional në Gjermani" },
  { year: "2012", text: "Zgjerim dhe specializim teknik" },
  { year: "2020", text: "Metodologji e konsoliduar" },
  { year: "Sot", text: "Proces i integruar" },
];

const team = [
  { name: "Ilir Mecini", role: "Drejtues i projekteve", initials: "IM" },
  { name: "Blerta Abazi", role: "Arkitekte / Dizajnere e interierit", initials: "BA" },
  { name: "Elvira Abazi", role: "Arkitekte / Dizajnere e interierit", initials: "EA" },
  { name: "Lavdim Zabeli", role: "Inxhinier i statikës", initials: "LZ" },
];

const values = [
  {
    title: "Cilësia",
    text: "Çdo detaj ka rëndësi. Ne nuk bëjmë kompromise me standardet e punës.",
  },
  {
    title: "Transparenca",
    text: "Komunikim i hapur dhe i qartë në çdo fazë të projektit.",
  },
  {
    title: "Inovacioni",
    text: "Zgjidhje kreative dhe bashkëkohore për sfida të ndryshme arkitekturore.",
  },
];

const services = [
  {
    title: "Projektim arkitekturor",
    desc: "Projektim i plotë arkitektonik për objekte të reja dhe rinovime, duke përfshirë skicat konceptuale, projektet ekzekutive dhe dokumentacionin për leje ndërtimi.",
  },
  {
    title: "Interier & dizajn hapësinor",
    desc: "Dizajn i brendshëm funksional dhe estetik, nga organizimi hapësinor deri te përzgjedhja e materialeve dhe ndriçimit.",
  },
  {
    title: "Mbikëqyrje / koordinim",
    desc: "Mbikëqyrje profesionale e punimeve në kantier, koordinim i ekipeve dhe sigurimi i cilësisë sipas standardeve të projektit.",
  },
  {
    title: "Dokumentacion teknik",
    desc: "Përgatitje e dokumentacionit teknik të plotë, përfshirë detajet konstruktive, specifikimet teknike dhe preventivin e punimeve.",
  },
  {
    title: "Knauf",
    desc: "Zgjidhje të specializuara Knauf për mure, tavane, izolim akustik dhe termik, mbrojtje kundër zjarrit — të certifikuar nga Knauf Akademie, Iphofen.",
  },
];

const AboutPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#sherbimet") {
      setTimeout(() => {
        document
          .getElementById("sherbimet")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, [location]);

  return (
    <Layout>
      <CustomCursor />
      <div className="bg-surface-light text-surface-light-fg min-h-screen">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-24">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold tracking-[0.2em] uppercase mb-16"
          >
            Rreth Nesh
          </motion.h1>

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-20 max-w-3xl"
          >
            <h2 className="text-xs tracking-[0.25em] uppercase text-surface-light-fg/40 mb-6">
              THEMEL – Renovim, Rindërtim dhe Projektim
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-surface-light-fg/65 mb-4">
              THEMEL është një studio e fokusuar në renovim dhe rindërtim, me përvojë të ndërtuar mbi praktikat profesionale të Mecini Bau në Gjermani që nga viti 2005. Sot operojmë edhe në Kosovë, duke ofruar një proces të qartë dhe të organizuar — nga projektimi deri te realizimi i plotë i punimeve.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-surface-light-fg/65">
              Punojmë në bashkëpunim të ngushtë me klientët për të krijuar hapësira funksionale, të menduara në detaj dhe të përshtatura me nevojat reale të jetesës dhe punës.
            </p>
          </motion.div>

          {/* History */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 max-w-3xl"
          >
            <h2 className="text-xs tracking-[0.25em] uppercase text-surface-light-fg/40 mb-6">
              Historiku
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-surface-light-fg/65 mb-4">
              Pas luftës në Kosovë, shumë objekte u ndërtuan shpejt dhe pa planifikim të plotë, duke krijuar sot nevojë për rinovim profesional. Edhe në kushte normale, çdo objekt pas 20–25 viteve kërkon ndërhyrje për të rikthyer cilësinë dhe funksionalitetin.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-surface-light-fg/65 mb-4">
              THEMEL bazohet në përvojën e Mecini Bau, e themeluar në Gjermani në vitin 2005, dhe sjell në Kosovë një qasje të strukturuar në renovim dhe ndërtim të thatë. Të certifikuar nga Knauf Akademie – Iphofen, ofrojmë zgjidhje si mure dhe tavane akustike, mbrojtje kundër zjarrit dhe sisteme sigurie.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-surface-light-fg/65">
              Synimi ynë është të krijojmë hapësira me më shumë dritë, funksionalitet dhe jetë — nga ideja deri te realizimi i plotë i projektit.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="mb-20">
            <h2 className="text-xs tracking-[0.25em] uppercase text-surface-light-fg/40 mb-10">
              Rrugëtimi
            </h2>
            <div className="space-y-0">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-baseline gap-8 py-5 border-b border-surface-light-fg/8"
                >
                  <span className="text-lg md:text-xl font-light tracking-[0.15em] text-surface-light-fg/30 w-16 shrink-0">
                    {item.year}
                  </span>
                  <span className="text-sm text-surface-light-fg/65">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Team */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-xs tracking-[0.25em] uppercase text-surface-light-fg/40 mb-10">
              Ekipi Ynë
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-surface-light-fg/5 border border-surface-light-fg/8 flex items-center justify-center mx-auto mb-4">
                    <span className="text-surface-light-fg/30 text-sm tracking-[0.15em] font-light">
                      {member.initials}
                    </span>
                  </div>
                  <h4 className="text-sm font-medium tracking-wide mb-1">
                    {member.name}
                  </h4>
                  <p className="text-xs text-surface-light-fg/40 tracking-wide">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-xs tracking-[0.25em] uppercase text-surface-light-fg/40 mb-10">
              Vlerat Tona
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {values.map((v) => (
                <div key={v.title}>
                  <h4 className="text-sm font-medium tracking-[0.15em] uppercase mb-3">
                    {v.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-surface-light-fg/55">
                    {v.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Services Accordion */}
          <div id="sherbimet" className="mb-12">
            <h2 className="text-xs tracking-[0.25em] uppercase text-surface-light-fg/40 mb-10">
              Shërbimet
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {services.map((service, i) => (
                <AccordionItem
                  key={i}
                  value={`service-${i}`}
                  className="border-surface-light-fg/8"
                >
                  <AccordionTrigger className="text-sm tracking-[0.1em] uppercase font-medium hover:no-underline text-surface-light-fg/70 hover:text-surface-light-fg transition-colors py-5">
                    {service.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-surface-light-fg/55 pb-6">
                    {service.desc}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
