// This is the component that will handle when a product comes
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import SocialMediaLinks from "../Utils/SocialMediaLinks";
import { notifyError, notifyInfo } from "../Utils/notifications.js";

import { updateCartSuccess } from "../redux/slice/cartSlice.js";
import { useSelector, useDispatch } from "react-redux";

const ProductView = () => {
  const { param } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);
  // const [finalPrice, setFinalPrice] = useState(0);
  const cart = useSelector((state) => state.cart.currentCart);

  const [quantity, setQuantity] = useState(1);

  // Navigate back to previous page on close of menu
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Calculate final Price after Discount
  const finalPrice =
    product?.currentPrice -
    product?.currentPrice * (product?.discountPercent / 100);

  // Handle Reduce Quantity Function
  const handleReduce = () =>
    setQuantity((prev) => {
      if (quantity <= 1) return 1;

      return --prev;
    });

  // Handle Increase Quantity Function
  const handleIncrease = () => setQuantity((prev) => ++prev);

  // Retrieve Product Function
  const retrieveProduct = async (PRODUCT) => {
    setError(false);
    try {
      const response = await fetch(`/api/products/single/${PRODUCT}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ info: "Get All Products" }),
      });

      const data = await response.json();

      if (data.statusCode !== 200) throw new Error();

      setProduct(data.data);
    } catch (error) {
      notifyError("Error Retrieving Product");
      setError(true);
    }
  };

  // Load Product from Database
  useEffect(() => {
    retrieveProduct(param);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle Add To Cart
  const handleAddToCart = () => {
    // If Cart is NULL (i.e no user login), then redirect to signin page
    if (!cart) {
      notifyError("Sorry, you need to be logged in.");
      navigate("/signin");
      return;
    }

    // Don't add to cart if out out of stock
    if (!product.inStock) {
      notifyInfo("Selected Product is out of Stock");
      return;
    }
    const sentPrice = product.isDiscount ? finalPrice : product.currentPrice;

    dispatch(
      updateCartSuccess({
        product: { id: param, quantity: quantity },
        amount: sentPrice * quantity,
      })
    );
  };

  // Returned JSX

  return (
    <motion.div
      className="w-full max-w-screen-xl p-4 md:p-8 mx-auto flex justify-center items-center mb-4 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Close button  */}
      <button
        className="absolute right-12 top-12 bg-red-600 text-white font-bold tex-xs p-1 rounded-lg hover:scale-75 transition ease-in w-9"
        onClick={() => {
          navigate(-1);
          setProduct(null);
        }}
      >
        X
      </button>

      {/* // Product Display or Loader Screen  */}
      {product ? (
        <div className="max-w-5xl flex  flex-col md:flex-row p-4 bg-white shadow-2xl rounded-2xl overflow-x-hidden">
          {/*  */}
          {/* Items start here */}
          <div className="w-full object-cover flex flex-col items-center justify-center">
            <img
              src={product.imageUrl}
              alt="Product Image"
              className="w-[75%] sm:w-full"
            />
          </div>
          {/* Right Side */}
          <div className="w-full p-4">
            <div className="mb-4">
              {/* Heading and status */}
              <div className="flex gap-3 mb-2">
                <h2 className="font-extrabold text-xl sm:text-3xl">
                  {product.name}
                </h2>
                {product.inStock ? (
                  <p className="text-xs sm:text-sm bg-green-400 p-2 rounded-md text-green-950">
                    In Stock
                  </p>
                ) : (
                  <p className="text-xs sm:text-sm bg-red-300 p-2 rounded-md text-red-950">
                    Out of Stock
                  </p>
                )}
              </div>

              {/* Rating and SKU Code */}
              <div className="flex gap-5 mb-2">
                <p className="text-xs sm:text-sm">
                  {"⭐".repeat(product.rating) +
                    " " +
                    product.rating +
                    " Reviews"}
                </p>
                <p className="text-sm font-bold">{`SKU: ${product._id}`}</p>
              </div>

              {/* Pricing Details and Discount Details */}
              <div className="text-xl font-bold flex gap-2">
                {product.isDiscount ? (
                  <s className="text-slate-500">{`N${product.currentPrice}`}</s>
                ) : (
                  <p className="text-[#00B207] font-bold">{`N${product.currentPrice}`}</p>
                )}

                {product.isDiscount && (
                  <p className="text-[#00B207] font-bold">{`N${finalPrice}`}</p>
                )}
                {product.isDiscount && (
                  <p className="text-xs bg-green-400 p-2 rounded-md text-green-950 scale-90 ">{`${product.discountPercent}% OFF`}</p>
                )}
              </div>
            </div>

            {/* Brand Name and social media */}
            <div className="flex justify-between items-center text-sm mb-4">
              <p className="font-bold">{"Brand: " + product.brand}</p>
              <div className="flex items-center gap-1 w-[60%]">
                <p>Share Product:</p>
                <SocialMediaLinks
                  facebook="https://twitter.com/Cre8steveDev"
                  twitter="https://twitter.com/Cre8steveDev"
                  instagram="https://twitter.com/Cre8steveDev"
                  pinterest="https://twitter.com/Cre8steveDev"
                />
              </div>
            </div>

            {/* Product Description */}
            <div className="text-sm">
              <p>{product.description}</p>
            </div>

            {/* Quantity and Add To Cart */}
            <div className="flex justify-between p-2 cursor-pointer my-3 items-center">
              <div>
                <input
                  type="button"
                  value={"-"}
                  className="bg-slate-400 w-[20px] rounded-s cursor-pointer"
                  onClick={handleReduce}
                  onChange={() => {}} // Done to prevent DOM error about value property set without onChange
                />
                <input
                  type="text"
                  value={quantity}
                  className="w-[40px] text-center"
                  onChange={() => {}}
                />
                <input
                  type="button"
                  value={"+"}
                  className="bg-slate-400 w-[20px] rounded-e cursor-pointer"
                  onClick={handleIncrease}
                  onChange={() => {}}
                />
              </div>
              <input
                type="button"
                value={
                  cart
                    ? cart.products.some((item) => item.id === param)
                      ? "Remove From Cart"
                      : "Add to Cart"
                    : "Add to Cart"
                }
                className={` ${
                  cart
                    ? cart.products.some((item) => item.id === param)
                      ? "bg-red-600"
                      : "bg-[#00B207]"
                    : "bg-[#00B207]"
                } p-2  w-[200px] rounded-md text-white hover:opacity-85 transition ease-in active:bg-white active:text-slate-800`}
                onClick={handleAddToCart}
              />
              <img
                src="/Vector.png"
                alt="Wishlist"
                title="Add to Wish List"
                className="active:scale-110"
              />
            </div>

            {/* Category */}
            <ul className="flex text-sm gap-2 mb-2 items-center">
              <p className="font-bold"> Category: </p>
              {product.category.map((item, idx) => (
                <Link to={`/shop/${item}`} key={idx}>
                  <li
                    className="hover:text-[#00B207] hover:bg-white bg-slate-300 p-1 rounded-md"
                    key={item}
                  >
                    {item}
                  </li>
                </Link>
              ))}
            </ul>

            {/* Tags */}
            <ul className="flex text-sm gap-2">
              <p className="font-bold"> Tags: </p>
              {product.tag.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        // Product Preloader
        <div className="w-full h-[50%] flex flex-col justify-center items-center">
          {error ? (
            <p className="text-8xl text-center my-8">😒</p>
          ) : (
            <img src="/walk-loading.gif" alt="Loading" className="w-[120px]" />
          )}
          <p>{error ? "UNABLE TO LOAD PRODUCT" : "LOADING PRODUCT DETAILS"}</p>
        </div>
      )}
    </motion.div>
  );
};

export default ProductView;
