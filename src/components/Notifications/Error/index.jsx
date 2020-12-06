import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import errorsSelectors from '../../../redux/error/selectors';
import notification from '../../../services/notification';

const Error = () => {
  const error = useSelector(errorsSelectors.getError);

  useEffect(() => {
    if (!error) return;
    notification({
      type: 'error',
      message: error,
    });
  }, [error]);

  return <></>;
};

export default Error;
