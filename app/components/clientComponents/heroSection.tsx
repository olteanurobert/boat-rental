"use client";

import React from "react";

// Shadcn components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";

// Helpers
import { useSectionInView } from "@/app/libr/hooks";

import a from "../../../public/carousel/cj-botha-T5Q6ChvfYEI-unsplash.jpg";
import b from "../../../public/carousel/claudio-schwarz-G_ZiOoBRu3s-unsplash.jpg";
import c from "../../../public/carousel/claudio-schwarz-i3d9vUMI0HA-unsplash.jpg";
import d from "../../../public/carousel/neom-D1jr0Mevs-c-unsplash.jpg";
import e from "../../../public/carousel/oscar-gutierrez-njlxwIKEMeE-unsplash.jpg";
import Image from "next/image";

const HeroSection = () => {
  const images = [a, b, c, d, e];
  const { ref } = useSectionInView("Acasă");

  return (
    <div ref={ref} id="home" className="w-full max-w-[1500px]">
      <Carousel
        // plugins={[Autoplay({ delay: 8000 })]}
        className="w-full"
        opts={{ loop: true }}
        // onMouseEnter={plugin.current.stop}
        // onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-0">
                <Card className="border-none">
                  <CardContent className="flex aspect-4/3 items-center justify-center p-0 border-none">
                    <Image
                      src={image}
                      alt="sad"
                      className="h-[500px] object-cover rounded-xl border-none"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default HeroSection;
