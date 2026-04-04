import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import Lightbox from "@/components/Lightbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const timeline = [
  {
    year: "2005",
    title: "Studio THEMEL u themelua dhe filloi projektet e para arkitekturore.",
  },
  {
    year: "2012",
    title: "Filluan projektet e para rezidenciale dhe zhvillimi i identitetit te studios.",
  },
  {
    year: "2018",
    title: "Studio u zgjerua me projekte me te medha dhe bashkepunime te reja.",
  },
  {
    year: "2024",
    title: "Fokusi ne projektim bashkekohor dhe zhvillim urban.",
  },
];

const team = [
  { name: "Ilir Mecini", role: "Drejtues i projekteve", image: "/images/team/iliri.jpeg" },
  { name: "Blerta Abazi", role: "Arkitekte / Dizajnere interieri", image: "/images/team/blerta.jpeg" },
  { name: "Elvira Abazi", role: "Arkitekte / Dizajnere interieri", image: "/images/team/elvira.jpeg" },
  { name: "Lavdim Zabeli", role: "Inxhinier i statikes", image: "/images/team/lavdimi.jpeg" },
];

const values = [
  {
    title: "Cilesia",
    text: "Çdo detaj ka rëndësi. Ne angazhohemi të mos bëjmë asnjë kompromis me standardet më të larta të punës.",
  },
  {
    title: "Transparenca",
    text: "Komunikim i hapur dhe i qartë në çdo fazë të projektit, për të siguruar një proces bashkëpunimi të besueshëm dhe të strukturuar.",
  },
  {
    title: "Inovacioni",
    text: "Zgjidhje kreative dhe bashkëkohore për sfida të ndryshme ndërtimore dhe arkitekturore, duke sjellë vlera të qëndrueshme për hapësirat që realizojmë.",
  },
];

const services = [
  {
    title: "Projektim arkitekturor",
    desc: "Si pjese e angazhimit tone per cilesi dhe standarde te larta, hartojme projekte arkitekturore te plota, duke perfshire te gjitha fazat nga koncepti dhe skicat fillestare, deri te dokumentacioni teknik i gatshem per ndertim. Cdo projekt trajtohet individualisht, duke u pershtatur me kerkesat specifike dhe vizionin e klientit. Procesi yne perfshin analiza te detajuara te terrenit, studime te drites dhe funksionalitetit, si dhe optimizim te hapesirave, gjithmone ne perputhje me standardet me te larta te arkitektures bashkekohore.",
  },
  {
    title: "Dizajn te brendshem & hapesinor",
    desc: "Ne zhvillojme ambiente te brendshme qe kombinon funksionalitetin me estetiken e harmonizuar, duke i pershtatur hapesirat nevojave dhe stilit unik te perdoruesve. Cdo zgjedhje materiali, ngjyre dhe ndricimi behet me kujdes te vecante, per te garantuar pervoje te rehatshme dhe vizualisht terheqese. Per t'u siguruar qe koncepti perputhet me pritshmerite, ofrojme vizualizime 3D te detajuara perpara fazes se realizimit.",
  },
  {
    title: "Mbikeqyrje dhe koordinim",
    desc: "Ne ofrojme mbikeqyrje te specializuar dhe te vazhdueshme gjate gjithe fazes se ndertimit, per te garantuar cilesine maksimale te punimeve. Koordinojme ne menyre efikase te gjitha ekipet e perfshira ne projekt dhe sigurojme respektimin e afateve kohore, duke mundesuar nje proces te organizuar, te qendrueshem dhe te besueshem nga fillimi deri te perfundimi i projektit.",
  },
  {
    title: "Dokumentacion teknik",
    desc: "Pergatisim dokumentacion teknik te plote dhe te detajuar, te nevojshem per lejet e ndertimit dhe procedurat administrative. Dokumentacioni yne perfshin planet arkitekturore, prerjet, fasadat dhe te gjitha detajet konstruktive, ne perputhje me standardet me te larta profesionale dhe kerkesat ligjore.",
  },
  {
    title: "Knauf",
    desc: "Jemi te certifikuar nga Knauf Akademie - Iphofen, Gjermani, duke garantuar ekspertize dhe standarde te larta profesionale. Ofrimi yne perfshin zgjidhje te specializuara, perfshire mure dhe tavane akustike, sisteme mbrojtjeje kunder zjarrit, si dhe mure sigurie te avancuara dhe te blinduara.",
  },
];

const galleryImages = [
  "/images/galeri/GALERI/1111.jpeg",
  "/images/galeri/GALERI/3.jpeg",
  "/images/galeri/GALERI/W666666.jpeg",
  "/images/galeri/GALERI/Whats44444444444.jpeg",
  "/images/galeri/GALERI/WhatsApp Ima2222222222.jpeg",
  "/images/galeri/GALERI/WhatsApp Imag2222222222222222.jpeg",
  "/images/galeri/GALERI/WhatsApp Image 2026-03-06 .jpeg",
  "/images/galeri/GALERI/WhatsApp Image 2026-03-06 at 20.01.33.jpeg",
  "/images/galeri/GALERI/WhatsApp Image 2026-03-06 at 20.01.34.jpeg",
  "/images/galeri/GALERI/WhatsApp Image 2026-03-06 at 20.01.35.jpeg",
  "/images/galeri/GALERI/WhatsApp Image 2026-03-06 at 20.01.57.jpeg",
  "/images/galeri/GALERI/WhatsApp Image 2026-03-06 at 20.04.04.jpeg",
  "/images/galeri/GALERI/WhatsApp Image 2026-03-06 at 22222.jpeg",
  "/images/galeri/GALERI/WhatsApp Image 2026-03-06 at 222222222222.jpeg",
  "/images/galeri/GALERI/WhatsApp Image 2026-03-06 at 222222222222222222222.jpeg",
  "/images/galeri/GALERI/WhatsApp Image 2026-03-06 at 33333333.jpeg",
  "/images/galeri/GALERI/WhatsApp Image 2026-03-06 at 55555555.jpeg",
];

const AboutPage = () => {
  const location = useLocation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    if (location.hash === "#sherbimet") {
      setTimeout(() => {
        document.getElementById("sherbimet")?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, [location]);

  return (
    <Layout>
      <div className="min-h-screen bg-surface-light text-surface-light-fg">
        <div
          className="mx-auto max-w-6xl px-6 py-16 md:px-12 md:py-24"
          style={{ fontFamily: '"Inter", sans-serif' }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-3xl font-bold uppercase tracking-[0.2em] md:text-5xl"
            style={{ fontFamily: '"ISOCT2", serif', fontWeight: 700 }}
          >
            Rreth Nesh
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto my-24 rounded-[36px] bg-[#ECECEC] px-8 py-8 shadow-[0_18px_48px_rgba(0,0,0,0.09)] ring-1 ring-black/[0.05] transition-all duration-500 ease-out hover:-translate-y-[2px] hover:bg-[#E6E6E6] hover:shadow-[0_24px_64px_rgba(0,0,0,0.12)] md:px-10 md:py-10"
          >
            <h2
              className="mb-6 text-sm uppercase tracking-[0.22em] text-black md:text-[15px]"
              style={{ fontFamily: '"ISOCT2", serif', fontWeight: 700 }}
            >
              THEMEL - Projektim, Dizajn, Renovim dhe Rindertim
            </h2>
            <p className="mb-4 text-justify text-sm leading-relaxed text-surface-light-fg/65 md:text-base">
              THEMEL eshte nje studio e fokusuar ne projektim, dizajn, renovim dhe rindertim te
              hapesirave. E ndertuar mbi pervojen dhe praktikat profesionale te kompanise Mecini Bau ne
              Gjermani qe nga viti 2005, studio sjell ne Kosove nje qasje te strukturuar dhe profesionale
              ne zhvillimin dhe realizimin e projekteve ndertimore.
            </p>

            <p className="mb-4 text-justify text-sm leading-relaxed text-surface-light-fg/65 md:text-base">
              Procesi yne i punes perfshin te gjitha fazat e projektit nga konceptimi, projektimi dhe
              dizajni, deri te renovimi dhe realizimi i plote i punimeve, duke garantuar cilesi te
              larte, funksionalitet dhe standarde bashkekohore ndertimore.
            </p>

            <p className="text-justify text-sm leading-relaxed text-surface-light-fg/65 md:text-base">
              Ne bashkepunim te ngushte me klientet, synojme te krijojme hapesira te menduara me kujdes
              ne cdo detaj, te cilat i pergjigjen ne menyre te qendrueshme nevojave moderne te jeteses
              dhe te punes.
            </p>
          </motion.div>

          <section className="mb-24 grid gap-14 md:grid-cols-[1.05fr_0.95fr] md:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[36px] bg-[#ECECEC] px-8 py-8 shadow-[0_18px_48px_rgba(0,0,0,0.09)] ring-1 ring-black/[0.05] transition-all duration-500 ease-out hover:-translate-y-[2px] hover:bg-[#E6E6E6] hover:shadow-[0_24px_64px_rgba(0,0,0,0.12)] md:px-10 md:py-10"
            >
              <h2
                className="mb-6 text-sm uppercase tracking-[0.22em] text-black md:text-[15px]"
                style={{ fontFamily: '"ISOCT2", serif', fontWeight: 700 }}
              >
                Historiku
              </h2>
              <p className="mb-4 text-justify text-sm leading-relaxed text-surface-light-fg/65 md:text-base">
                Transformimi dhe permiresimi i hapesirave te ndertuara kerkon ekspertize profesionale,
                standarde te larta teknike dhe nje qasje te strukturuar ne cdo faze te projektit. Ne
                Kosove, nje pjese e konsiderueshme e objekteve u ndertuan ne periudhen pas luftes ne
                kushte zhvillimi te shpejte dhe shpesh pa planifikim te plote teknik. Sot, shume prej
                ketyre objekteve kerkojne nderhyrje profesionale ne renovim dhe rindertim per te
                permbushur standardet bashkekohore te cilesise, sigurise dhe funksionalitetit. Ne menyre
                te natyrshme, edhe objektet e ndertuara ne kushte te rregullta kerkojne rinovim pas nje
                periudhe prej rreth 20-25 vitesh, per t'u pershtatur me kerkesat moderne te ndertimit dhe
                perdorimit.
              </p>
              <p className="mb-4 text-justify text-sm leading-relaxed text-surface-light-fg/65 md:text-base">
                THEMEL mbeshtetet ne pervojen dhe traditen profesionale te kompanise Mecini Bau, e
                themeluar ne Gjermani ne vitin 2005. Kjo pervoje sjell ne Kosove nje qasje te
                disiplinuar dhe te bazuar ne standarde evropiane ne fushen e renovimit dhe ndertimit te
                thate. Me certifikim nga Knauf Akademie - Iphofen, ofrojme zgjidhje te avancuara teknike
                qe perfshijne sisteme te mureve dhe tavaneve akustike, sisteme te mbrojtjes kunder
                zjarrit, si dhe zgjidhje te tjera profesionale qe rrisin sigurine, funksionalitetin dhe
                cilesine e hapesirave.
              </p>
              <p className="text-justify text-sm leading-relaxed text-surface-light-fg/65 md:text-base">
                Angazhimi yne eshte te realizojme projekte me standarde te larta profesionale, duke
                ofruar nje proces te integruar qe perfshin analizen e nevojave, planifikimin,
                projektimin dhe realizimin e plote te punimeve. Permes ketij procesi, THEMEL synon te
                kontribuoje ne zhvillimin e hapesirave ndertimore me cilesore, funksionale dhe te
                qendrueshme.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              className="rounded-[36px] bg-[#ECECEC] px-8 py-8 shadow-[0_18px_48px_rgba(0,0,0,0.09)] ring-1 ring-black/[0.05] transition-all duration-500 ease-out hover:-translate-y-[2px] hover:bg-[#E6E6E6] hover:shadow-[0_24px_64px_rgba(0,0,0,0.12)] md:px-10 md:py-10"
            >
              <h2
                className="mb-8 text-sm uppercase tracking-[0.22em] text-black md:text-[15px]"
                style={{ fontFamily: '"ISOCT2", serif', fontWeight: 700 }}
              >
                Rrjedha nder vite
              </h2>

              <div className="relative pl-12">
                <div className="absolute bottom-4 left-[6px] top-2 w-px bg-black/16" />

                <div className="space-y-12">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      className="relative pl-10"
                    >
                      <span className="absolute left-[-30px] top-[10px] h-2.5 w-2.5 rounded-full bg-black/30" />
                      <span className="absolute left-[-20px] top-[15px] h-px w-12 bg-black/14" />

                      <div className="space-y-2">
                        <p
                          className="text-[18px] font-semibold tracking-[0.08em] text-black/80"
                          style={{ fontFamily: '"ISOCT2", serif', fontWeight: 700 }}
                        >
                          {item.year}
                        </p>
                        <h3
                          className="max-w-[320px] text-sm leading-7 text-surface-light-fg/65"
                          style={{ fontFamily: '"Inter", sans-serif' }}
                        >
                          {item.title}
                        </h3>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2
              className="mb-10 text-sm uppercase tracking-[0.22em] text-black md:text-[15px]"
              style={{ fontFamily: '"ISOCT2", serif', fontWeight: 700 }}
            >
              Ekipi Yne
            </h2>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="rounded-[32px] bg-[#ECECEC] px-5 py-7 text-center shadow-[0_18px_48px_rgba(0,0,0,0.09)] ring-1 ring-black/[0.05] transition-all duration-500 ease-out hover:-translate-y-[3px] hover:bg-[#E6E6E6] hover:shadow-[0_24px_64px_rgba(0,0,0,0.14)] md:px-6"
                >
                  <div className="mx-auto mb-5 h-28 w-28 overflow-hidden rounded-full border border-surface-light-fg/8 bg-surface-light-fg/5 md:h-36 md:w-36">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h4
                    className="mb-2 text-[14px] tracking-[0.04em] text-surface-light-fg md:text-[16px]"
                    style={{ fontFamily: '"ISOCT2", serif', fontWeight: 600 }}
                  >
                    {member.name}
                  </h4>
                  <p className="mx-auto max-w-[180px] text-center text-[12px] leading-5 text-surface-light-fg/45 md:text-[13px]">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2
              className="mb-10 text-sm uppercase tracking-[0.22em] text-black md:text-[15px]"
              style={{ fontFamily: '"ISOCT2", serif', fontWeight: 700 }}
            >
              Vlerat Tona
            </h2>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-[32px] bg-[#ECECEC] px-8 py-8 shadow-[0_18px_48px_rgba(0,0,0,0.09)] ring-1 ring-black/[0.05] transition-all duration-500 ease-out hover:-translate-y-[3px] hover:bg-[#E6E6E6] hover:shadow-[0_24px_64px_rgba(0,0,0,0.14)]"
                >
                  <h4
                    className="mb-3 text-sm font-medium uppercase tracking-[0.15em]"
                    style={{ fontFamily: '"ISOCT2", serif', fontWeight: 700 }}
                  >
                    {value.title}
                  </h4>
                  <p className="text-justify text-sm leading-relaxed text-surface-light-fg/55">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <div id="sherbimet" className="mb-12">
            <h2
              className="mb-10 text-sm uppercase tracking-[0.22em] text-black md:text-[15px]"
              style={{ fontFamily: '"ISOCT2", serif', fontWeight: 700 }}
            >
              Sherbimet
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {services.map((service, index) => (
                <AccordionItem
                  key={service.title}
                  value={`service-${index}`}
                  className="border-surface-light-fg/8"
                >
                  <AccordionTrigger
                    className="py-5 text-sm font-medium uppercase tracking-[0.1em] text-surface-light-fg/70 transition-colors hover:text-surface-light-fg hover:no-underline"
                    style={{ fontFamily: '"ISOCT2", serif', fontWeight: 700 }}
                  >
                    {service.title}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-justify text-[15px] leading-8 text-surface-light-fg/55 md:text-[17px]">
                    {service.desc}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2
              className="mb-10 text-sm uppercase tracking-[0.22em] text-black md:text-[15px]"
              style={{ fontFamily: '"ISOCT2", serif', fontWeight: 700 }}
            >
              Galeria
            </h2>
            <div className="grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-6">
              {galleryImages.map((image, index) => (
                <button
                  type="button"
                  key={image}
                  className="group relative flex justify-center"
                  onClick={() => {
                    setLightboxIndex(index);
                    setLightboxOpen(true);
                  }}
                  aria-label={`Hap foton ${index + 1} te galerise`}
                >
                  <div className="relative flex aspect-square w-full max-w-[190px] items-center justify-center md:h-[260px] md:w-[260px] md:max-w-none">
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                      <div
                        className="absolute h-[86%] w-[86%] rounded-full border transition-all duration-700 ease-out group-hover:scale-[1.01]"
                        style={{ borderColor: "rgba(17, 17, 17, 0.18)" }}
                      />
                      <div
                        className="h-[96%] w-[96%] rounded-full border transition-all duration-700 ease-out group-hover:scale-[1.02]"
                        style={{ borderColor: "rgba(17, 17, 17, 0.26)" }}
                      />
                      <div
                        className="absolute h-[106%] w-[106%] rounded-full border transition-all duration-700 ease-out group-hover:scale-[1.035]"
                        style={{ borderColor: "rgba(17, 17, 17, 0.2)" }}
                      />
                      <div
                        className="absolute h-[116%] w-[116%] rounded-full border opacity-70 transition-all duration-700 ease-out group-hover:scale-[1.05] group-hover:opacity-100"
                        style={{ borderColor: "rgba(17, 17, 17, 0.16)" }}
                      />
                      <div
                        className="absolute h-[126%] w-[126%] rounded-full border opacity-0 transition-all duration-700 ease-out group-hover:scale-[1.065] group-hover:opacity-100"
                        style={{ borderColor: "rgba(17, 17, 17, 0.12)" }}
                      />
                      <div
                        className="absolute h-[136%] w-[136%] rounded-full border opacity-0 transition-all duration-700 ease-out group-hover:scale-[1.08] group-hover:opacity-100"
                        style={{ borderColor: "rgba(17, 17, 17, 0.1)" }}
                      />
                    </div>

                    <div className="relative aspect-square w-[84%] overflow-hidden rounded-full bg-surface-light-fg/5 transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:bg-surface-light-fg/10 md:h-[220px] md:w-[220px] md:aspect-auto">
                      <img
                        src={image}
                        alt={`Galeria THEMEL ${index + 1}`}
                        className="absolute inset-0 h-full w-full object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <Lightbox
        images={galleryImages}
        currentIndex={lightboxIndex}
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() =>
          setLightboxIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0))
        }
        onPrev={() =>
          setLightboxIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1))
        }
      />
    </Layout>
  );
};

export default AboutPage;
