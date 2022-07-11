import React, {useState, useEffect} from "react";
import axios from 'axios'
import ProductInfo from "./components/ProductInfo.jsx";
import Styles from "./components/Styles.jsx";

let Overview = (props) => {
  const [productID, setProductID] = useState(40351);

  let get = (endpoint) => {
    return axios.get('http://localhost:3000/overview' + endpoint, {
        params: {
          id: productID
        }
    });
  }

  return (<>
    <Styles get={get.bind(this)}/>
    <ProductInfo get={get.bind(this)} />
  </>)
}

export default Overview;