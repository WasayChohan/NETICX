import data from "./Json/db.json";

export const apiCaseStudy = (type) => {
  try {
    switch (type) {
      case "hrm":
        return data.hrm;
      case "hms":
        return data.hms;
      case "caribbeansconnects":
        return data.caribbeansconnects;
      default:
        throw new Error(`No data found for the type: ${type}`);
    }
  } catch (error) {
    console.error(`Error fetching case study data: ${error.message}`);
    return [];
  }
};
