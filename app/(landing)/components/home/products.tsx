"use client";

import type { MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";

import priceFormatter from "@/app/utils/price-formatter";
import { Product } from "@/app/types";
import { getImageUrl } from "@/app/lib/api";
import { useCartStore } from "@/app/hooks/use-cart-store";

import Button from "../ui/button";

type TProductsProps = {
  products?: Product[];
};

const ProductsSection = ({ products = [] }: TProductsProps) => {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (
    e: MouseEvent<HTMLButtonElement>,
    product: Product
  ) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  if (!products.length) return null;

  return (
    <section id="products-section" className="container mx-auto mt-32 mb-52">
      <h2 className="font-extrabold italic text-4xl text-center mb-11">
        <span className="text-primary">OUR </span>PRODUCTS
      </h2>

      <div className="grid grid-cols-4 gap-12">
        {products.map((product) => (
          <Link
            key={product._id}
            href={`/product/${product._id}`}
            className="bg-white rounded-xl p-3 hover:shadow-xl duration-300"
          >
            <div className="bg-[#F6ECEC] rounded-lg aspect-square flex justify-center items-center relative">
              <Image
                src={getImageUrl(product.imageUrl)}
                alt={product.name}
                width={300}
                height={300}
                className="object-contain"
              />

              <Button
                type="button"
                className="absolute top-3 right-3 w-7 h-7 bg-primary text-white flex items-center justify-center rounded"
                onClick={(e) => handleAddToCart(e, product)}
              >
                <FiPlus size={16} />
              </Button>
            </div>

            <h3 className="font-semibold text-sm mt-4 mb-1">
              {product.name}
            </h3>

            <p className="text-xs text-gray-400 mb-2">
              {product.category?.name || "Uncategorized"}
            </p>

            <p className="text-primary font-semibold text-sm">
              {priceFormatter(product.price)}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
