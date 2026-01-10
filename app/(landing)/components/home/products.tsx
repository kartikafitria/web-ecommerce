import Link from "next/link";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";

const productList = [
  { name: "SportsOn Hyperfast Shoes", category: "Running", price: 329000, imgUrl: "product-1.svg" },
  { name: "SportsOn Rockets Tennis", category: "Tennis", price: 999000, imgUrl: "product-2.svg" },
  { name: "SportsOn Slowivin", category: "Running", price: 119000, imgUrl: "product-3.svg" },
  { name: "SportsOn HyperSoccer v2", category: "Football", price: 458000, imgUrl: "product-4.svg" },
  { name: "SportsOn HyperSoccer v2", category: "Football", price: 458000, imgUrl: "product-6.svg" },
  { name: "SportsOn Slowivin", category: "Running", price: 119000, imgUrl: "product-5.svg" },
  { name: "SportsOn Hyperfast Shoes", category: "Running", price: 329000, imgUrl: "product-1.svg" },
  { name: "SportsOn Rockets Tennis", category: "Tennis", price: 999000, imgUrl: "product-2.svg" },
];

const ProductsSection = () => {
  return (
    <section id="products-section" className="container mx-auto mt-40">
      <h2 className="font-extrabold italic text-4xl text-center mb-16">
        <span className="text-primary">OUR </span>PRODUCTS
      </h2>

      <div className="grid grid-cols-4 gap-12">
        {productList.map((product, index) => (
          <Link
            href="#"
            key={index}
            className="bg-white rounded-xl p-3 hover:shadow-xl duration-300"
          >
            {/* IMAGE BOX */}
            <div className="bg-[#F6ECEC] rounded-lg aspect-square flex justify-center items-center relative">
              <Image
                src={`/images/products/${product.imgUrl}`}
                alt={product.name}
                width={240}
                height={240}
                className="object-contain"
              />

              {/* PLUS BUTTON */}
              <div className="absolute top-3 right-3 w-7 h-7 bg-primary text-white flex items-center justify-center rounded">
                <FiPlus size={16} />
              </div>
            </div>

            {/* INFO */}
            <h3 className="font-semibold text-sm mt-4 mb-1">
              {product.name}
            </h3>

            <p className="text-xs text-gray-400 mb-2">
              {product.category}
            </p>

            <p className="text-primary font-semibold text-sm">
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                maximumSignificantDigits: 3,
              }).format(product.price)}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
