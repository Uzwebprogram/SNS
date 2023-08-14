import React from 'react'
import styles from './style.module.css'
import { WrapperContainer } from '../../style-App'
import { Col, Row } from 'react-grid-system'
import { useTranslation } from 'react-i18next'
import './style.css'

const RequestConsultation = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className={styles.request_consultation_section}>
                <WrapperContainer>
                    <Row className={styles.request_row}>
                        <Col className={styles.request_col} lg={6} md={12} sm={12}>
                            <h4>{t("Form.0")}</h4>
                        </Col>
                        <Col className={styles.request_col} lg={6} md={12} sm={12}>
                            <form className='request_form'>
                                <div>
                                    <input type="text" placeholder={t("Form.1")} required />
                                    <i class='bx bxs-check-circle'></i>
                                    {/* <i class='bx bxs-x-circle'></i> */}
                                </div>
                                <div>
                                    <input type="name" placeholder={t("Form.2")} required />
                                    <i class='bx bxs-check-circle'></i>
                                    {/* <i class='bx bxs-x-circle'></i> */}
                                </div>
                                <div>
                                    <input type="tel" placeholder={t("Form.3")} required />
                                    <i class='bx bxs-check-circle'></i>
                                    {/* <i class='bx bxs-x-circle'></i> */}
                                </div>
                                <button type='submit'>{t("Form.4")}</button>
                            </form>
                        </Col>
                    </Row>
                </WrapperContainer>
            </div>
        </>
    )
}

export default RequestConsultation