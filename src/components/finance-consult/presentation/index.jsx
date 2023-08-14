import React from 'react'
import styles from './style.module.css'
import { WrapperContainer } from '../../../style-App'
import { Col, Row } from 'react-grid-system'
import FinanceConsult1 from '../../../assets/finance-consult1.png'
import FinanceConsult2 from '../../../assets/finance-consult2.png'
import FinanceConsult3 from '../../../assets/finance-consult3.png'
import { useTranslation } from 'react-i18next'

const Presentation = () => {
    const {t} = useTranslation()
  return (
    <>
     <div className={styles.presentation_section}>
        <WrapperContainer>
            <h4 className={styles.presentation_title}>{t("FinanceConsult.3")}</h4>
            <Row className={styles.presentation_row}>
                <Col className={styles.presentation_col} lg={4} md={12} sm={12}>
                    <img src={FinanceConsult1} alt="" />
                    <p>{t("FinanceConsult.4")}</p>
                </Col>
                <Col className={styles.presentation_col} lg={4} md={12} sm={12}>
                    <img src={FinanceConsult2} alt="" />
                    <p>{t("FinanceConsult.5")}</p>
                </Col>
                <Col className={styles.presentation_col} lg={4} md={12} sm={12}>
                    <img src={FinanceConsult3} alt="" />
                    <p>{t("FinanceConsult.6")}</p>
                </Col>
            </Row>
        </WrapperContainer>
     </div>
    </>
  )
}

export default Presentation