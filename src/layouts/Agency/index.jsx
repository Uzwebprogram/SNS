import React, { useEffect } from "react";
import AgencyComponents from "../../components/agency-components";

const Agency = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <AgencyComponents />
    </>
  );
};

export default Agency;
