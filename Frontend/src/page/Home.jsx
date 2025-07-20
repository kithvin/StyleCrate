import React from "react";
import Mainbanner from "../components/Mainbanner";
import Casualinspirations from "../components/Casualinspirations";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <div className="mt-10">
      <Mainbanner />
      <Casualinspirations />
      <Categories/>
    </div>
  );
};

export default Home;
