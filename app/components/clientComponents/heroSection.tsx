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

// Components
import Image from "next/image";

// Assets
import a from "../../../public/carousel/1.jpg";
import b from "../../../public/carousel/2.jpg";
// import c from "../../../public/carousel/3.jpg";
import d from "../../../public/carousel/4.jpg";
import e from "../../../public/carousel/5.jpg";
import f from "../../../public/carousel/6.jpg";
import g from "../../../public/carousel/7.jpg";
import h from "../../../public/carousel/8.jpg";

const HeroSection = () => {
  const images = [a, b, d, e, f, g, h];

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
