import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import FlashSales from "./FlashProduct/FlashSales";

const Home = () => {
  return (
    <div className="mb-8 lg:mb-12 space-y-6 lg:space-y-12">
      <Banner />
      <FlashSales />
      <Categories />
    </div>
  );
};

export default Home;
