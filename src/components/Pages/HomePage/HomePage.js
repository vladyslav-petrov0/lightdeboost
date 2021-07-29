import React from "react";

import Intro from "../../Intro/Intro.js";
import ItemsTabs from "../../ItemsTabs/ItemsTabs.js";
import LimitedSale from "../../LimitedSale/LimitedSale.js";
import OurProducts from "../../OurProducts/OurProducts";
import SubscribeSection from "../../SubscribeSection/SubscribeSection";
import TopSale from "../../TopSale/TopSale";
import Advantages from "../../Advantages/Advantages";

import "./HomePage.scss";

const HomePage = () => {
  return (
    <main>
      <Intro className="HomePageIntro" />
      <ItemsTabs className="HomePageTabs" />
      <LimitedSale className="HomePageLimitedSale" />
      <OurProducts className="HomePageProducts" />
      <SubscribeSection className="HomePageSubscribe" />
      <TopSale className="HomePageTopSale" />
      <Advantages className="HomePageAdvantages" />
    </main>
  );
};

export default HomePage;
