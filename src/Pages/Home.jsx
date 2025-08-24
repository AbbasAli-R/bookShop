
import React from "react";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "../features/products/ProductSlice";

const categories = ["All", "Fiction", "Technology", "Self-Help", "History"];

const Home = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state) => state.product.selectedCategory
  );

  return (
    <div>
      <div className="bg"></div>
      <div className="container mx-auto my-6 sm:my-10 px-3 sm:px-4">
        {/* Categories */}
        <div className="overflow-x-auto sm:overflow-visible">
          <div className="flex sm:flex-wrap justify-start sm:justify-center gap-3 sm:gap-6 mb-6 sm:mb-8 whitespace-nowrap sm:whitespace-normal px-1 sm:px-0">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => dispatch(setSelectedCategory(category))}
                  className={`relative bg-transparent py-1.5 sm:py-2 px-3 sm:px-4 rounded-md cursor-pointer transition-all duration-200 font-medium sm:font-semibold text-sm sm:text-base
                    ${
                      isActive
                        ? "font-bold text-stone-500 after:w-full after:bg-stone-600"
                        : "text-cyan-950 hover:text-stone-600 after:w-0 after:bg-stone-600"
                    }
                    after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px]
                    after:transition-all after:duration-300 hover:after:w-full`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Grid */}
        <ProductGrid />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
