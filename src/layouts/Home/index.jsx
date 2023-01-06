import React from "react";
import { useTranslation } from "react-i18next";
import HomeComponent from '../../components/home-components/index'

const Home = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <HomeComponent />
    </>
  );
};

export default Home;
