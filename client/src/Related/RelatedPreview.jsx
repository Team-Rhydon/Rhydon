import React from 'react';

function RelatedPreview({url, setPreview}) {
  return (
    <div className="preview hidden" >
      <div className="preview-background" onClick={(e) => {
        setPreview({});
      }}
      >
        <img alt='preview content' src={url} className="preview-content" onClick={(e) => {
          setPreview({});
        }}/>
      </div>
    </div>
  );
}

export default RelatedPreview;
