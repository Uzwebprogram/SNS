import React, { useEffect } from "react";
import AnalyticsComponent from "../../components/analytics-components";

const Analytics = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <AnalyticsComponent />
    </>
  );
};

export default Analytics;
