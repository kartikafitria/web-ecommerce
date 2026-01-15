import Image from "next/image";
import ProductActions from "../../components/product-detail/product-actions";
import priceFormatter from "@/app/utils/price-formatter";

const ProductDetail = () => {
  return (
    <main className="container mx-auto py-24">
      <div className="flex gap-16 items-start">
        <div className="bg-primary-light w-[520px] h-[520px] flex items-center justify-center">
          <Image
            src="/images/products/product-4.svg"
            width={420}
            height={420}
            alt="SportsOn HyperSoccer v2"
            className="object-contain"
            priority
          />
        </div>

        <div className="flex-1 pt-4">
          <h1 className="font-bold text-5xl leading-tight mb-4">
            SportsOn HyperSoccer v2
          </h1>

          <div className="bg-primary-light text-primary text-sm rounded-full px-5 py-2 w-fit mb-6">
            Football
          </div>

          <p className="text-gray-600 leading-loose mb-8 max-w-2xl">
            The SportsOn HyperSoccer v2 is engineered for the player who demands
            precision, power, and unrivaled speed on the pitch. Featuring a
            striking, two-toned black and white design with deep crimson accents,
            these cleats don't just perform—they make a statement. Experience the
            future of football footwear with v2's enhanced fit and cutting-edge
            traction.
          </p>

          <div className="text-primary text-3xl font-semibold mb-10">
            {priceFormatter(458000)}
          </div>

          <ProductActions />
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
