import React, {
  Component, useState, useEffect, useRef,
} from 'react';
import axios from 'axios';
import OverviewPage from './OverviewPage.jsx';

function Overview(props) {
  const [product, setProduct] = useState({});
  const [productStyle, setProductStyle] = useState({});
  useEffect(() => {
    const params = {
      params: {
        id: props.id,
      },
    };
    axios.get('/details', params).then((data) => {
      setProduct({data});
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <div className="overview">
      {Object.keys(product).length > 0 ? <OverviewPage data={product}/> : null}
    </div>
  );
}

export default Overview;
