import React, {useState, useEffect, useRef, useLayoutEffect} from 'react';
import axios from 'axios';
import RelatedCard from './RelatedCard.jsx';
import RelatedModal from './RelatedModal.jsx';
import RelatedPreview from './RelatedPreview.jsx';
import nextArrow from '../assets/icons/chevron-right-solid.svg';
import prevArrow from '../assets/icons/chevron-left-solid.svg';

function Related({product, updateCurrentProduct, hidePreview}) {
  if(!product) {return '';}
  const [cards, setCards] = useState({});
  const [modalContent, setModalContent] = useState({});
  const carouselPos = useRef({});
  const [imagePreview, setPreview] = useState({});

  useLayoutEffect(() => {
    const params = {
      params: {
        id: product.details.id,
      },
    };
    axios.get('/related', params).then(({data}) => {
      carouselPos.current = {};
      const positions = ['related-p1', 'related-p2', 'related-p3', 'related-p4'];
      const keys = Object.keys(data);
      const keyLen = keys.length;
      // there could be less than 4 related items
      const minPos = Math.min(4, keyLen);
      // set carousel position
      for (let i = 0; i < minPos; i++) {
        carouselPos.current[keys[i]] = positions[i];
      }
      if (keyLen > 4) {
        for (let i = 4; i < keyLen; i++) {
          carouselPos.current[keys[i]] = 'related-pright';
        }
        document.getElementsByClassName('carousel-next-container')[0].classList.remove('hidden');
      }
      setCards(data);
    }).catch((err) => {
      console.log(err);
    });
  }, [product]);

  useLayoutEffect(() => {
    if (Object.keys(imagePreview).length !== 0) {
      const modal = document.getElementsByClassName('preview')[0];
      modal.classList.remove('hidden');
    }
  }, [imagePreview]);

  useLayoutEffect(() => {
    if (Object.keys(modalContent).length !== 0) {
      const modal = document.getElementsByClassName('modal')[0];
      modal.classList.remove('hidden');
    }
  }, [modalContent]);

  function showModal(e, id) {
    setModalContent({current: product, compare: cards[id]});
  }

  function hasRightSlide() {
    return document.getElementsByClassName('related-pright').length > 0;
  };
  function hasLeftSlide() {
    return document.getElementsByClassName('related-pleft').length > 0;
  };

  function relatedBtnCheck() {
    if (hasLeftSlide()) {
      if (document.getElementsByClassName('carousel-prev-container')[0].classList.contains('hidden')) {
        document.getElementsByClassName('carousel-prev-container')[0].classList.remove('hidden');
      }
    } else {
      if (!document.getElementsByClassName('carousel-prev-container')[0].classList.contains('hidden')) {
        document.getElementsByClassName('carousel-prev-container')[0].classList.add('hidden');
      }
    }

    if (hasRightSlide()) {
      if (document.getElementsByClassName('carousel-next-container')[0].classList.contains('hidden')) {
        document.getElementsByClassName('carousel-next-container')[0].classList.remove('hidden');
      }
    } else {
      if (!document.getElementsByClassName('carousel-next-container')[0].classList.contains('hidden')) {
        document.getElementsByClassName('carousel-next-container')[0].classList.add('hidden');
      }
    }
  };

  function moveRelatedLeft(e) {
    e.preventDefault();
    if (hasLeftSlide()) {
      const positions = {
        'related-p4': 'related-pright',
        'related-p3': 'related-p4',
        'related-p2': 'related-p3',
        'related-p1': 'related-p2',
        'related-pleft': 'related-p1',
      };
      for (const pos in positions) {
        const elements = document.getElementsByClassName(pos);
        const element = elements[elements.length - 1];
        updatePosition(element, pos, positions[pos]);
      }
    }
    relatedBtnCheck();
  }

  function moveRelatedRight(e) {
    e.preventDefault();
    if (hasRightSlide()) {
      const positions = {
        'related-p1': 'related-pleft',
        'related-p2': 'related-p1',
        'related-p3': 'related-p2',
        'related-p4': 'related-p3',
        'related-pright': 'related-p4',
      };
      for (const pos in positions) {
        const element = document.getElementsByClassName(pos)[0];
        updatePosition(element, pos, positions[pos]);
      }
    }
    relatedBtnCheck();
  }

  function updatePosition(element, curPosition, newPosition) {
    element.classList.remove(curPosition);
    element.classList.add(newPosition);
  }

  return (
    <div className="related" width="1175" height="480">
      <div className="title-div">
        <h5 className="title">Related Products</h5>
        <p className="title-lines"></p>
      </div>
      <div className="carousel">
        <div onClick={(e) => moveRelatedLeft(e)} className='carousel-prev-container hidden'>
          <img width='94' height='150' alt='previous arrow' src={prevArrow} className="carousel-prev center-vert-horz"/>
        </div>
        <div className="carousel-inner"  width="300" height="400">
          {Object.keys(cards).map((id, index) => <RelatedCard
            key={id} id={id} showModal={showModal} card={cards[id]}
            updateCurrentProduct={updateCurrentProduct}
            setPreview={setPreview}
            position={carouselPos.current[id]} />)}
        </div>
        <div onClick={(e) => moveRelatedRight(e)} className='carousel-next-container hidden'>
          <img width='94' height='150' alt='next arrow' src={nextArrow} className="carousel-next center-vert-horz"/>
        </div>
      </div>
      {Object.keys(imagePreview).length !== 0 ? <RelatedPreview url={imagePreview} setPreview={setPreview}/> : null}
      {Object.keys(modalContent).length !== 0 ? <RelatedModal modalContent={modalContent} /> : null}
    </div>
  );
}

export default Related;
