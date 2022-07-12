import React, {useState, useEffect} from "react";
import axios from 'axios';
import ProductInfo from "./components/ProductInfo.jsx";
import Styles from "./components/Styles.jsx";
import "../assets/styles.css";



let Overview = (props) => {
   const [productID, setProductID] = useState(40351); // yeasy
  // const [productID, setProductID] = useState(40346); // joggers
  // const [productID, setProductID] = useState(40344); // onesie
  // const [productID, setProductID] = useState(40376); // oout of stock size
  // const [productID, setProductID] = useState(40348); // air force 1's
  // const [productID, setProductID] = useState(40353); // stones

  let get = (endpoint) => {
    return axios.get('http://localhost:3000/overview' + endpoint, {
        params: {
          id: productID
        }
    });
  }

  useEffect(() => {

  }, [productID])

  return (<>
    <Styles get={get.bind(this)}/>
    <ProductInfo get={get.bind(this)} />
  </>)
}

export default Overview;