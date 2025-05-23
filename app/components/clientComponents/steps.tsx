"use client";

import React from "react";
import SectionHeading from "../serverComponents/section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { stepsData } from "@/app/libr/data";
import { useTheme } from "@/app/context/theme-context";

export default function Steps() {
  const { theme } = useTheme();

  return (
    <section id="steps" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Pași de urmat</SectionHeading>
      <VerticalTimeline lineColor="">
        {stepsData.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background:
                    theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === "light"
                      ? "0.4rem solid #9ca3af"
                      : "0.4rem solid rgba(255, 255, 255, 0.5)",
                }}
                // date={item.date}
                icon={item.icon}
                iconStyle={{
                  background:
                    theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                  fontSize: "1.5rem",
                }}
                visible
              >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="font-normal !text-lg !my-1">{item.location}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}
