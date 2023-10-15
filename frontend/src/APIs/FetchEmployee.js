import { useEffect, useState } from "react";
import { apis, baseUrl } from "../Api.js";

const FetchEmployee = async () => {
    const [employeeData, setEmployeeData] = useState([]);
    try {
        const response = await fetch(`${baseUrl}${apis.allemployeeApi}`);
        const data = await response.json();
        return data.all;
        // setEmployeeData(data.all);
        // return employeeData
      } catch (error) {
        console.log(error);
      }
      
  };
 
  export default FetchEmployee;