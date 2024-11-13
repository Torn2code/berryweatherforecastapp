import React from 'react';

const Error = ({ errorMessage }) => {
  if (!errorMessage) return null;

  return <p className="error-message">{errorMessage}</p>;
};

export default Error;
