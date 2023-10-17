import React from 'react';

const useEscapeKey = (hideAllToast) => {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === 'Escape') {
        hideAllToast();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [hideAllToast]);
};

export default useEscapeKey;
