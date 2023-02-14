import React, { useEffect } from "react";
import PersonalComponent from "../../components/personal-components";

const PersonalCabinet = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <PersonalComponent />
    </>
  );
};

export default PersonalCabinet;
