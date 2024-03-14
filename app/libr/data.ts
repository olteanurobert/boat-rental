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
      name: "Despre noi",
      hash: "#about",
    },
    {
      name: "Trasee",
      hash: "#itinerary",
    },
    {
      name: "Pași",
      hash: "#steps",
    },
    // {
    //   name: "Skills",
    //   hash: "#skills",
    // },
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
      title: "Tulcea - Mila 23",
      description:
        "Tulcea – Canal 36 – Canal Sontea Veche – Lac Mesteru – Lac Nebunu – Zona Cot Candura – Lac Baclanesti – Lac Furtuna – Canal Vacaru – ",
      route: "Tulcea – Canal 36 – Canal Sontea Veche – Lac Mesteru – Lac Nebunu – Zona Cot Candura – Lac Baclanesti – Lac Furtuna – Canal Vacaru – ",
        tags: ["Pret: 149 lei/pers", "Durata: 4-5 ore"],
      imageUrl: corpcommentImg,
    },
    {
      title: "Excursie Colonia de pasari",
      description:
        "Vom porni din Tulcea – Canal 36 – Canal Trofilca – Canal Sireasa – Lac Cotete – Lac Carasul – Lac Purcelu – Canal Sireasa de Nord si dupa ce am parcurs tot traseul de vom intoarce catre Tulcea",
        route: "Tulcea – Canal 36 – Canal Sontea Veche – Lac Mesteru – Lac Nebunu – Zona Cot Candura – Lac Baclanesti – Lac Furtuna – Canal Vacaru – ",
        tags: ["Pret: 149 lei/pers", "Durata: 4-5 ore"],
      imageUrl: rmtdevImg,
    },
    {
      title: "Excursie în Delta Dunării cu durata de 2–3 ore (Lacul cu Cotețe)",
      description:
        "Excursia cea mai solicitată de persoanele pasionate de observarea păsărilor, oferindu-ți șansa de a realiza fotografii și filmări unor specii diverse de păsări în imediata lor apropiere.",
        route: "Tulcea – Canal 36 – Canal Sontea Veche – Lac Mesteru – Lac Nebunu – Zona Cot Candura – Lac Baclanesti – Lac Furtuna – Canal Vacaru – ",
        tags: ["Pret: 149 lei/pers", "Durata: 4-5 ore"],
      imageUrl: wordanalyticsImg,
    },
  ] as const;