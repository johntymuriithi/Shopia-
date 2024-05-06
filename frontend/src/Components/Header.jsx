import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut, setTheme } from "../redux/slice/userSlice.js";
import { deleteCartOnSignOut } from "../redux/slice/cartSlice.js";
import { notifyError } from "../Utils/notifications.js";
import { useEffect } from "react";

const Header = () => {
  // Brint in user
  const User = useSelector((state) => state.user.currentUser);
  const Cart = useSelector((state) => state.cart.currentCart);
  const lightTheme = useSelector((state) => state.user.lightTheme);

  // instantiate dispatch function
  const dispatch = useDispatch();

  // instantiate navigate function
  const navigate = useNavigate();

  // Define Functions

  const handleSearch = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const html = document.querySelector("html");

    if (lightTheme === true) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }

    return;
  }, [lightTheme]);

  // handle SignOut

  const handleSignOut = async () => {
    try {
      await fetch("/api/auth/signout");
    } catch (err) {
      notifyError(err.message);
      return;
    }
    dispatch(signOut());
    dispatch(deleteCartOnSignOut());
    navigate("/");
  };

  // Return JSX
  return (
    <header className="flex flex-col w-full items-center box-border dark:bg-white">
      <div className="flex justify-between item-center p-6 w-[100%] max-w-screen-xl">
        <Link to="/">
          <h1 className=" text-xl sm:text-3xl font-black ">
            <span className="text-[#00B207]">Green</span>Shopper 🌿
          </h1>
        </Link>

        {/* Form goes here */}
        <form
          onSubmit={handleSearch}
          className="sm:text-xs md:text-sm hidden sm:block"
        >
          <input
            type="text"
            name="search"
            placeholder="Search Available Products"
            className="p-2 outline outline-1 outline-slate-400 rounded-s-lg"
            required
          />
          <input
            type="submit"
            value="Search"
            onChange={() => ""}
            className="bg-[#00B207] text-white p-2  outline outline-1 outline-[#00B207] rounded-e-lg hover:cursor-pointer hover:opacity-90 transition-opacity ease-out"
          />
        </form>

        {/* Wishlist and Shopping Cart */}
        <section className="flex justify-between gap-2 ">
          <img
            src={!lightTheme ? "light-dark.jpeg" : "/dark-light.png"}
            alt="Wish List"
            title="Wish List"
            className=" w-[25px] h-[25px] mt-[3px]"
            onClick={() => dispatch(setTheme(!lightTheme))}
          />
          <div className="flex justify-between gap-3 h-[80%] relative">
            <p
              id="Shopping-Cart-Count"
              className="bg-[#00B207] rounded-full p-1 absolute -top-1 w-5 h-5 text-xs text-center text-white left-4"
            >
              {Cart ? Cart.products.length : 0}
            </p>
            <img src="/Bag.png" alt="Cart" />
            <p className="font-bold">
              {Cart ? "#" + Cart.totalAmount : "#0.0"}
            </p>
          </div>
        </section>
      </div>

      {/* Navigation Section */}
      <nav className="w-full flex justify-center bg-black dark:bg-darkPry text-slate-100 py-4 text-[10px] sm:text-base">
        <div className="flex justify-between w-[100%] max-w-screen-xl px-6">
          <ul className="flex flex-row justify-between gap-7 cursor-pointer">
            <Link to="/">
              <li className="hover:text-[#00B207] transition-colors ease-in">
                Home
              </li>
            </Link>

            <Link to="/shop">
              <li className="hover:text-[#00B207] transition-colors ease-in">
                Shop
              </li>
            </Link>

            <Link to={User ? "/account" : "/signup"}>
              <li className="hover:text-[#00B207] transition-colors ease-in">
                {User ? "Account" : "Get Started"}
              </li>
            </Link>

            {/* For Space don't render about us for admin */}
            {User?.isAdmin === true ? (
              ""
            ) : (
              <Link to="/about-us">
                <li className="hover:text-[#00B207] transition-colors ease-in">
                  About Us
                </li>
              </Link>
            )}

            {!User ? (
              <Link to="/contact-us">
                <li className="hover:text-[#00B207] transition-colors ease-in">
                  Contact Us
                </li>
              </Link>
            ) : (
              <li
                className="hover:text-red-500 font-bold transition-opacity ease-in"
                onClick={handleSignOut}
              >
                Sign Out
              </li>
            )}
          </ul>

          {/* Telephone details or admin button*/}
          {User ? (
            User.isAdmin ? (
              <Link to="/upload-product">
                <input
                  type="button"
                  value="Upload Products"
                  className="p-2 h-full bg-[#00B207] rounded-lg text-xs sm:text-md cursor-pointer hover:scale-110 transition ease-in"
                />
              </Link>
            ) : (
              <Link to="/faqs">
                <p className="font-bold text-white">FAQs</p>
              </Link>
            )
          ) : (
            <Link to="/faqs">
              <p className="font-bold text-white">FAQs</p>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
