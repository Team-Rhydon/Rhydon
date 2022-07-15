import React, {
  Component, useState, useEffect, useRef,
} from 'react';

function RelatedPreview({url, setPreview}) {
  function hidePreview() {
    const modal = document.getElementsByClassName('preview')[0];
    modal.classList.add('hidden');
  }

  return (
    <div className="preview hidden" >
      <div className="preview-background" onClick={(e) => {
        setPreview({});
      }}
      >
        <img src={url} className="preview-content" onClick={(e) => {
          setPreview({});
        }}/>
      </div>
    </div>
  );
}


export default RelatedPreview;
