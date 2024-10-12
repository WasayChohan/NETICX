// src/Pages/ProjectCaseStudy/useFetchData.js
import { useState, useEffect } from "react";
import { apiCaseStudy } from "./ApiCaseStudy";

const useFetchData = (type) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const result = apiCaseStudy(type);
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error
      setError(error);
    }
  }, [type]);
  // Return the data and error
  return { data, error };
};

export default useFetchData;
