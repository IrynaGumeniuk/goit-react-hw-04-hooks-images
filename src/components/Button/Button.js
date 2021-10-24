import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ onBtnClick, text }) => (
  <button className={styles.Button} type="button" onClick={onBtnClick}>
    {text}
  </button>
);

Button.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
