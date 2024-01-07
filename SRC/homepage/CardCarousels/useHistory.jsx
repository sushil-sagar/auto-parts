import React from 'react';
import { useHistory } from 'react-router-dom';

const YourComponent = () => {
  const history = useHistory();

  const handleButtonClick = () => {
    // Example: navigate to the '/formData' route when a button is clicked
    history.push('/formData');
  };

  return (
    <div>
      {/* Your component content */}
      <button onClick={handleButtonClick}>Go to Form Data</button>
    </div>
  );
};

export default YourComponent;
