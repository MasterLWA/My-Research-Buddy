import React from 'react';
import './Spinner.css';

const Spinner = () => {
  return (
  <div className=' text-center' id='spinner'>
  <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
  <div className="loading-spinner">Loading...</div>
  </div>
  );
};

export default Spinner