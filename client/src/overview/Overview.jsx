import React, {useState, useEffect} from "react";
import ProductInfo from "./components/ProductInfo.jsx";
import Styles from "./components/Styles.jsx";
import "../assets/styles.css";

let Overview = ({reviews, styles, details}) => {

  return (<>
    <Styles styles={styles}/>
    <ProductInfo reviews={reviews} details={details} />
  </>)
}

export default Overview;