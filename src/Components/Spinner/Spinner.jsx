import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const Spinner = () => {
  return (
    <div className="mt-5 text-center">
      <Loader
        type="ThreeDots"
        color="#fd7e14"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
};
export default Spinner;
