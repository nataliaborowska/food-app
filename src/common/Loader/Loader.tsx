import React from 'react';

export const Loader: React.FC = () => (
  <div className="d-flex justify-content-center" data-test="loader">
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
)