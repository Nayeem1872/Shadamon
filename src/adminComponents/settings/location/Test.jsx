import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Test() {
  const [locationName, setLocations] = useState([]);

  useEffect(() => {
    const getUser = async () => {
        try {
          const reqData = await axios.get("https://sadamon.onrender.com/api/product/alllocations", { withCredentials: true });
          setLocations(reqData.data.data);
        } catch (error) {
          console.error(error);
        }
      };
      getUser()
      console.log(locationName)
  }, []);

  return (
    <>
    <table id="main-table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="#" class="show-details">John</a></td>
      <td class="details-row">
        <table>
          <tbody>
            <tr>
              <td>Age</td>
              <td>30</td>
            </tr>
            <tr>
              <td>City</td>
              <td>New York</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td><a href="#" class="show-details">Jane</a></td>
      <td class="details-row">
        <table>
          <tbody>
            <tr>
              <td>Age</td>
              <td>25</td>
            </tr>
            <tr>
              <td>City</td>
              <td>London</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>



    
    
    
    
    
    </>
  
  );
}

export default Test;