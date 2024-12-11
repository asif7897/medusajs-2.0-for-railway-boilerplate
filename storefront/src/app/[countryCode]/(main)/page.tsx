import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
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

    <div className="px-[10px]">
          <CategorySlick slides={slides} />
        </div>


      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
      <>    <Hero />    
      
       </>

       <>


       <section className="pb-4 pt-6 space-y-1 px-4 md:px-8">
        <h2 className="w-full text-center text-2xl lg:text-3xl font-semibold mb-4">
          ACCESSORIES
        </h2>

        <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row justify-between items-start h-[80vh] md:h-[70vh]">
          <a
            href="/collections/luxuryBelt"
            className="w-full md:w-[calc(50%-8px)] h-full relative flex items-center justify-center overflow-hidden rounded-lg bg-gray-700 group"
            style={{ backgroundImage: 'url("https://seasky2004.s3.ap-south-1.amazonaws.com/seasky_image/others/Belt_Banner_a8aca7.webp")' }}
          >
            <img
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
              src="https://seasky2004.s3.ap-south-1.amazonaws.com/seasky_image/others/Belt_Banner_a8aca7.webp"
              alt="Luxury Belt"
            />
            <img
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-0 group-hover:opacity-100"
              src="https://seasky2004.s3.ap-south-1.amazonaws.com/seasky_image/others/belt_web_banner_edited_rtskon_ysp27a.webp"
              alt="Luxury Belt Hover"
            />
            <svg
              className="absolute inset-x-0 bottom-5 mx-auto text-3xl text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z"
              />
            </svg>
            <button className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 text-gray-300 text-4xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Shop Now
            </button>
          </a>

          <a
            href="/collections/moneyBag"
            className="w-full md:w-[calc(50%-8px)] h-full relative flex items-center justify-center overflow-hidden rounded-lg bg-gray-700 group"
            style={{ backgroundImage: 'url("https://seasky2004.s3.ap-south-1.amazonaws.com/seasky_image/random/2.1_11zon.webp")' }}
          >
            <img
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
              
              src="https://seasky2004.s3.ap-south-1.amazonaws.com/seasky_image/random/2.1_11zon.webp"


              alt="Box Tie"
            />
            <img
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-0 group-hover:opacity-100"
              src="https://seasky2004.s3.ap-south-1.amazonaws.com/seasky_image/random/7.3_11zon.webp"
              alt="Box Tie Hover"
            />
            <svg
              className="absolute inset-x-0 bottom-5 mx-auto text-3xl text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z"
              />
            </svg>
            <button className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 text-gray-300 text-4xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Shop Now
            </button>
          </a>
        </div>
      </section>


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
