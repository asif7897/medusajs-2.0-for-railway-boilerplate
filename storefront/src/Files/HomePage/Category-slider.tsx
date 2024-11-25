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
            image: "https://res.cloudinary.com/dvzdodv1r/image/upload/v1732103867/1_upp5wt.webp",
            name: "PREMIUM SUIT",
            value: "premium_suit"
        },
        {
            image: "https://res.cloudinary.com/dvzdodv1r/image/upload/v1732103868/2_tgc9dd.webp",
            name: "PLATINUM BLAZER",
            value: "platinum_blazer"
        },
        {
            image: "https://res.cloudinary.com/dvzdodv1r/image/upload/v1732103868/3_pm63rk.webp",
            name: "FORMAL SHIRT",
            value: "formal_shirt"
        },
        {
            image: "https://res.cloudinary.com/dvzdodv1r/image/upload/v1732103931/4_diugva.webp",
            name: "FORMAL PANT",
            value: "formal_pant"
        },
        {
            image: "https://res.cloudinary.com/dvzdodv1r/image/upload/v1732103866/5_yt01ic.webp",
            name: "HALF COAT",
            value: "half_coat"
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