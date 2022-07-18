import React, {useState, useEffect} from "react";
import ProductInfo from "./components/ProductInfo.jsx";
import Styles from "./components/Styles.jsx";

let Overview = ({reviews, styles, details}) => {

  return (<div className="overview-widget">
    <Styles styles={styles}/>
    <ProductInfo reviews={reviews} details={details} />
  </div>)
}

export default Overview;