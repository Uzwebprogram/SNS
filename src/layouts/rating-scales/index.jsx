import React, { useEffect } from "react";
import RatingScalesComponent from "../../components/ratingscales-components";

const RatingScales = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <RatingScalesComponent />
    </>
  );
};

export default RatingScales;
