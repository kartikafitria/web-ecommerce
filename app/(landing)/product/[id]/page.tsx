import Image from "next/image";
import ProductActions from "../../components/product-detail/product-actions";
import priceFormatter from "@/app/utils/price-formatter";
import { getProductDetail } from "@/app/services/product.service";
import { getImageUrl } from "@/app/lib/api";

export type TPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const ProductDetail = async ({ params }: TPageProps) => {
  const { id } = await params;

  const product = await getProductDetail(id);


  return (
    <main className="container mx-auto py-24 flex gap-16">
      <div className="bg-primary-light aspect-square min-w-[520px] flex justify-center items-center">
        <Image
          src= {getImageUrl(product.imageUrl)}
          width={550}
          height={550}
          alt={product.name}
          className="aspect-square object-contain w-full"
          priority
        />
      </div>

      <div className="w-full py-7">
        <h1 className="font-bold text-5xl leading-tight mb-4">
          {product.name}
        </h1>

        <div className="bg-primary-light text-primary text-sm rounded-full px-5 py-2 w-fit mb-6">
          {product.category.name}
        </div>

        <p className="text-gray-600 leading-loose mb-8 max-w-2xl">
          {product.description}

        </p>

        <div className="text-primary text-3xl font-semibold mb-10">
          {priceFormatter(product.price)}
        </div>

        <ProductActions product= {product} stock={product.stock}/>
      </div>
    </main>
  );
};

export default ProductDetail;
