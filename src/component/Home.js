import React, { useState } from "react";
import Drawer from "../@shared/Drawer";
import Header from "../@shared/Header";
import ProductList from "./ProductList";
import styles from "./Home.module.css"; // Import the CSS module
import Sort from "../@shared/Sort";

const Home = () => {
  return (
    <div>
      <Header />
      <div className={styles.filterProduct}>
        <Drawer />
        <Sort />
      </div>

      <ProductList />
    </div>
  );
};

export default Home;
