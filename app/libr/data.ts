import corpcommentImg from "@/public/carousel/cj-botha-T5Q6ChvfYEI-unsplash.jpg";
import rmtdevImg from "@/public/carousel/claudio-schwarz-G_ZiOoBRu3s-unsplash.jpg";
import wordanalyticsImg from "@/public/carousel/claudio-schwarz-i3d9vUMI0HA-unsplash.jpg";

export const links = [
    {
      name: "Home",
      hash: "#home",
    },
    {
      name: "About",
      hash: "#about",
    },
    {
      name: "Projects",
      hash: "#projects",
    },
    {
      name: "Skills",
      hash: "#skills",
    },
    {
      name: "Experience",
      hash: "#experience",
    },
    {
      name: "Contact",
      hash: "#contact",
    },
  ] as const;

  export const projectsData = [
    {
      title: "Tulcea - Mila 23",
      description:
        "Tulcea – Canal 36 – Canal Sontea Veche – Lac Mesteru – Lac Nebunu – Zona Cot Candura – Lac Baclanesti – Lac Furtuna – Canal Vacaru – ",
      route: "Tulcea – Canal 36 – Canal Sontea Veche – Lac Mesteru – Lac Nebunu – Zona Cot Candura – Lac Baclanesti – Lac Furtuna – Canal Vacaru – ",
        tags: ["Pret: 149 lei/pers", "Durata: 4-5 ore"],
      imageUrl: corpcommentImg,
    },
    {
      title: "rmtDev",
      description:
        "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
        route: "Tulcea – Canal 36 – Canal Sontea Veche – Lac Mesteru – Lac Nebunu – Zona Cot Candura – Lac Baclanesti – Lac Furtuna – Canal Vacaru – ",
        tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
      imageUrl: rmtdevImg,
    },
    {
      title: "Word Analytics",
      description:
        "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
        route: "Tulcea – Canal 36 – Canal Sontea Veche – Lac Mesteru – Lac Nebunu – Zona Cot Candura – Lac Baclanesti – Lac Furtuna – Canal Vacaru – ",
        tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
      imageUrl: wordanalyticsImg,
    },
  ] as const;