import React, { useState } from 'react';

export const ToastContext = React.createContext();

const ToastProvider = ({ children }) => {
  const [toatList, setToatList] = useState([]);

  const addToast = (data) => {
    const copyToatList = [...toatList];
    copyToatList.push({
      id: Math.random(),
      ...data
    });

    setToatList(copyToatList);
  };

  const removeToast = (id) => {
    const copyToatList = toatList.filter((v) => v.id !== id);
    setToatList(copyToatList);
  };

  const hideAllToast = () => {
    setToatList([]);
  };

  const value = { toatList, addToast, removeToast, hideAllToast };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
};

export default ToastProvider;
