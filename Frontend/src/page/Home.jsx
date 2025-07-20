import React from "react";
import Mainbanner from "../components/Mainbanner";
import Casualinspirations from "../components/Casualinspirations";
import Categories from "../components/Categories";
import TrendingSection from "../components/TrendingSection";
import BottomBanner from "../components/BottomBanner";

const Home = () => {
  return (
    <div className="mt-10">
      <Mainbanner />
      <Casualinspirations />
      <Categories/>
      <TrendingSection />
      <BottomBanner/>
    </div>
  );
};

export default Home;
