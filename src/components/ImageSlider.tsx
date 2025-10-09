

import { Card } from "./ui/card";
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"

import img1 from "../assets/images/サンプル1.jpg";
import img2 from "../assets/images/サンプル2.jpg";
import img3 from "../assets/images/サンプル3.jpg";
import img4 from "../assets/images/サンプル4.jpg";
import img5 from "../assets/images/サンプル5.jpg";
import React from "react";


const images = [img1, img2, img3, img4, img5];

export function ImageSlider() {
    const autoplay = React.useRef(
      Autoplay({ delay: 2000, stopOnInteraction: false })
    )
  
    const [emblaRef] = useEmblaCarousel(
      { loop: true, 
        align: "start",//左揃え
        skipSnaps:false,
        slidesToScroll:1
     },
      [autoplay.current]
    )
  
    return (
      <Card className="relative overflow-hidden w-full ">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {images.map((src, index) => (
              <div 
                className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_calc(100%/3)] min-w-0 p-2"
                key={index}
              >
                <img
                  src={src}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover select-none rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </Card>
    )
  }
  