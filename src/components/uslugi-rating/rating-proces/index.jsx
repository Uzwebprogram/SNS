import React from 'react'
import styles from './style.module.css'
import { WrapperContainer } from '../../../style-App'
import { Row, Col } from 'react-grid-system'


import RatingProcesUzb from '../../../assets/step/uzbImg.png'
import RatingProcesRus from '../../../assets/step/rusImg.png'
import RatingProcesEn from '../../../assets/step/enImg.png'
import { useTranslation } from 'react-i18next'

const RatingProces = () => {
    const { t } = useTranslation()

    function LanguValue() {
        return window.localStorage.getItem("i18nextLng");
    }
    return (
        <>
            <div className={styles.rating_proces}>
                <WrapperContainer>
                    <Row className={styles.rating_proces_row}>
                        <Col className={styles.rating_proces_col} lg={6} md={12} sm={12}>
                            <h4>{t("UslugiRating.24")}</h4>
                        </Col>
                        <Col className={styles.rating_proces_col} lg={6} md={12} sm={12}>
                            {LanguValue() === "ru" ? (
                                <>
                                    <img src={RatingProcesRus} alt="" />
                                </>
                            ) : LanguValue() === "uz" ? (
                                <>
                                    <img src={RatingProcesUzb} alt="" />
                                </>
                            ) : LanguValue() === "en" ? (
                                <>
                                    <img src={RatingProcesEn} alt="" />
                                </>
                            ) : (
                                <>
                                    <img src={RatingProcesRus} alt="" />
                                </>
                            )}
                        </Col>
                    </Row>
                </WrapperContainer>
            </div>
        </>
    )
}

export default RatingProces