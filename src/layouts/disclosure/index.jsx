import React, { useEffect } from "react";
import DisclosureComponent from "../../components/disclosure-components";

const Disclosure = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <DisclosureComponent />
    </>
  );
};

export default Disclosure;
