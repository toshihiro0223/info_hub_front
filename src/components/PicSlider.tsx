

import { Card, CardContent } from "./ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import img1 from "../assets/images/サンプル1.jpg";
import img2 from "../assets/images/サンプル2.jpg";
import img3 from "../assets/images/サンプル3.jpg";
import img4 from "../assets/images/サンプル4.jpg";
import img5 from "../assets/images/サンプル5.jpg";

const images = [img1, img2, img3, img4, img5];

export function PicSlider() {
    return (
        <Carousel className="mx-auto w-32 sm:w-48 md:w-64 lg:w-80 xl:w-96 ">
            <CarouselContent>
                {images.map((src, index) => (
                    <CarouselItem key={index}>
                        <div className="pl-1 sm:basis-1/2 md:basis-1/3">
                            <div className="p-1">
                                <img
                                    src={src}
                                    alt={`image-${index}`}
                                    className="rounded-lg object-cover w-full h-64"
                                />
                            </div>
                        </div>
                    </CarouselItem>

                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
