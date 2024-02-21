"use client";
import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";

import a from "../../../boat-rental/public/carousel/cj-botha-T5Q6ChvfYEI-unsplash.jpg";
import b from "../../../boat-rental/public/carousel/claudio-schwarz-G_ZiOoBRu3s-unsplash.jpg";
import c from "../../../boat-rental/public/carousel/claudio-schwarz-i3d9vUMI0HA-unsplash.jpg";
import d from "../../../boat-rental/public/carousel/neom-D1jr0Mevs-c-unsplash.jpg";
import e from "../../../boat-rental/public/carousel/oscar-gutierrez-njlxwIKEMeE-unsplash.jpg";
import Image from "next/image";

const HeroSection = () => {
  const images = [a, b, c, d, e];

  return (
    <div className="w-full max-w-[1500px]">
      <Carousel
        plugins={[Autoplay({ delay: 8000 })]}
        className="w-full"
        opts={{ loop: true }}
        // onMouseEnter={plugin.current.stop}
        // onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {images.map((asd, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-4/3 items-center justify-center p-6">
                    <Image
                      src={asd}
                      alt="sad"
                      className="h-[500px] object-cover"
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
