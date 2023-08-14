import React from 'react'
import styles from './style.module.css'
import { WrapperContainer } from '../../../style-App'
import { Col, Row } from 'react-grid-system'
import { useTranslation } from 'react-i18next'

import Principles1 from '../../../assets/prinsipel1.png'
import Principles2 from '../../../assets/prinsipel2.png'

const Principles = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className={styles.principles_section}>
                <WrapperContainer>
                    <h4 className={styles.principles_title}>{t("Consultant.18")}</h4>
                    <Row className={styles.principles_row}>
                        <Col className={styles.principles_col} lg={6} md={12} sm={12}>
                            <div className={styles.principles_col_item}>
                                <img src={Principles1} alt="" />
                                <p><span>{t("Consultant.19")}</span> {t("Consultant.20")}</p>
                            </div>
                        </Col>
                        <Col className={styles.principles_col} lg={6} md={12} sm={12}>
                            <div className={styles.principles_col_item}>
                                <img src={Principles2} alt="" />
                                <p><span>{t("Consultant.21")}</span> {t("Consultant.22")}</p>
                            </div>
                        </Col>
                    </Row>
                </WrapperContainer>
            </div>
        </>
    )
}

export default Principles