// Featured Section
// This will house another component that receives props and children to use
import Feature from "../Utils/Feature";
import { CountDown, StartPrice, DiscountOff } from "../Utils/Widgets001.jsx";

//  topText, mainText, link, imgLink, children

const FeaturedDeals = () => {
  return (
    <div className=" flex flex-col items-center  sm:grid sm:grid-cols-3 gap-4 mt-8 max-w-screen-xl w-full">
      {/* Best Prices Card */}
      <Feature
        topText={"BEST DEALS"}
        mainText={"Sale of the Month"}
        link="/shop/bestdeals"
        imgLink="/sales-month.png"
      >
        <CountDown />
      </Feature>

      {/* Fat Free Meat Card */}
      <Feature
        topText={"85% FAT FREE"}
        mainText={"Low-Fat Meat"}
        link="/shop/fatfree"
        imgLink="/meat-free.png"
      >
        <StartPrice />
      </Feature>

      {/* Summer Sale Card */}
      <Feature
        topText={"SUMMER SALE"}
        mainText={"100% Fresh Fruit"}
        link="/shop/freshfruit"
        imgLink="/summer-deals.png"
      >
        <DiscountOff />
      </Feature>
    </div>
  );
};

export default FeaturedDeals;

// Mini Support Components
