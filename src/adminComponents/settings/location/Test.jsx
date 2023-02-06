import React, { useState } from "react";

const Test = () => {
  const [inputValues, setInputValues] = useState([]);

  const handleAddInput = () => {
    setInputValues([...inputValues, ""]);
  };

  const handleInputChange = (e, index) => {
    const values = [...inputValues];
    values[index] = e.target.value;
    setInputValues(values);
  };

  return (
    <div>
      {inputValues.map((inputValue, index) => (
        <div key={index}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => handleInputChange(e, index)}
          />
        </div>
      ))}
      <button onClick={handleAddInput}>+</button>
    </div>
  );
};

export default Test;
