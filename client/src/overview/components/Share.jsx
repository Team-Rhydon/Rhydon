import React from 'react';
import {FaFacebookF, FaTwitter, FaPinterestP} from 'react-icons/fa';
import { FacebookShareButton, TwitterShareButton, PinterestShareButton  } from 'react-share';
// import 'share-button-links-react/main.css'

const Share = (props) => {
  return (
    <div className="share-icons">
      <FacebookShareButton
        url='https://developers.facebook.com/docs/plugins/'
        id="facebook"><FaFacebookF />
      </FacebookShareButton>
      <TwitterShareButton
        url='https://twitter.com/intent/tweet'
        id="twitter"><FaTwitter />
      </TwitterShareButton>
      <PinterestShareButton
        url='http://pinterest.com/pin/create/button'
        id="pinterest"><FaPinterestP />
      </PinterestShareButton>
    </div>

  );
};

export default Share;
