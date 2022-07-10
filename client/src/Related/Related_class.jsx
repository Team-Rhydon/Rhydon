import React, {Component, useState, useEffect} from 'react';
import RelatedCard from './RelatedCard.jsx'
import axios from 'axios';

class Related extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    let params = {
      params: {
        id: '40345'
      }
    }
    axios.get('/related', params).then(({data}) => {
      this.setState((data));
    }).catch((err) => {
      console.log(err);
    })
  };

render() {
  return (
    <div className="Related">
      <h5 className ='module'>RELATED PRODUCTS</h5>
      {Object.keys(this.state).map((key, index) =>
       <RelatedCard key={key} card={this.state[key]} />
      )}
    </div>
  );
}
}

export default Related;
