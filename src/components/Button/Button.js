import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ onBtnClick, text }) => (
  <button className={styles.btn} type="button" onClick={onBtnClick}>
    {text}
  </button>
);

Button.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
