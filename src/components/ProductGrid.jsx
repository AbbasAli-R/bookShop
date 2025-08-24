
import React from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import products from '../ProductContent'

const ProductGrid = () => {
  const products = useSelector((state) => state.product.filteredItems);

  return (
    <div className="container mx-auto px-3 sm:px-4 lg:px-6 my-12 sm:my-16 lg:my-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
