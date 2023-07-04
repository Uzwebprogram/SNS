import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import HomeComponent from '../../components/home-components/index'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const { t, i18n } = useTranslation();

  return (
    <>
      <HomeComponent />
    </>
  );
};

export default Home;
