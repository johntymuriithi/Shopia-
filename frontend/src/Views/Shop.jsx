// Shop Component housing Products and Filter Options
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import homeVariant from "../variants/homeVariants.js";
import MonthSale from "../Components/MonthSale.jsx";
import ShopProduct from "../Utils/ShopProduct.jsx";
import { notifyError } from "../Utils/notifications.js";
//  When you use this above hook, you create a path in the Router place too

const Shop = () => {
  const { para } = useParams();

  // State to monitor data fetching
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  para;
  const [allProducts, setAllProducts] = useState([]);

  // Load Products from Backend
  const handleFetchAllProducts = async () => {
    setError(false);
    try {
      const response = await fetch("/api/products/allproducts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ info: "Get All Products" }),
      });
      const data = await response.json();

      if (data.statusCode !== 200) {
        setLoading(false);
        throw new Error("Failed to Retrieve Products");
      }

      setAllProducts(data.data);
      setLoading(false);
    } catch (error) {
      notifyError(error.message);
      setError(true);
      // console.log(error);
    }
  };

  //
  useEffect(() => {
    handleFetchAllProducts();
  }, []);

  return (
    <motion.div
      initial={"start"}
      animate={"end"}
      variants={homeVariant}
      className="p-6"
    >
      <div id="Wrappter" className="w-full">
        {/* SALE OF THE MONTH  */}
        <MonthSale />
        {/* Filtering Options  */}
        <div className="flex gap-5 mt-6 flex-wrap justify-center">
          {/* Category Filtering */}
          <select
            name="category"
            id="category"
            className="bg-white dark:bg-darkSec dark:text-white p-1 rounded-md"
          >
            <option value={null}>Show by Category</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Fruits">Fruits</option>
            <option value="Meat">Fruits</option>
          </select>

          {/* Price Filtering  */}
          <select
            name="price"
            id="price"
            className="bg-white  dark:bg-darkSec dark:text-white p-1 rounded-md"
          >
            <option value={null}>Show by Price Range</option>
            <option value={1}>Less than N500</option>
            <option value={2}>Less than N2,000</option>
            <option value={3}>Greater than N2,000</option>
          </select>

          {/* Ratings Filtering  */}
          <select
            name="rating"
            id="rating"
            className="bg-white dark:bg-darkSec dark:text-white p-1 rounded-md"
          >
            <option value={null}>Show by Ratings</option>
            <option value={5}>⭐⭐⭐⭐⭐</option>
            <option value={4}>⭐⭐⭐⭐</option>
            <option value={3}>⭐⭐⭐</option>
            <option value={2}>⭐⭐</option>
            <option value={1}>⭐</option>
          </select>

          {/* Sorted Filtering  */}
          <select
            name="sorting"
            id="sorting"
            className="bg-white dark:bg-darkSec dark:text-white p-1 rounded-md"
          >
            <option value={null}>Sort List By</option>
            <option value={1}>Latest</option>
            <option value={2}>Price - High to Low </option>
            <option value={3}>Price - Low to High</option>
            <option value={4}>Rating - High to Low</option>
            <option value={5}>Rating - Low to High</option>
          </select>
        </div>

        {/* Shop Items Container */}
        <main className="my-6 flex flex-wrap gap-3 justify-center items-center w-full">
          {/* Render Product Array Here  */}
          {loading ? (
            <div className="mx-auto flex flex-col justify-center items-center">
              <img
                src="/walk-loading.gif"
                alt="Loading"
                className="w-[150px] mix-blend-multiply"
              />
              <p>
                {error
                  ? "There was a problem getting the product lists"
                  : "Loading Products. Please wait"}
              </p>
            </div>
          ) : (
            allProducts.map((product, idx) => (
              <ShopProduct key={idx} product={product} />
            ))
          )}
        </main>
      </div>
    </motion.div>
  );
};

export default Shop;
