"use client"
import React from "react"
import './styles.css'
import FashionCarousel from "@modules/layout/components/Carousel-2";

interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

interface CategorySlickProps {
    slides: {
        image: string;
        value: string;
        name: string;
    }[];
}


interface Slide {
    image: string;
    name: string;
    value: string;
}
const CategorySlick: React.FC<CategorySlickProps> = () => {


    const slides: Slide[] = [
        {
            image: "https://seasky2004.s3.ap-south-1.amazonaws.com/seasky_image/carousel_image/1.webp",
            name: "PREMIUM SUIT",
            value: "premiumSuit"
        },
        {
            image: "https://seasky2004.s3.ap-south-1.amazonaws.com/seasky_image/carousel_image/2.webp",
            name: "PLATINUM BLAZER",
            value: "platinumBlazer"
        },
        {
            image: "https://seasky2004.s3.ap-south-1.amazonaws.com/seasky_image/carousel_image/3.webp",
            name: "FORMAL SHIRT",
            value: "formalShirt"
        },
        {
            image: "https://seasky2004.s3.ap-south-1.amazonaws.com/seasky_image/carousel_image/4.webp",
            name: "FORMAL PANT",
            value: "formalPant"
        },
        {
            image: "https://seasky2004.s3.ap-south-1.amazonaws.com/seasky_image/carousel_image/5.webp",
            name: "HALF COAT",
            value: "halfCoat"
        },
    ];
    
    

    return (
        <>
            <div className="w-full pt-[40px]">
            <div className="flex justify-center">
                    <h1 className="font-bold text-2xl tracking-widest mt-5">
                    MENS WEAR
                    </h1>
                </div>
                
                <div className="w-full h-[500px] slider_main_box" style={{
                    height: "80vh"
                }}>
                    <FashionCarousel slides={slides} />
                    {/* <Carousel /> */}
                </div>
            </div>
        </>
    )
}

export default CategorySlick