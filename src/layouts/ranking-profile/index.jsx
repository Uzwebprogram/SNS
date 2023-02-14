import React, { useEffect } from "react";
import RankingProfileComponents from "../../components/ranking-profile-components/index";

const RankingProfile = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <RankingProfileComponents />
    </>
  );
};

export default RankingProfile;
