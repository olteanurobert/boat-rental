import React from "react";

import SectionHeading from "../serverComponents/section-heading";

// Local data
import { itinerariesData } from "@/app/libr/data";

// Components
import Itinerary from "./itinerary";

export default function Itineraries() {
  return (
    <section id="itinerary" className="scroll-mt-28 mb-28">
      <SectionHeading>Trasee</SectionHeading>

      <div>
        {itinerariesData.map((itinerary, index) => (
          <React.Fragment key={index}>
            <Itinerary {...itinerary} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
