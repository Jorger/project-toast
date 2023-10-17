import { ToastContext } from '../ToastProvider';
import Button from '../Button';
import React, { useState } from 'react';
import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];
const DEFAULT_DATA = {
  variant: 'notice',
  message: ''
};

function ToastPlayground() {
  const [data, setData] = useState(DEFAULT_DATA);
  const { toatList, addToast, removeToast } = React.useContext(ToastContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (data.message !== '') {
      addToast(data);
      setData(DEFAULT_DATA);
    }
  };

  const handleChange = (event, type) => {
    const value = event.target.value;
    const newData = { ...data };
    newData[type] = value;
    setData(newData);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      {toatList.length !== 0 && (
        <ToastShelf toatList={toatList} handleHideToats={removeToast} />
      )}
      <form onSubmit={handleSubmit} className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              value={data.message}
              className={styles.messageInput}
              onChange={(e) => handleChange(e, 'message')}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((variant) => (
              <label htmlFor={`variant-${variant}`} key={`variant-${variant}`}>
                <input
                  id={`variant-${variant}`}
                  type="radio"
                  name="variant"
                  value={variant}
                  checked={variant === data.variant}
                  onChange={(e) => handleChange(e, 'variant')}
                />
                {variant}
              </label>
            ))}
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
