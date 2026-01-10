import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

const categoryList = [
  { name: "Running", imgUrl: "category-running.svg" },
  { name: "Tennis", imgUrl: "category-running-1.svg" },
  { name: "Basketball", imgUrl: "category-basketball.svg" },
  { name: "Football", imgUrl: "category-football.svg" },
  { name: "Badminton", imgUrl: "category-badminton.svg" },
  { name: "Swimming", imgUrl: "category-swimming.svg" },
];

const CategoriesSection = () => {
  return (
    <section className="container mx-auto pb-24">
      <div className="flex justify-between items-center mb-12">
        <h2 className="font-bold text-2xl">Browse By Categories</h2>

        <Link href="#" className="flex gap-2 text-primary font-medium">
          See All Categories <FiArrowRight className="mt-1" />
        </Link>
      </div>

      <div className="grid grid-cols-6 gap-10">
        {categoryList.map((category, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-[#F7F7F7] to-[#EFEFEF] rounded-2xl aspect-square flex items-center justify-center hover:shadow-md duration-300"
          >
            <div className="text-center">
              <Image
                src={`/images/categories/${category.imgUrl}`}
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
