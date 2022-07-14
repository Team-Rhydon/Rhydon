import React, {
  Component, useState, useEffect, useRef,
} from 'react';
function RelatedModalContent({modalContent, characteristics}) {
  return (
    <table className="modal-content">
      <thead>
        <tr>
          <th>Comparing</th>
        </tr>
        <tr>
          <th>{modalContent[1].name}</th>
          <th></th>
          <th>{modalContent[0].name}</th>
        </tr>
      </thead>
      <tbody>
        {
          Object.keys(characteristics).map((key, index) => {
            return (<tr key={key}>
              <td>{characteristics[key][0]}</td>
              <td>{characteristics[key][1]}</td>
              <td>{characteristics[key][2]}</td>
            </tr>);
          })
        }
      </tbody>
    </table>
  );
}


export default RelatedModalContent;
