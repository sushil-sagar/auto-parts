import React from 'react';
import LeftSide from './LeftSide'; // Assuming LeftSide contains the image page
import FormPage from './formpage'; // Assuming FormPage contains the form content
import "./alignpage.css";

const AlignPage = () => {
  return (
    <div className="align-page" style={{ backgroundColor: 'white' }}>
      {/* For larger screens, display FormPage */}
      <div className="form-page">
        <FormPage />
      </div>

      {/* For smaller screens, display LeftSide */}
      <div className="left-side">
        <LeftSide />
      </div>
    </div>
  );
};

export default AlignPage;
