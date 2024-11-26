import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { getCollectionsWithProducts } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
//feature produc women section 

 

//edited: : working with carousel. 
import Carousel from "@modules/layout/components/Carousel/Carousel";

import CategorySlick from "Files/HomePage/Category-slider";



export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}


//edite server related issue : 

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

 


//edited : 


const slides = [
  {
    image: "https://res.cloudinary.com/dqgrlf8uf/image/upload/v1720379189/PKC_7433copy_grcqfn.jpg",
    name: "Suit",
    value: "suit",
  },
  {
    image: "https://res.cloudinary.com/dqgrlf8uf/image/upload/v1720379758/st1366_tiwmqi.jpg",
    name: "Blazer",
    value: "blazer",
  },
  {
    image: "https://res.cloudinary.com/dqgrlf8uf/image/upload/v1720379503/PKC_6783copy_jfer1o.jpg",
    name: "Punjabi",
    value: "punjabi",
  },
  {
    image: "https://res.cloudinary.com/dqgrlf8uf/image/upload/v1720379885/09-05-2024product00376_1024x1024_2x_j7tk27.jpg",
    name: "Formal shirt",
    value: "shirt",
  },
  {
    image: "https://res.cloudinary.com/dqgrlf8uf/image/upload/v1720380349/90_1010982-1A07978_1B000_10_WoolFormalPants-Clothing-Versace-online-store_1_3_x7zrpk.png",
    name: "Pant",
    value: "pant",
  },
  {
    image: "https://res.cloudinary.com/dqgrlf8uf/image/upload/v1720380496/A23WS0152363408_BLUE_vmxomo.jpg",
    name: "Shirt",
    value: "shirt",
  },
];















  return (
    <>
    <Carousel auto interval={5000} /> 

    <div className="px-[10px]">
          <CategorySlick slides={slides} />
        </div>


      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
      <>  <Hero />     </>
       

    </>
  )
}
