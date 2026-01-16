import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { Category } from "@/app/types";
import { getImageUrl } from "@/app/lib/api";

const categoryList = [
  { name: "Running", imgUrl: "category-running.svg" },
];

type TCategoriesProps = {
  categories: Category[];
}
const CategoriesSection = ({categories}: TCategoriesProps) => {
  return (
    <section className="container mx-auto pb-24">
      <div className="flex justify-between items-center mb-12">
        <h2 className="font-bold text-2xl">Browse By Categories</h2>

        <Link href="#" className="flex gap-2 text-primary font-medium">
          See All Categories <FiArrowRight className="mt-1" />
        </Link>
      </div>

      <div className="grid grid-cols-6 gap-10">
        {categories.map((category) => (
          <div
            key={category._id}
            className="bg-gradient-to-b from-[#F7F7F7] to-[#EFEFEF] rounded-2xl aspect-square flex items-center justify-center hover:shadow-md duration-300"
          >
            <div className="text-center">
              <Image
                src={getImageUrl(category.imageUrl)}
                width={90}
                height={90}
                alt={category.name}
                className="mx-auto mb-4"
              />
              <p className="text-primary font-medium text-lg">
                {category.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
