import React from "react";
import styles from './style.module.css'
import { WrapperContainer } from "../../../style-App";
import { useTranslation } from "react-i18next";
import { Col, Row } from "react-grid-system";


const RatingUsers = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className={styles.rating_users_section}>
                <WrapperContainer>
                    <h4 className={styles.rating_users_title}>{t("UslugiRating.9")}</h4>
                    <Row className={styles.rating_users_row}>
                        <Col className={styles.rating_users_col} lg={4} md={12} sm={12}>
                            <h4>{t("UslugiRating.10")}</h4>
                            <div className={styles.rating_users_col_item}>
                                <ul>
                                    <li>
                                        <i class='bx bxs-right-arrow-alt'></i>
                                        <p>{t("UslugiRating.11")}</p>
                                    </li>
                                    <li>
                                        <i class='bx bxs-right-arrow-alt'></i>
                                        <p>{t("UslugiRating.12")}</p>
                                    </li>
                                    <li>
                                        <i class='bx bxs-right-arrow-alt'></i>
                                        <p>{t("UslugiRating.13")}</p>
                                    </li>
                                    <li>
                                        <i class='bx bxs-right-arrow-alt'></i>
                                        <p>{t("UslugiRating.14")}</p>
                                    </li>
                                    <li>
                                        <i class='bx bxs-right-arrow-alt'></i>
                                        <p>{t("UslugiRating.15")}</p>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col className={styles.rating_users_col} lg={4} md={12} sm={12}>
                            <h4>{t("UslugiRating.16")}</h4>
                            <div className={styles.rating_users_col_item}>
                                <ul>
                                    <li>
                                        <i class='bx bxs-right-arrow-alt'></i>
                                        <p>{t("UslugiRating.17")}</p>
                                    </li>
                                    <li>
                                        <i class='bx bxs-right-arrow-alt'></i>
                                        <p>{t("UslugiRating.18")}</p>
                                    </li>
                                    <li>
                                        <i class='bx bxs-right-arrow-alt'></i>
                                        <p>{t("UslugiRating.19")}</p>
                                    </li>
                                    <li>
                                        <i class='bx bxs-right-arrow-alt'></i>
                                        <p>{t("UslugiRating.20")}</p>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col className={styles.rating_users_col} lg={4} md={12} sm={12}>
                            <h4>{t("UslugiRating.21")}</h4>
                            <div className={styles.rating_users_col_item}>
                                <ul>
                                    <li>
                                        <i class='bx bxs-right-arrow-alt'></i>
                                        <p>{t("UslugiRating.22")}</p>
                                    </li>
                                    <li>
                                        <i class='bx bxs-right-arrow-alt'></i>
                                        <p>{t("UslugiRating.23")}</p>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </WrapperContainer>
            </div>
        </>
    )
}

export default RatingUsers