import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import HomeComponent from '../../components/home-components/index'

const Home = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <HomeComponent />
    </>
  );
};

export default Home;
