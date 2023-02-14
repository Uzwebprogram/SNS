import React, { useEffect } from "react";
import RatingNeededComponent from "../../components/ratingneeded-components";

const RatingNeeded = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <RatingNeededComponent />
    </>
  );
};

export default RatingNeeded;
