import React from 'react'
import { Col, Row } from 'react-grid-system'
import { WrapperContainer } from '../../../style-App'
import styles from './style.module.css'
import Consultant1 from '../../../assets/uslugi-analytic.png'
import { useTranslation } from 'react-i18next'

const UslugiAnalyticSecond = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className={styles.consultant_company_section}>
                <WrapperContainer>
                    <Row className={styles.consultant_row} >
                        <Col className={styles.consultant_col} lg={6} md={12} sm={12}>
                            <p>{t("UslugiAnalytic.1")}</p>
                        </Col>
                        <Col className={styles.consultant_col} lg={6} md={12} sm={12}>
                            <div className={styles.col_img_box}>
                                <img src={Consultant1} alt="image" />
                            </div>
                        </Col>
                    </Row>
                </WrapperContainer>
            </div>
        </>
    )
}

export default UslugiAnalyticSecond