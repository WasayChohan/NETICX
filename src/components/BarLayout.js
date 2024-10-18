import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function BarLayout({ children }) {
  const location = useLocation();

  const [noNavbar, setNoNavbar] = useState(false);

  useEffect(() => {
    if (location.pathname === "/Webdev") {
      setNoNavbar(false);
    } else {
      setNoNavbar(true);
    }
  }, [location]);
  return <div> {noNavbar && children} </div>;
}

export default BarLayout;
