import React from "react";
import CommonButton from "../../../common/button";
import { WrapperPress } from "./styled-index";
import { Row, Col } from "react-grid-system";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { Modal } from 'antd';
import { useState } from 'react';
import './style.css'

const RankingCard = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>

      <WrapperPress id="rankin">
        <h2>{t("Ranking.0")}</h2>
        <p>{t("Ranking.1")}</p>
        <CommonButton
          onClick={showModal}
          style={{
            color: "#1E1E1E",
            borderColor: "#1E1E1E",
            display: "inline-block",
            marginTop: "30px",
            padding: "8px 30px",
          }}
          type={"button"}
        >
          {t("Ranking.2")}
        </CommonButton>
        <Modal footer={false} width={700} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <div className="modal_content_wrap">
            <h4>{t("Ranking.17")}</h4>
            <p>{t("Ranking.18")}</p>
            <h4>{t("Ranking.19")}</h4>
            <p>{t("Ranking.20")}</p>
          </div>
        </Modal>
      </WrapperPress>
    </>
  );
};

export default RankingCard;
