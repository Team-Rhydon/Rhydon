import React, {
  Component, useState, useEffect, useRef,
} from 'react';

import RelatedModalContent from './RelatedModalContent.jsx';
function RelatedModal({modalContent}) {
  function hideModal(e) {
    e.preventDefault();
    const modal = document.getElementsByClassName('modal')[0];
    modal.classList.add('hidden');
  }
  function FormatCharacteristics(modalContent) {
    const characteristics = {};
    if (modalContent.length > 0) {
      for (let i = 0; i < modalContent[1].features.length; i++) {
        const characteristic = modalContent[1].features[i].feature;
        let value = modalContent[1].features[i].value;
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
      const compFeatures = modalContent[0].features;
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
        let compCharacteristic = characteristics[characteristic][0];
        if (compCharacteristic === value) {
          characteristics[characteristic][0] = '&#10003';
          characteristics[characteristic][1] = characteristic;
          characteristics[characteristic][2] = '&#10003';
        } else if (compCharacteristic === undefined || compCharacteristic === null ) {
          characteristics[characteristic][0] = '';
          characteristics[characteristic][1] = characteristic;
          characteristics[characteristic][2] = value;
        } else {
          characteristics[characteristic][1] = characteristic;
          characteristics[characteristic][2] = value;
        }
      }
    }
    return characteristics;
  }

  let characteristics = FormatCharacteristics(modalContent);
  return (
    <div className="modal hidden">
      <div
        className="modal-background"
        onClick={(e) => {
          hideModal(e);
        }}
      >
        {Object.keys(characteristics).length > 0 ? <RelatedModalContent modalContent={modalContent} characteristics={characteristics}/> : null}
      </div>
    </div>
  );
}


export default RelatedModal;
