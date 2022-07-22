import React from 'react';
import {FaFacebookF, FaTwitter, FaPinterestP} from 'react-icons/fa';
import { FacebookShareButton, TwitterShareButton, PinterestShareButton  } from 'react-share-rc-18';

const Share = (props) => {
  return (
    <div className="share-icons">
      <FacebookShareButton
        url='https://developers.facebook.com/docs/plugins/'
        id="facebook"><FaFacebookF style={{alignSelf: "center"}}/>
      </FacebookShareButton>
      <TwitterShareButton
        url='https://twitter.com/intent/tweet'
        id="twitter"><FaTwitter style={{alignSelf: "center"}}/>
      </TwitterShareButton>
      <PinterestShareButton
        url='//pinterest.com/pin/create/link/?url=http%3A%2F%2Fwww.flickr.com%2Fphotos%2Fkentbrew%2F6851755809%2F&media=http%3A%2F%2Ffarm8.staticflickr.com%2F7027%2F6851755809_df5b2051c9_z.jpg&description=Next%20stop%3A%20Pinterest'
        id="pinterest"><FaPinterestP style={{alignSelf: "center"}}/>
      </PinterestShareButton>
    </div>

  );
};

export default Share;
