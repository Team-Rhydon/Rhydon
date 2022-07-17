import React from 'react';
import image_placeholder from '../assets/icons/No-Image-Placeholder.svg';
function RelatedModalContent({curName, compName, characteristics, thumbnails}) {
  if (!thumbnails.current) {
    thumbnails.current = image_placeholder;
  }
  if (!thumbnails.compare) {
    thumbnails.compare = image_placeholder;
  }
  return (
    <table className="modal-content">
      <tbody>
        <tr>
          <th colSpan='3' className='table-title'>Comparing</th>
        </tr>
        <tr>
          <th>
            <div>
              <img className='thumb' src={thumbnails['current']}/>
            </div>
            <div className='table-header'>
              {curName}
            </div>
          </th>
          <td></td>
          <th>
            <div>
              <img className='thumb' src={thumbnails['compare']}/>
            </div>
            <div className='table-header'>
              {compName}
            </div>
          </th>
        </tr>
        {
          Object.keys(characteristics).map((key, index) => {
            return (<tr key={key}>
              <td className='table-current-product-column' >{characteristics[key][0]}</td>
              <td className='table-characteristic'>{characteristics[key][1]}</td>
              <td className='table-compare-product-column'>{characteristics[key][2]}</td>
            </tr>);
          })
        }
      </tbody>
    </table>
  );
}


export default RelatedModalContent;
