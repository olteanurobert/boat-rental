import React from "react";

// Itineraries assets
import corpcommentImg from "@/public/carousel/cj-botha-T5Q6ChvfYEI-unsplash.jpg";
import rmtdevImg from "@/public/carousel/claudio-schwarz-G_ZiOoBRu3s-unsplash.jpg";
import wordanalyticsImg from "@/public/carousel/claudio-schwarz-i3d9vUMI0HA-unsplash.jpg";

// Steps icons
import { FaBookReader } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaCar } from "react-icons/fa";

export const links = [
  {
    name: "Acasă",
    hash: "#home",
  },
  {
    name: "Despre mine",
    hash: "#about",
  },
  {
    name: "Trasee",
    hash: "#itinerary",
  },
  {
    name: "Pași de urmat",
    hash: "#steps",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const stepsData = [
  {
    title: "Pasul 1",
    location: "Consultă traseele prezentate",
    description:
      "În cazul în care nu dorești un traseu predefinit, putem discuta telefonic pentru a organiza și adapta un traseu croit pentru nevoile și dorințele tale.",
    icon: React.createElement(FaBookReader),
    // date: "2019",
  },
  {
    title: "Pasul 2",
    location: "Rezervă",
    description:
      "Contactează-ne la numărul de telefon 0744 259 256 pentru a face rezervarea. Totodată putem discuta despre numarul de persoane in barca, etc.",
    icon: React.createElement(FaPhone),
    // date: "2019 - 2021",
  },
  {
    title: "Pasul 3",
    location: "Hai în Deltă!!!",
    description:
      "Folosește harta cu direcțiile, din partea de jos a paginii și ne vedem la debarcader, pe ponton pentru a pleca în excursie în Deltă.",
    icon: React.createElement(FaCar),
    // date: "2021 - present",
  },
] as const;

export const itinerariesData = [
  {
    title: "Excursie în Deltă I - Lacuri",
    description: `TRASEU: Debarcader Murighiol -> Sat Uzlina – Lac Uzlina – Lac Doru Leapca – Lac Isăcel – Lac Isac – Retur -> Debarcader Murighiol.`,
    route: "",
    tags: ["Preț: 80 lei/pers", "Durată: ~2 ore"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Excursie în Deltă II - Lacuri",
    description: `TRASEU: Debarcader Murighiol -> Sat Uzlina – Lac Uzlina – Lac Doru Leapca – Lac Isăcel – Canal Isac 1 – Canal Litcov - Lac Potcoava - Lac Gorgova - Canal Filat - Retur pe Dunărea Veche -> Debarcader Murighiol.`,
    route: "",
    tags: ["Preț: 120 lei/pers", "Durată: ~3 ore"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Excursie la Sfântul Gheorghe I",
    description: `TRASEU: Debarcader Murighiol -> întreaga deplasare se face pe Dunăre - Retur pe Dunărea -> Debarcader Murighiol.`,
    route:
      "La Sfântul Gheorghe se poate face popas, cu plajă la Marea Neagră, deasemenea se pot servi preparate tradiționale gătite de localnici. Prețul acestora este separat de excursie.",
    tags: ["Preț: 120 lei/pers", "Durată: ~ o zi întreagă"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Excursie la Sfântul Gheorghe II",
    description: `TRASEU: Debarcader Murighiol -> Sat Uzlina - Lac Uzlina - Lac Isac - Canal Litcov - Canal Caraorman - Lac Puiu - Canal Mocansca - Sf. Gheorghe - Retur pe Dunărea -> Debarcader Murighiol.`,
    route:
      "Aceleași opțiuni de popas și servire preparate tradiționale ca în -> Excursie la Sfântul Gheorghe I.",
    tags: ["Preț: 150 lei/pers", "Durată: ~ o zi întreagă"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Excursie în Pădurea Caraorman",
    description: `TRASEU: Debarcader Murighiol -> Sat Uzlina - Lac Uzlina - Lac Isac - Canal Litcov - Canal Caraorman - Sat Caraorman - Retur -> Debarcader Murighiol.`,
    route:
      "Se poate vizita Pădurea Caraorman cu mașini de teren ( safari ), deasemenea se pot servi preparate tradiționale gătite de localnici. Prețul acestora este separat de excursie.",
    tags: ["Preț: 100 lei/pers", "Durată: ~5 ore"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Excursie la Sulina",
    description: `TRASEU: Debarcader Murighiol -> Sat Uzlina - Lac Uzlina - Lac Isac - Canal Litcov - Canal Caraorman - Canal Sulina - Oraș Sulina - Retur -> Debarcader Murighiol.`,
    route:
      "La Sulina se poate face popas pe plaja de la Marea Neagră, deasemenea se pot servi preparate tradiționale în restaurantele din oraș. Prețul acestora este separat de excursie.",
    tags: ["Preț: 150 lei/pers", "Durată: ~ o zi întreagă"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Excursie în Pădurea Letea",
    description: `TRASEU: Debarcader Murighiol -> Sat Uzlina - Lac Uzlina - Lac Isac - Canal Litcov - Sat Crișan - Dunărea Veche - Canal Magioru - Pădurea Letea - Retur -> Debarcader Murighiol.`,
    route:
      "Se poate vizita Pădurea Letea cu mașini de teren ( safari ), deasemenea se pot servi preparate tradiționale gătite de localnici. Prețul acestora este separat de excursie.",
    tags: ["Preț: 150 lei/pers", "Durată: ~ o zi întreagă"],
    imageUrl: wordanalyticsImg,
  },
] as const;
