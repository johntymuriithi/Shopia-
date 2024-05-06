// Featured Products Component for home page

import Product from "../Utils/Product.jsx";
import featuredproducts from "../Utils/featureddata.js";

const FeaturedProducts = () => {
  return (
    <div className="max-w-screen-xl w-full text-center mt-8 mb-4">
      <p className="text-xs text-[#212221] dark:text-darkTer">PRODUCTS</p>
      <h2 className="text-4xl font-extrabold text-[#00B207]">
        Our Featured Products
      </h2>
      <section
        className="flex flex-row overflow-x-scroll gap-2 mt-2"
        id="featured-container"
      >
        {featuredproducts.map((product, idx) => (
          <Product
            key={idx}
            imgUrl={product.imgUrl}
            productName={product.productName}
            price={product.price}
            rating={product.rating}
            productId={product.productId}
            inStock={product.inStock}
            discount={product.discount}
            discountPrice={product.discountPrice}
            discountPercent={product.discountPercent}
            category={product.category}
            tags={product.tags}
          />
        ))}
      </section>
    </div>
  );
};

export default FeaturedProducts;
