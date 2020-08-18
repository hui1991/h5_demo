import React from 'react';
import styles from './index.less'


const Mobile = () => {
  return(
    <div>
      <div className={styles.top}/>
      <div className={styles.mobile}>
        mobile
      </div>
      <button className={styles.button}>
        hello
      </button>
    </div>
  )
};

window.mobileCallJs = () => {
  alert('mobileCallJs')
};

export default Mobile;
