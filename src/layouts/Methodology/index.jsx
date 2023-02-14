import React, { useEffect } from "react";
import MethodologyComponent from "../../components/methodology-components";

const Methodology = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <MethodologyComponent />
    </>
  );
};

export default Methodology;
