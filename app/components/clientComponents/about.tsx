"use client";

import React from "react";

import SectionHeading from "../serverComponents/section-heading";

// Framer motion
import { motion } from "framer-motion";

// Helpers
import { useSectionInView } from "@/app/libr/hooks";

export default function About() {
  const { ref } = useSectionInView("Despre noi");

  return (
    <motion.section
      ref={ref}
      className="my-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Despre noi</SectionHeading>

      <p className="mb-3">
        Bine ai venit în minunata Delta Dunării! <br /> Dacă ești dedicat
        naturii și aventurii, această zonă deosebită îți va captiva inima pentru
        totdeauna. Mi-am propus să fac acest colț de rai mai accesibil pentru
        tine și toți cei dornici să-l exploreze și să le ofer experiențe unice
        în mijlocul naturii. <br /> Pentru că frumusețea Deltei trebuie
        împărtășită cu cât mai mulți entuziaști ai naturii, îmi doresc ca
        fiecare vizitator să aibă ocazia de a descoperi farmecul ei prin
        excursiile pe traseele variate. <br /> Sunt încântat să ofer excursii pe
        mai multe trasee cu barca cu motor, asigurând protecție împotriva ploii
        și vântului. Astfel, te vei putea bucura de priveliști de neuitat, fără
        grija vremii. Pentru mine, bucuria ta în mijlocul naturii este cea mai
        mare recompensă. Așadar, te invit să mă însoțești și să te bucuri de
        frumusețile Deltei Dunării.
      </p>
    </motion.section>
  );
}
