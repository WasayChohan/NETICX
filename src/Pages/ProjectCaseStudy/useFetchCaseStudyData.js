import { useEffect, useState } from "react";
import data from "./Json/db.json";

const useFetchCaseStudyData = (type) => {
  const [dataState, setDataState] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let result;

    switch (type) {
      case "hrm":
        result = data.hrm;
        break;
      case "hms":
        result = data.hms;
        break;
      case "caribbeansconnects":
        result = data.caribbeansconnects;
        break;
      default:
        result = []; // Set an empty array if the type doesn't match
        console.error(`No data found for the type: ${type}`);
    }

    setDataState(result);
    setLoading(false);
  }, [type]);

  return { dataState, loading }; // Return data and loading state
};

export default useFetchCaseStudyData;
