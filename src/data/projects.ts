export interface Project {
  slug: string;
  title: string;
  location: string;
  year: string;
  status: string;
  area: string;
  program: string;
  description: string;
  concept: string;
  design: string;
  materials: string;
}

export const projects: Project[] = [
  {
    slug: "berthame-teknike",
    title: "TOKA",
    location: "Drenas, Kosove",
    year: "2024",
    status: "E realizuar",
    area: "280 m²",
    program: "Salle eventi / Hapesire multifunksionale",
    description:
      "Hapesire e madhe interieri e projektuar per aktivitete dhe mbledhje sociale, ku organizimi i hapur dhe ndricimi dekorativ krijojne nje ambient elegant dhe bashkekohor.",
    concept:
      "Koncepti i projektit bazohet ne krijimin e nje hapesire te hapur dhe te rrjedhshme, ku ndricimi dekorativ dhe ritmi i elementeve te tavanit krijojne identitetin vizual te ambientit. Elementet e drites behen pjese e kompozimit arkitektonik dhe theksojne thellesine e hapesires.",
    design:
      "Hapesira eshte organizuar ne menyre te lire dhe fleksibile per te mundesuar perdorime te ndryshme sociale. Organizimi i tavolinave, qarkullimi i lire dhe shkallet qendrore krijojne nje pervoje dinamike dhe te qarte per perdoruesit.",
    materials:
      "Materialet kryesore perfshijne: siperfaqe neutrale dhe te ndritshme, elemente dekorative te ndricimit ne tavan, perfundime te pastra dhe bashkekohore, si dhe sisteme ndricimi te integruara. Keto elemente krijojne nje ambient modern dhe elegant per aktivitete dhe evente.",
  },
  {
    slug: "fasade-urbane",
    title: "D HOUSE",
    location: "Skenderaj, Kosove",
    year: "2023",
    status: "Ne perfundim",
    area: "90 m²",
    program: "Rezidence banimi",
    description:
      "Projekt rezidencial i konceptuar mbi perdorimin e struktures se drurit si element kryesor arkitektonik. Arkitektura krijon nje lidhje te drejtperdrejte mes hapesires se brendshme dhe ambientit natyror perreth, duke formuar nje rezidence te qete dhe te ndricuar natyrshem.",
    concept:
      "Koncepti i projektit bazohet ne ekspozimin e struktures se drurit si element identitar te arkitektures. Elementet konstruktive behen pjese e kompozimit hapesinor dhe krijojne nje gjuhe te qarte dhe te paster arkitektonike.",
    design:
      "Organizimi i hapesires eshte kompakt dhe funksional, duke shfrytezuar ne menyre efikase cdo pjese te planimetrise. Hapjet e medha dhe orientimi i nderteses mundesojne depuertimin e drites natyrore dhe krijojne nje ambient te ngrohte dhe te rehatshem per banim.",
    materials:
      "Materialet kryesore perfshijne: strukture druri te ekspozuar, izolim termik bashkekohor, materiale natyrore per perfundimet e brendshme dhe elemente ndertimi te qendrueshme. Kombinimi i ketyre materialeve krijon nje arkitekture te balancuar mes natyres, struktures dhe funksionit.",
  },
  {
    slug: "strukture-druri",
    title: "E M",
    location: "Skenderaj, Kosove",
    year: "2024",
    status: "Ne realizim",
    area: "320 m²",
    program: "Apartament banimi",
    description:
      "Apartament rezidencial i projektuar me nje qasje minimaliste dhe nje palete te bute ngjyrash neutrale, duke krijuar nje ambient te qete dhe elegant per jetese bashkekohore.",
    concept:
      "Koncepti i projektit fokusohet ne krijimin e nje hapesire te qete dhe harmonike permes linjave te pastra, materialeve natyrore dhe ndricimit indirekt qe thekson arkitekturen e brendshme.",
    design:
      "Hapesira organizohet ne menyre te hapur dhe funksionale, duke lidhur zonen e qendrimit me ambientet e tjera te apartamentit. Mobilimi minimalist dhe elementet dekorative te balancuara krijojne nje atmosfere moderne dhe komode.",
    materials:
      "Materialet kryesore perfshijne: siperfaqe te bardha dhe tone neutrale gri, elemente druri natyral, tekstile te buta dhe komode, ndricim linear te integruar ne tavan. Kombinimi i ketyre materialeve krijon nje ambient elegant dhe te ngrohte per jetese.",
  },
  {
    slug: "venus-house",
    title: "FRAME HOUSE",
    location: "Kosove",
    year: "2024",
    status: "Ne zhvillim",
    area: "240 m²",
    program: "Rezidence banimi",
    description:
      "Projekt rezidencial ne faze realizimi, i konceptuar mbi qartesine e formes dhe struktures arkitektonike. Volumet e pastra dhe organizimi funksional krijojne bazen per nje rezidence bashkekohore te pershtatur per jetese familjare.",
    concept:
      "Koncepti i projektit fokusohet ne strukturen si element organizues te arkitektures. Korniza e nderteses dhe ritmi i hapjeve ne fasade krijojne identitetin vizual te objektit dhe theksojne raportin mes formes dhe funksionit.",
    design:
      "Organizimi i hapesires eshte menduar per funksionalitet dhe qartesi ne perdorim. Planimetria siguron lidhje te natyrshme mes hapesirave te brendshme dhe ambientit perreth, duke krijuar nje rezidence te balancuar dhe praktike per jetese.",
    materials:
      "Materialet kryesore perfshijne: sistem fasade me izolim termik, perfundime bashkekohore te jashtme, elemente ndertimi te qendrueshme dhe detaje te pastra arkitektonike. Keto elemente krijojne nje rezidence moderne me karakter te qarte dhe te qendrueshem.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
