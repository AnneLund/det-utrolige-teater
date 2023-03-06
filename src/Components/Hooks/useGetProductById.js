import { useState, useEffect } from "react";
import AppService from "../Appservices/Appservice";

const useGetProductById = (endpoint, id) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    async function fetchData() {
      //fetches and sets data to the response object
      const response = await AppService.GetDetails(endpoint, id);
      //sets the data to the variable
      try {
        if (response.data) {
          // console.log("Response Data: ", response.data);
          setState(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [endpoint, id]);

  return { state };
};

export default useGetProductById;
