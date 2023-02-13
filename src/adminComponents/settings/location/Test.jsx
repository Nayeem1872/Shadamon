import React, { useState } from "react";
import {MultiSelect}from "react-multi-select-component";

const Test = ( ) => {
  const options = [
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
    { label: "Option 3", value: 3 },
    { label: "Option 4", value: 4 }
  ];
  

    const [selected, setSelected] = useState([]);
  
    const handleChange = selectedOptions => {
      setSelected(selectedOptions.map(option => option.value));
    };

  return (

    <>
     <MultiSelect
      options={options}
      // value={selected}
      onChange={handleChange}
      // labelledBy={"Select"}
    />
  

    </>

  );
};

export default Test;
