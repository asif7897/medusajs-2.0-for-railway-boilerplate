import { Text } from "@medusajs/ui";
import { getProductPrice } from "@lib/util/get-product-price";
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import Thumbnail from "../thumbnail";
import PreviewPrice from "./price";
import { getProductsById } from "@lib/data/products";
import { HttpTypes } from "@medusajs/types";

export default async function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct;
  isFeatured?: boolean;
  region: HttpTypes.StoreRegion;
}) {
  // Fetch the product details by ID and region
  const [pricedProduct] = await getProductsById({
    ids: [product.id!],
    regionId: region.id,
  });

  // Return null if no priced product is found
  if (!pricedProduct) {
    return null;
  }

  // Get the cheapest price of the product
  const { cheapestPrice } = getProductPrice({
    product: pricedProduct,
  });

  return (
    <LocalizedClientLink href={`/products/${product.handle}`} className="group">
      <div data-testid="product-wrapper">
        <Thumbnail
          thumbnail={product.thumbnail}
          images={product.images}
          size="full"
          isFeatured={isFeatured}
        />
        <div className="flex flex-col mt-4 sm:flex-row sm:justify-between">
          {/* Title and price stack vertically on mobile, side-by-side on larger screens */}
          <div className="flex flex-col">
            <Text className="text-ui-fg-subtle" data-testid="product-title">
              {product.title}
            </Text>
            {/* Ensure price is below title on mobile */}
            {cheapestPrice && (
              <div className="mt-2 sm:mt-0">
                <PreviewPrice price={cheapestPrice} />
              </div>
            )}
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  );
}