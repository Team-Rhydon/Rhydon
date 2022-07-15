import React, {
  Component, useState, useEffect, useRef,
} from 'react';
function RelatedModalContent({curName, compName, characteristics}) {
  return (
    <table className="modal-content">
      <thead>
        <tr>
          <th>Comparing</th>
        </tr>
        <tr>
          <th>{curName}</th>
          <th></th>
          <th>{compName}</th>
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
