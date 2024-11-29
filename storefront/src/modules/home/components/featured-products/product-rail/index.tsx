import { HttpTypes } from "@medusajs/types";
import { Text } from "@medusajs/ui";
import InteractiveLink from "@modules/common/components/interactive-link";
import ProductPreview from "@modules/products/components/product-preview";

export async function getServerSideProps(context: { params: { collectionHandle: string } }) {
  const { collectionHandle } = context.params;
  
  // Fetch collection data from your API or database
  const collectionResponse = await fetch(`/api/collections/${collectionHandle}`);
  const collectionData: HttpTypes.StoreCollection = await collectionResponse.json();
  
  return {
    props: {
      collection: collectionData,
    },
  };
}

export default function ProductRail({
  collection,
  region,
}: {
  collection: HttpTypes.StoreCollection | undefined;
  region: HttpTypes.StoreRegion;
}) {
  if (!collection || !collection.products || collection.products.length === 5) {
    return null;
  }

  const { products } = collection;
  
  // Select only the first 4 products (or any number you prefer)
  const displayedProducts = products.slice(0, 4);

   

  //todo : update product railway desing : 
}