import React from 'react';
import './modal.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModalVisibility } from '../reduxStore/uiSlice';
const Modal = ({
  setValue,
  value,
  submitData,
  inputType,
  openButtonName,
  contentTitle,
  contentDescription,
}) => {
  const dispatch = useDispatch();
  return (
    <div>
      <a
        href='#modal-opened'
        onClick={() => dispatch(setModalVisibility(true))}>
        {openButtonName}
      </a>
      <div
        className='modal-container'
        id='modal-opened'>
        <div className='modal'>
          <div className='modal__details'>
            <h1 className='modal__title'>{contentTitle}</h1>
            <p className='modal__description'>{contentDescription}</p>
          </div>
          <div className='address_container'>
            {inputType === 'dropdown' ? (
              <select
                className='modal_input'
                onChange={(e) => setValue(e.target.value)}
                name='orderStatus'
                id='orderStatus'>
                <option value='ordered'>ordered</option>
                <option value='shipped'>shipped</option>
                <option value='delivered'>delivered</option>
              </select>
            ) : (
              <input
                type={inputType}
                className='modal_input'
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            )}
            <a href='#modal-closed'>
              <button
                className='modal__btn'
                onClick={submitData}>
                Submit &rarr;
              </button>
            </a>
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
