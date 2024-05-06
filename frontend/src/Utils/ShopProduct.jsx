/* eslint-disable react/prop-types */
// Product Component will be usable across different pages

import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { notifyError, notifyInfo } from "./notifications.js";
import { updateCartSuccess } from "../redux/slice/cartSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ShopProduct = ({ product }) => {
  const {
    _id,
    name,
    rating,
    imageUrl,
    inStock,
    currentPrice,
    isDiscount,
    discountPercent,
  } = product;

  //   Functions to handle Add to Cart and Add to Wish List
  const cart = useSelector((state) => state.cart.currentCart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToWishList = (e) => {
    e.preventDefault();
    alert("Will Implement Add to Wish List Here");
  };

  // Calculate final Price after Discount
  const finalPrice = currentPrice - currentPrice * (discountPercent / 100);

  // Handle AddToCart
  // Handle Add To Cart
  // Handle Add To Cart
  const handleAddToCart = (e) => {
    // Prevent event Propagation
    e.preventDefault();

    if (!inStock) {
      notifyInfo("Selected Product is out of Stock");
      return;
    }

    // If Cart is NULL (i.e no user login), then redirect to signin page
    if (!cart) {
      notifyError("Sorry, you need to be logged in.");
      navigate("/signin");
      return;
    }
    // Calculate final Price
    const sentPrice = isDiscount ? finalPrice : currentPrice;

    dispatch(
      updateCartSuccess({
        product: { id: _id, quantity: 1 },
        amount: sentPrice * 1,
      })
    );
  };

  return (
    <Link to={`/shop/product/${_id}`}>
      <div className="w-[248px] h-[339]  p-4 relative hover:shadow-lg border-2 border-opacity-65 hover:border-green-700 transition-all ease-in duration-500 bg-white">
        {/*  */}
        {/* Conditionally render Out of Stock Label */}
        {inStock === false && (
          <p className=" bg-red-600 w-fit p-2 text-xs text-white rounded-lg absolute top-4 left-3 hover:opacity-80 transition-opacity ease-in">
            OUT OF STOCK
          </p>
        )}
        {/*  */}
        {/* Condtitionally render Discount Label */}
        {isDiscount === true && (
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
        <LazyLoadImage
          src={imageUrl}
          alt={name}
          className="max-w-[248px] max-h-[248px] w-full object-cover"
        />

        {/* product details and cart */}
        <section className="flex justify-between text-left relative font-bold">
          <div>
            <p className="font-extrabold text-[#00B207]">{name}</p>
            {isDiscount === true ? (
              <p>
                <span>
                  N
                  {(
                    currentPrice -
                    (currentPrice * discountPercent) / 100
                  ).toFixed(2)}{" "}
                </span>
                <span className="line-through text-gray-500">
                  N{currentPrice}
                </span>
              </p>
            ) : (
              <p>N{currentPrice}</p>
            )}
            {rating > 0 ? <p>{"⭐".repeat(rating)}</p> : <p>No Rating!</p>}
          </div>

          {/* Add to Cart */}
          <img
            src="shopping-bag.png"
            alt="Add to Cart"
            className={` ${
              cart
                ? cart.products.some((item) => item.id === _id)
                  ? "bg-red-600 p-2 rounded-lg brightness-200"
                  : ""
                : ""
            } absolute right-0 bottom-0 w-[30px] z-10 hover:scale-120`}
            onClick={handleAddToCart}
          />
        </section>
      </div>
    </Link>
  );
};

export default ShopProduct;
