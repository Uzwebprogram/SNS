import React from 'react'
import styles from './style.module.css'
import { WrapperContainer } from '../../../style-App'
import { Col, Row } from 'react-grid-system'
import { useTranslation } from 'react-i18next'

const TypesRatings = () => {
  const {t} = useTranslation()
  return (
    <>
      <div className={styles.types_rating_section}>
        <WrapperContainer>
          <Row className={styles.types_rating_row}>
            <Col className={styles.types_rating_col} lg={6} md={12} sm={12}>
              <p>{t("UslugiRating.1")}</p>
              <p>{t("UslugiRating.2")}</p>
            </Col>
            <Col className={styles.types_rating_col} lg={6} md={12} sm={12}>
              <h4>{t("UslugiRating.3")}</h4>
              <div className={styles.types_rating_link_box}>
                <button type='button'>{t("UslugiRating.4")}</button>
              </div>
              <div className={styles.types_rating_link_box}>
                <button type='button'>{t("UslugiRating.5")}</button>
              </div>
              <div className={styles.types_rating_link_box}>
                <button type='button'>{t("UslugiRating.6")}</button>
              </div>
              <div className={styles.types_rating_link_box}>
                <button type='button'>{t("UslugiRating.7")}</button>
              </div>
            </Col>
          </Row>
        </WrapperContainer>
      </div>
    </>
  )
}

export default TypesRatings