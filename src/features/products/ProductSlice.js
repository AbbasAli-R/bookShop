

import { createSlice } from "@reduxjs/toolkit";
import products from "../../ProductContent";

// Load saved state from localStorage if available
const savedState = JSON.parse(localStorage.getItem("productState")) || {};

const initialState = {
  items: products,
  filteredItems: products,
  searchTerm: savedState.searchTerm || "",
  selectedCategory: savedState.selectedCategory || "All",
};

// search products and category
const filterProducts = (state) => {
  return state.items.filter((product) => {
    const matchSearch = product.title
      .toLowerCase()
      .includes(state.searchTerm.toLowerCase());
    const matchCategory =
      state.selectedCategory === "All" ||
      product.category === state.selectedCategory;
    return matchSearch && matchCategory;
  });
};

const productSlice = createSlice({
  name: "products",
  initialState: {
    ...initialState,
    filteredItems: filterProducts(initialState),
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.filteredItems = filterProducts(state);

      // Save to localStorage
      localStorage.setItem(
        "productState",
        JSON.stringify({
          searchTerm: state.searchTerm,
          selectedCategory: state.selectedCategory,
        })
      );
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
      state.filteredItems = filterProducts(state);

      // Save to localStorage
      localStorage.setItem(
        "productState",
        JSON.stringify({
          searchTerm: state.searchTerm,
          selectedCategory: state.selectedCategory,
        })
      );
    },
  },
});

export const { setSearchTerm, setSelectedCategory } = productSlice.actions;
export default productSlice.reducer;
