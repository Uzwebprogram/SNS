import React from 'react'
import { useState } from 'react';
import styles from './style.module.css'
import { WrapperContainer } from '../../../style-App'
import { Col, Row } from 'react-grid-system'
import { useTranslation } from 'react-i18next'
import RatingType1Modal from './raiting-type1/index'
import RatingType3Modal from './raiting-type3/index'
import RatingType4Modal from './raiting-type4/index'

import RatingType2Modal from './raiting-type2/index';

const TypesRatings = () => {
  const { t } = useTranslation()

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);

  // rating type modal 1 function
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  // rating type modal 1 function
  // rating type modal 2 function
  const showModal1 = () => {
    setIsModalOpen1(true);
  };
  const handleOk1 = () => {
    setIsModalOpen1(false);
  };
  const handleCancel1 = () => {
    setIsModalOpen1(false);
  };
  // rating type modal 2 function
  // rating type modal 3 function
  const showModal2 = () => {
    setIsModalOpen2(true);
  };
  const handleOk2 = () => {
    setIsModalOpen2(false);
  };
  const handleCancel2 = () => {
    setIsModalOpen2(false);
  };
  // rating type modal 3 function
  // rating type modal 4 function
  const showModal3 = () => {
    setIsModalOpen3(true);
  };
  const handleOk3 = () => {
    setIsModalOpen3(false);
  };
  const handleCancel3 = () => {
    setIsModalOpen3(false);
  };
  // rating type modal 4 function
  return (
    <>
      <div className={styles.types_rating_section}>
        <RatingType1Modal handleOk={handleOk} handleCancel={handleCancel} isModalOpen={isModalOpen} />
        <RatingType2Modal handleOk1={handleOk1} handleCancel1={handleCancel1} isModalOpen1={isModalOpen1}/>
        <RatingType3Modal handleOk2={handleOk2} handleCancel2={handleCancel2} isModalOpen2={isModalOpen2} />
        <RatingType4Modal handleOk3={handleOk3} handleCancel3={handleCancel3} isModalOpen3={isModalOpen3} />
        <WrapperContainer>
          <Row className={styles.types_rating_row}>
            <Col className={styles.types_rating_col} lg={6} md={12} sm={12}>
              <p>{t("UslugiRating.1")}</p>
              <p>{t("UslugiRating.2")}</p>
            </Col>
            <Col className={styles.types_rating_col} lg={6} md={12} sm={12}>
              <h4>{t("UslugiRating.3")}</h4>
              <div className={styles.types_rating_link_box}>
                <button onClick={showModal} type='button'>{t("UslugiRating.4")}</button>
              </div>
              <div className={styles.types_rating_link_box}>
                <button onClick={showModal1} type='button'>{t("UslugiRating.5")}</button>
              </div>
              <div className={styles.types_rating_link_box}>
                <button onClick={showModal2} type='button'>{t("UslugiRating.6")}</button>
              </div>
              <div className={styles.types_rating_link_box}>
                <button onClick={showModal3} type='button'>{t("UslugiRating.7")}</button>
              </div>
            </Col>
          </Row>
        </WrapperContainer>
      </div>
    </>
  )
}

export default TypesRatings