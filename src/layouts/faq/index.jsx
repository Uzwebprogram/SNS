import React, { useEffect } from "react";
import FaqComponent from "../../components/faq-components";

const Faq = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <FaqComponent />
    </>
  );
};

export default Faq;
