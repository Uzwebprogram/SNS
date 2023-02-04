import React, { useEffect } from "react";
import CompanyProfileComponents from "../../components/company-profile-components";

const CompanyProfile = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <CompanyProfileComponents />
    </>
  );
};

export default CompanyProfile;
