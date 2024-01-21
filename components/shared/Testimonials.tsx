'use client'
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from 'next/image';

const Testimonials = () => {
  const plugin = React.useRef(Autoplay({ delay: 1000, stopOnInteraction: false }));

  const testimonialsData = [
    {
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Yukio Oduor",
      position: "Engineer",

    },
    {
        testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        name: "Jebin Singirankabo",
        position: "Doctor",

    },
    {
        testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        name: "Daniel Orwenjo",
        position: "Senior Developer",
  
    },
    {
        testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        name: "Yukio Oduor",
        position: "Engineer",

    },
    {
          testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          name: "Jebin Singirankabo",
          position: "Doctor",

    },
    {
          testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          name: "Daniel Orwenjo",
          position: "Senior Developer",

    },
      
   
  ];

  return (
    <div className="bg-gray-100 py-12">
      <h2 className="text-3xl font-medium mb-3 text-center mt-20 text-yellow-500">Testimonials</h2>
      <p className="text-gray-500 mb-10 text-center">What our clients are saying about us</p>

      <div className="relative text-center mt-20 mb-20">
        <div className="relative z-10">
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-xs mx-auto md:max-w-2xl"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {testimonialsData.map((data, index) => (
                <CarouselItem key={index} className="px-3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col justify-center p-8">
                        <p className="text-lg text-gray-700 mb-4 text-center">" {data.testimonial} "</p>
                        <div className="flex items-left">
                          <div>
                            <p className="font-semibold">{data.name}</p>
                            <p className="text-sm text-gray-500 text-left">{data.position}</p>
                          </div>
                        </div>
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
      </div>
    </div>
  );
};

export default Testimonials;