import React, { useEffect } from "react";
import RatingsComponent from "../../components/ratings-components";

const Ratings = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div id="rating">
      <RatingsComponent />
    </div>
  );
};

export default Ratings;
