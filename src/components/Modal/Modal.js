import {useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

export default function Modal ({onCloseModal, children}) {

useEffect(()=>{
  window.addEventListener('keydown', onKeydownClick)
  return ()=>{window.removeEventListener('keydown',onKeydownClick)}
})


 const onKeydownClick = e => {
    if (e.code === 'Escape') {
      onCloseModal();
    }
  };
    
    return (
      <div className={styles.Overlay} onClick={onCloseModal}>
        <div className={styles.Modal}>{children}</div>
      </div>
    );
  }


Modal.propTypes = {
  onCloseModal: PropTypes.func,
};