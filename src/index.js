import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.module.css';

const App = () => {
  return (
    <div className={styles.view}>
      Business
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
