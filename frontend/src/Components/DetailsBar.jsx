// Component containing Highlights of details of the Shop

const DetailsBar = () => {
  return (
    <div className="max-w-screen-xl w-full mt-4 shadow-xl p-3 rounded-xl grid grid-cols-2 gap-y-3  sm:gap-y-0 sm:grid-cols-4 cursor-default  dark:text-white">
      {/* Shipping */}
      <div className="flex gap-3 text-xs">
        <img
          src="/truck.png"
          alt="Free Shipping"
          className="w-[35px] h-[35px]"
        />
        <div>
          <p className="font-extrabold">Free Shipping</p>
          <p className="text-[10px] sm:text-xs">
            Free shipping on all your orders
          </p>
        </div>
      </div>
      {/* Customer */}
      <div className="flex gap-3 text-xs">
        <img
          src="/call.png"
          alt="Customer Support"
          className="w-[35px] h-[35px]"
        />
        <div>
          <p className="font-extrabold">Customer Support 24/7</p>
          <p className="text-[10px] sm:text-xs">Instant access to Support</p>
        </div>
      </div>
      {/* Secure Payment */}
      <div className="flex gap-3 text-xs">
        <img
          src="/shopping-bag.png"
          alt="Secure Payment"
          className="w-[35px] h-[35px]"
        />
        <div>
          <p className="font-extrabold">100% Secure Payment</p>
          <p className="text-[10px] sm:text-xs">
            We ensure your payment is secure
          </p>
        </div>
      </div>
      {/* Money-Back Guaranteed */}
      <div className="flex gap-3 text-xs">
        <img
          src="/package.png"
          alt="Money Back"
          className="w-[35px] h-[35px]"
        />
        <div>
          <p className="font-extrabold">Money-Back Guaranteed</p>
          <p className="text-[10px] sm:text-xs">
            30 Days Money-Back Guaranteed
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsBar;
