import React from 'react';
import {FaFacebookF, FaTwitter, FaPinterestP} from 'react-icons/fa';

const Share = (props) => {
  return (
    <div className="share-icons">
      <button className="facebook"><FaFacebookF /></button>
      <button className="twitter"><FaTwitter /></button>
      <button className="pinterest"><FaPinterestP /></button>
    </div>
  );
};

export default Share;
