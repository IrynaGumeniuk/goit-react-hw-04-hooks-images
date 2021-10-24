import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import styles from './Loader.module.css';
export default class Load extends React.Component {
  //other logic
  render() {
    return (
      <div className={styles.loader}>
        <Loader
          type="TailSpin"
          color="#00BFFF"
          height={80}
          width={80}
          timeout={3000} //3 secs
        />
      </div>
    );
  }
}
