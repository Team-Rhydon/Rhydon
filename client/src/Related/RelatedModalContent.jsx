import React from 'react';
import image_placeholder from '../assets/icons/No-Image-Placeholder.svg';
import closeBtn from '../assets/icons/xmark-solid.svg';
import logo from '../assets/logos/rhydon-logos_black 2.png';
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
      <tr className='btn-container remove-outfit'>
        <td>
        <img src={closeBtn} className="close-btn center-vert-horz"/>
        </td>
        </tr>
      </tbody>
      {/* <thead>
        <tr>
          <th colSpan='1' className='table-title'>Comparing</th>
        </tr>
      </thead> */}
      <tbody>
        <tr>
            <td><img className='thumb' src={thumbnails['current']}/></td>
            <td>
              <div>
                <p className='table-logo'>Comparing</p>
                <img className='center-horz-vert table-logo' src={logo}/>
              </div>

              </td>
            <td><img className='thumb' src={thumbnails['compare']}/></td>
        </tr>
        <tr>
        <td className='table-header'>
              {curName}
            </td>
            <td className='table-header table-characteristic'>Characteristics</td>
            <td className='table-header'>
              {compName}
            </td>
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
