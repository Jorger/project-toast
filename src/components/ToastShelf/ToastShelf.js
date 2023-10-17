import { ToastContext } from '../ToastProvider';
import React from 'react';
import useEscapeKey from '../hooks/useEscapeKey';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toatList = [], handleHideToats }) {
  const { hideAllToast } = React.useContext(ToastContext);
  useEscapeKey(hideAllToast);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toatList.map(({ id, variant, message }) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast id={id} variant={variant} handleHideToats={handleHideToats}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
