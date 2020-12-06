import React from 'react';
import styl from './ModalWindow.module.css';

const ModalWindow = ({ handleDeleteLetter, handleEditLetter }) => {
  return (
    <div id="ModalWindowId" className={styl.modalWindow}>
      <div
        className={styl.editSvg}
        onClick={() => {
          handleEditLetter();
        }}
      ></div>
      <div
        className={styl.deleteSvg}
        onClick={() => {
          handleDeleteLetter();
        }}
      ></div>
    </div>
  );
};
export default ModalWindow;
