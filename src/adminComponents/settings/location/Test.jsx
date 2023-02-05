import React, { useState } from 'react';
import axios from 'axios';


const Test = () => {
  const [showDetails, setShowDetails] = useState({});

  const toggleDetails = name => {
    setShowDetails({
      ...showDetails,
      [name]: !showDetails[name]
    });
  };

  const data = [
    { name: 'John', age: 30, city: 'New York' },
    { name: 'Jane', age: 25, city: 'London' }
  ];

  const [data1, setData1] = useState({

  });
  
  function handleChange(e) {
    const newData = { ...data1 };
    newData[e.target.id] = e.target.value;
    setData1(newData);
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://sadamon.onrender.com/api/product/postsublocation", data1, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log(response.data);
    //   window.location.href='/admin/location'
    } catch (error) {
      console.error(error);
    }
  }






  return (

    <>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ name, age, city }) => (
          <React.Fragment key={name}>
            <tr>
              <td>
                <a href="#" onClick={() => toggleDetails(name)}>
                  {name}
                </a>
              </td>
              <td />
            </tr>
            {showDetails[name] && (
              <tr>
                <td colSpan={2}>
                  <table>
                    <tbody>
                      <tr>
                        <td>Age</td>
                        <td>{age}</td>
                      </tr>
                      <tr>
                        <td>City</td>
                        <td>{city}</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
    <form action=""  onSubmit={handleSubmit}>
    <input type="text" id="locationId" onChange={handleChange} value={data1.locationId} placeholder="Number input" />
<input type="text" id="subLocationName" onChange={handleChange} value={data1.subLocationName} placeholder="Number input" />
<input type="text" id="link" onChange={handleChange} value={data1.link} placeholder="Number input"/>
<input type="number" id="ordering" onChange={handleChange} value={data1.ordering} placeholder="Number input" />
<input type="text" id="status" onChange={handleChange} value={data1.status} placeholder="Number input" />
<button type='submit'>Submit</button>
</form>
    </>
  );
};

export default Test;
