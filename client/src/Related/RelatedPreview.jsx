import React, {
  Component, useState, useEffect, useRef,
} from 'react';

function RelatedPreview({url}) {
  function hidePreview() {
    const modal = document.getElementsByClassName('preview')[0];
    modal.classList.add('hidden');
  }

  return (
    <div className="preview hidden">
      <div className="preview-background" onClick={(e) => {
        hidePreview(e);
      }}
      >
        <img src={url} className="preview-content"/>
      </div>
    </div>
  );
}


export default RelatedPreview;
