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
    slug: "strukture-druri",
    title: "STRUKTURA E BRENDSHME",
    location: "Skenderaj, Kosovë",
    year: "2024",
    status: "Në realizim",
    area: "320 m²",
    program: "Hapësirë funksionale",
    description:
      "Hapësirë e brendshme në fazë realizimi me sistem konstruktiv të lehtë dhe organizim të hapur, duke krijuar bazën për një ambient funksional dhe fleksibil.",
    concept:
      "Koncepti fokusohet në thjeshtësinë konstruktive dhe lexueshmërinë e strukturës si element estetik i hapësirës.",
    design:
      "Organizim linear i interierit me ndarje të lehta dhe integrim të ndriçimit natyral për një ambient të qartë dhe praktik.",
    materials:
      "Strukturë e lehtë druri, izolim termik bashkëkohor dhe sisteme ndërtimi të thata për realizim efikas dhe fleksibil.",
  },
  {
    slug: "fasade-urbane",
    title: "KORNIZA E DRURIT",
    location: "Prishtinë, Kosovë",
    year: "2023",
    status: "Në përfundim",
    area: "450 m²",
    program: "Rezidencë",
    description:
      "Projekt rezidencial me strukturë druri, i konceptuar si hapësirë e hapur në dialog me natyrën përreth. Ndërtimi thekson fazën konstruktive dhe qartësinë e elementeve mbajtëse.",
    concept:
      "Koncepti bazohet në ekspozimin e strukturës si element arkitektonik kryesor, duke krijuar një raport të drejtpërdrejtë mes konstruksionit dhe hapësirës.",
    design:
      "Planimetri e hapur me organizim fleksibil dhe integrim të dritës natyrore përmes ritmit të elementeve vertikale.",
    materials:
      "Strukturë druri, izolim termik bashkëkohor dhe materiale natyrore të përzgjedhura për performancë dhe qëndrueshmëri.",
  },
  {
    slug: "berthame-teknike",
    title: "RITMI I DRITËS",
    location: "Drenas, Kosovë",
    year: "2024",
    status: "E realizuar",
    area: "280 m²",
    program: "Rezidencë",
    description:
      "Hapësirë e brendshme e realizuar me fokus në balancën ndërmjet funksionit dhe atmosferës, ku ndriçimi ritmik dhe organizimi i pastër hapësinor krijojnë një ambient të qetë dhe bashkëkohor.",
    concept:
      "Koncepti bazohet në ritmin e dritës si element kryesor kompozicional, duke theksuar thellësinë hapësinore dhe përvojën vizuale të përdoruesit.",
    design:
      "Planimetri e hapur me ndarje funksionale të arritura përmes materialeve dhe ndriçimit, pa ndërprerë vazhdimësinë vizuale të hapësirës.",
    materials:
      "Materiale neutrale, izolim termik cilësor, instalime teknike moderne dhe sisteme ndriçimi të integruara.",
  },
  {
    slug: "hapesire-ndertimore",
    title: "KULMI",
    location: "Fushë Kosovë, Kosovë",
    year: "2024",
    status: "Në zhvillim",
    area: "600 m²",
    program: "Strukturë ndërtimore",
    description:
      "Objekt në zhvillim me fokus në strukturën konstruktive dhe formën e kulmit si element kryesor arkitektonik.",
    concept:
      "Koncepti bazohet në theksimin e kulmit si identitet hapësinor dhe konstruktiv, duke krijuar një formë të pastër dhe të lexueshme arkitektonike.",
    design:
      "Dizajn linear që ndjek drejtimin e strukturës mbajtëse dhe krijon ritëm përmes elementeve konstruktive të ekspozuara.",
    materials:
      "Strukturë mbajtëse moderne, elemente konstruktive të ekspozuara dhe materiale ndërtimore të përzgjedhura për qëndrueshmëri dhe funksionalitet.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
