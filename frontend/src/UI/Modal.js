import React from 'react';
import './modal.css';
import { useState } from 'react';
const Modal = ({ setValue, value, submitData }) => {
  return (
    <div>
      <a
        href='#modal-opened'
        className='link-1'
        id='modal-closed'>
        Add Address
      </a>
      <div
        className='modal-container'
        id='modal-opened'>
        <div className='modal'>
          <div className='modal__details'>
            <h1 className='modal__title'>Modal Title</h1>
            <p className='modal__description'>Enter Your Address details</p>
          </div>
          <div className='address_container'>
            <input
              className='modal_input'
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              className='modal__btn'
              onClick={submitData}>
              Submit &rarr;
            </button>
          </div>
          <a
            href='#modal-closed'
            className='link-2'></a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
