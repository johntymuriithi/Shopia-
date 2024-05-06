// Component on Home Screen that directs to the Shop
// And then Displays Appropriate Categories selected
// Make use of useParams hook

import categorydata from "../Utils/categorydata.js";
import CategoryCard from "../Utils/CategoryCard.jsx";

const ShopByCategories = () => {
  return (
    <div className="max-w-screen-xl w-full text-center mt-6">
      <p className="text-xs text-[#212221] dark:text-darkTer">CATEGORY</p>
      <h2 className="text-4xl font-extrabold text-[#00B207]">
        Shop by Top Categories
      </h2>
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6  gap-2 grid-flow-row mt-2">
        {categorydata.map((category, idx) => (
          <CategoryCard
            key={idx}
            imageUrl={category.imgUrl}
            link={category.link}
            description={category.description}
          />
        ))}
      </section>
    </div>
  );
};

export default ShopByCategories;
