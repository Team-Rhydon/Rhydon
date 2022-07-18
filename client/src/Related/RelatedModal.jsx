import React from 'react';
import RelatedModalContent from './RelatedModalContent.jsx';

function RelatedModal({modalContent}) {
  const curName = modalContent.current.details.name;
  const compName = modalContent.compare.name;

  if (!modalContent) {
    return;
  }

  function hideModal(e) {
    e.preventDefault();
    const modal = document.getElementsByClassName('modal')[0];
    modal.classList.add('hidden');
  }

  function formatCharacteristics(modalContent) {
    const characteristics = {};
    const curFeatures = modalContent.current.details.features;
    const compFeatures = modalContent.compare.features;
    for (let i = 0; i < curFeatures.length; i++) {
      const characteristic = curFeatures[i].feature;
      let value = curFeatures[i].value;
      if (value === null) {
        value = '';
      }
      if (!(characteristics[characteristic])) {
        characteristics[characteristic] = [];
      }
      characteristics[characteristic][0] = value;
      characteristics[characteristic][1] = characteristic;
      characteristics[characteristic][2] = '';
    }
    for (let i = 0; i < compFeatures.length; i++) {
      const characteristic = compFeatures[i].feature;
      let value = compFeatures[i].value;
      if (value === null) {
        value = '';
      }
      if (!(characteristics[characteristic])) {
        characteristics[characteristic] = [];
      }
      // if they have the same characteristic and value
      const compCharacteristic = characteristics[characteristic][0];
      const char = characteristics[characteristic];
      if (compCharacteristic === undefined || compCharacteristic === null ) {
        char[0] = '';
        char[1] = characteristic;
        char[2] = value;
      } else {
        char[1] = characteristic;
        char[2] = value;
      }
    }
    return characteristics;
  }
  const characteristics = formatCharacteristics(modalContent);
  const thumbnails = {};
  thumbnails['current'] = modalContent.current.styles.results[0].photos[0].thumbnail_url;
  thumbnails['compare'] = modalContent.compare.thumbnail;
  return (
    <div className="modal hidden">
      <div
        className="modal-background"
        onClick={(e) => {
          hideModal(e);
        }}
      >
        {Object.keys(characteristics).length > 0 ? <RelatedModalContent curName={curName} compName={compName} characteristics={characteristics} thumbnails={thumbnails}/> : null}
      </div>
    </div>
  );
}


export default RelatedModal;
