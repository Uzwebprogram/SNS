import React from 'react'
import styles from './style.module.css'
import { WrapperContainer } from '../../../style-App'
import { Col, Row } from 'react-grid-system'
import { useTranslation } from 'react-i18next'

const InvestPresent = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className={styles.invest_present_section}>
                <WrapperContainer>
                    <h4 className={styles.invest_present_title}>{t("FinanceConsult.7")}</h4>
                    <p className={styles.invest_present_text}>{t("FinanceConsult.8")}</p>
                    <Row className={styles.invest_present_row}>
                        <Col className={styles.invest_present_col} lg={6} md={12} sm={12}>
                            <div className={styles.invest_present_col_item}>
                                <span>1</span>
                                <p>{t("FinanceConsult.9")}</p>
                            </div>
                            <div className={styles.invest_present_col_item}>
                                <span>2</span>
                                <p>{t("FinanceConsult.10")}</p>
                            </div>
                            <div className={styles.invest_present_col_item}>
                                <span>3</span>
                                <p>{t("FinanceConsult.11")}</p>
                            </div>
                            <div className={styles.invest_present_col_item}>
                                <span>4</span>
                                <p>{t("FinanceConsult.12")}</p>
                            </div>
                            <div className={styles.invest_present_col_item}>
                                <span>5</span>
                                <p>{t("FinanceConsult.13")}</p>
                            </div>
                        </Col>
                        <Col className={styles.invest_present_col} lg={6} md={12} sm={12}>
                            <div className={styles.invest_present_col_item}>
                                <span>6</span>
                                <p>{t("FinanceConsult.14")}</p>
                            </div>
                            <div className={styles.invest_present_col_item}>
                                <span>7</span>
                                <p>{t("FinanceConsult.15")}</p>
                            </div>
                            <div className={styles.invest_present_col_item}>
                                <span>8</span>
                                <p>{t("FinanceConsult.16")}</p>
                            </div>
                            <div className={styles.invest_present_col_item}>
                                <span>9</span>
                                <p>{t("FinanceConsult.17")}</p>
                            </div>
                            <div className={styles.invest_present_col_item}>
                                <span>10</span>
                                <p>{t("FinanceConsult.18")}</p>
                            </div>
                        </Col>
                    </Row>
                </WrapperContainer>
            </div>
        </>
    )
}

export default InvestPresent