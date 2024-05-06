/* eslint-disable react/prop-types */
// Product Component will be usable across different pages

import { Link } from "react-router-dom";
import { notifyInfo } from "./notifications.js";

const Product = ({
  imgUrl,
  productName,
  price,
  rating,
  productId,
  inStock,
  discount,
  discountPrice,
  discountPercent,
  category,
  tags,
}) => {
  // Doing this to remove unused variable thingy
  category, tags;

  discountPrice = discountPrice.toFixed(2);

  //   Functions to handle Add to Cart and Add to Wish List
  const handleAddToCart = (e) => {
    e.preventDefault();
    notifyInfo("Check out the Shop, please.");
  };

  const handleAddToWishList = (e) => {
    e.preventDefault();
    alert("Will Implement Add to Wish List Here");
  };

  return (
    <Link to={`/shop/product/${productId}`}>
      <div className="w-[248px] h-[339]  p-4 relative hover:shadow-lg border-2 border-opacity-65 hover:border-green-700 transition-all ease-in duration-500 dark:bg-white">
        {/*  */}
        {/* Conditionally render Out of Stock Label */}
        {inStock === false && (
          <p className=" bg-red-600 w-fit p-2 text-xs text-white rounded-lg absolute top-4 left-3 hover:opacity-80 transition-opacity ease-in">
            OUT OF STOCK
          </p>
        )}
        {/*  */}
        {/* Condtitionally render Discount Label */}
        {discount === true && (
          <p className="bg-[#00B207] w-fit p-2 text-xs text-white rounded-lg absolute top-4 left-3 hover:opacity-80 transition-opacity ease-in">
            SALE {discountPercent}% OFF
          </p>
        )}

        {/* WishList Icon - Implement function to add to user's Wishlist */}
        <img
          src="Vector.png"
          alt="Wishlist"
          title="Add to Wish List"
          className="absolute top-4 right-3 hover:scale-90 transition-transform ease-in"
          onClick={handleAddToWishList}
        />
        <img
          src={imgUrl}
          alt={productName}
          className="max-w-[248px] max-h-[248px] w-full"
        />

        {/* product details and cart */}
        <section className="flex justify-between text-left relative font-bold">
          <div>
            <p className="font-extrabold text-[#00B207]">{productName}</p>
            {discount === true ? (
              <p>
                <span>N{discountPrice} </span>
                <span className="line-through text-gray-500">N{price}</span>
              </p>
            ) : (
              <p>N{price}</p>
            )}
            {rating > 0 ? <p>{"⭐".repeat(rating)}</p> : <p>No Rating!</p>}
          </div>

          {/* Add to Cart */}
          <img
            src="shopping-bag.png"
            alt="Add to Cart"
            className="absolute right-0 bottom-0 w-[30px] z-10 hover:scale-120"
            onClick={handleAddToCart}
          />
        </section>
      </div>
    </Link>
  );
};

export default Product;
