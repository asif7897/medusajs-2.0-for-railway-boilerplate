import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"

import Animation from "@modules/layout/templates/animation"

import Hero from "@modules/home/components/hero"
import { getCollectionsWithProducts } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
//feature produc women section 

 //error /Bug : comes from this file 

//edited: : working with carousel. 
import Carousel from "@modules/layout/components/Carousel/Carousel";

import CategorySlick from "Files/HomePage/Category-slider";



export const metadata: Metadata = {
  title: "Sea Sky",
  description:
    "No. 1 Perfectly Fitted 𝗥𝗲𝗮𝗱𝘆𝗺𝗮𝗱𝗲 Suit Brand",
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

    {/* <div className="px-[10px]">
          <CategorySlick slides={slides} />
        </div> */}


      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
      <>  
      
     

      <section className="pb-4 pt-6 px-4 md:px-8">
  <h2 className="w-full text-center text-2xl lg:text-3xl font-semibold mb-4">
    ACCESSORIES
  </h2>
  <div className="flex flex-wrap -mx-2">
    {/* Men's Collection */}
    <div className="w-full sm:w-1/2 px-2 mb-4 sm:mb-0">
      <a href="/collections/premiumSuit">
        <img
          className="w-full h-auto rounded-lg"
          src="https://cdn.rawnation.net/4/media/mens_collection_home_aw24.jpg"
          alt="Men's Collection"
        />
      </a>
    </div>
    {/* Women's Collection */}
    <div className="w-full sm:w-1/2 px-2">
      <a href="/collections/womenSuit">
        <img
          className="w-full h-auto rounded-lg"
          src="https://cdn.rawnation.net/4/media/womens_collection_home_aw24.jpg"
          alt="Women's Collection"
        />
      </a>
    </div>
  </div>
</section>






            
      
       </>

       <>
       <Animation/>
         

   <Hero/>

   


      <section className="py-12 px-4 md:px-8">
  <h2 className="text-center text-2xl lg:text-3xl font-semibold mb-4 text-gray-700">GIFT CARD</h2>
  <div className="relative flex items-center justify-center w-full h-[50vh] md:h-[70vh] bg-gray-200 rounded-lg overflow-hidden">
    <img
      className="absolute inset-0 w-full h-full object-cover"
      src="https://seasky2004.s3.ap-south-1.amazonaws.com/seasky_image/others/Gift_card_web_banner_jyzvs5.webp"
      alt="Gift Card"
    />
    <div className="relative z-10 flex flex-col items-end justify-center w-full h-full bg-opacity-10 text-white p-4 md:p-6">
      <h3 className="text-lg md:text-xl font-semibold mb-2 text-right text-gray-300">Get the Perfect Gift</h3>
      <p className="text-base mb-4 text-right text-gray-300">Our gift cards are perfect for any occasion.</p>
      <a
        href="/collections/giftCard"
        className="bg-white text-gray-800 py-2 px-4 rounded-lg text-right hover:bg-gray-300 hover:shadow-lg transition-colors duration-300"
      >
        Buy Now
      </a>
    </div>
  </div>
</section>

       
      

       
       </>
       

    </>
  )
}
