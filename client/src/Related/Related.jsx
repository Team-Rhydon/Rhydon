import React, {Component, useState, useEffect} from 'react';
import RelatedCard from './RelatedCard.jsx'
import axios from 'axios';

function Related(props) {
  // similar to componentDidMount
  const [cards, setCards] = useState({});
  useEffect(() => {
    let params = {
      params: {
        id: '40345'
      }
    }
    axios.get('/related', params).then(({data}) => {
      setCards(data);
    }).catch((err) => {
      console.log(err);
    })
  },[]);

    return (
      <div className="Related">
        <h5 className ='module'>RELATED PRODUCTS</h5>
        {Object.keys(cards).map((key, index) =>
         <RelatedCard key={key} card={cards[key]} />
        )}
      </div>
    );
}

export default Related;
