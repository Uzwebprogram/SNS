import React from 'react'
import { Col, Row } from 'react-grid-system'
import { WrapperContainer } from '../../../style-App'
import styles from './style.module.css'
import FinanceConsult from '../../../assets/finance-consult.png'
import { useTranslation } from 'react-i18next'

const UslugiFinanceSecond = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className={styles.consultant_company_section}>
                <WrapperContainer>
                    <Row className={styles.consultant_row} >
                        <Col className={styles.consultant_col} lg={8} md={12} sm={12}>
                            <p>{t("FinanceConsult.1")}</p>
                            <p>{t("FinanceConsult.2")}</p>
                        </Col>
                        <Col className={styles.consultant_col} lg={4} md={12} sm={12}>
                            <div className={styles.col_img_box}>
                                <img src={FinanceConsult} alt="image" />
                            </div>
                        </Col>
                    </Row>
                </WrapperContainer>
            </div>
        </>
    )
}

export default UslugiFinanceSecond