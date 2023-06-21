import React from 'react'
import { Modal } from 'antd';
import { useTranslation } from 'react-i18next';
import styles from './style.module.css'
import { Row, Col } from 'react-grid-system'
import { Image } from 'antd';
import './style.css'

import ModalType1 from '../../../../assets/modal/modal2.1.png'
import ModalType2 from '../../../../assets/modal/modal2.2.png'
import ModatType4 from '../../../../assets/modal/modal1.4.png'





const RatingType2Modal = ({ handleOk1, handleCancel1, isModalOpen1 }) => {
    const { t } = useTranslation()
    return (
        <>
            <Modal width={1000} footer={false} open={isModalOpen1} onOk={handleOk1} onCancel={handleCancel1}>
                <div className={styles.modal_title_box}>
                    <h4>{t("UslugiRating.RatingType2.0")}</h4>
                    <hr />
                </div>
                <div className={styles.modal_content_wrapp}>
                    <p>{t("UslugiRating.RatingType1.1")}</p>
                    <p>{t("UslugiRating.RatingType1.2")}</p>
                    <ul>
                        <li>{t("UslugiRating.RatingType1.3")}</li>
                        <li>{t("UslugiRating.RatingType1.4")}</li>
                        <li>{t("UslugiRating.RatingType1.5")}</li>
                    </ul>
                    <p>{t("UslugiRating.RatingType1.7")}</p>

                    <div className={styles.modal_card_wrap}>
                        <h4>{t("UslugiRating.RatingType2.1")}</h4>
                        <Row className={styles.modal_card_row}>
                            <Col className={styles.modal_card_col} lg={6} md={12} sm={12}>
                                <img src={ModalType1} alt="" />
                                <p>{t("UslugiRating.RatingType2.2")}</p>
                            </Col>
                            <Col className={styles.modal_card_col} lg={6} md={12} sm={12}>
                                <img src={ModalType2} alt="" />
                                <p>{t("UslugiRating.RatingType2.3")}</p>
                            </Col>

                        </Row>
                    </div>

                    <div className={styles.struct_wrap}>
                        <h4 className={styles.struct_wrap_title}>{t("UslugiRating.RatingType1.12")}</h4>
                        <Row className={styles.struct_wrap_row}>
                            <Col className={styles.struct_wrap_col} lg={6} md={12} sm={12}>
                                <h4>{t("UslugiRating.RatingType1.13")}</h4>
                                <div className={styles.struct_wrap_col_item}>
                                    <ul>
                                        <li>
                                            <i class='bx bxs-right-arrow-alt'></i>
                                            <p>{t("UslugiRating.RatingType1.14")}</p>
                                        </li>
                                        <hr />
                                        <li>
                                            <i class='bx bxs-right-arrow-alt'></i>
                                            <p>{t("UslugiRating.RatingType1.15")}</p>
                                        </li>
                                        <li>
                                            <i class='bx bxs-right-arrow-alt'></i>
                                            <p>{t("UslugiRating.RatingType1.16")}</p>
                                        </li>
                                        <hr />
                                        <li>
                                            <i class='bx bxs-right-arrow-alt'></i>
                                            <p>{t("UslugiRating.RatingType1.17")}</p>
                                        </li>
                                        <li>
                                            <i class='bx bxs-right-arrow-alt'></i>
                                            <p>{t("UslugiRating.RatingType1.18")}</p>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col className={styles.struct_wrap_col} lg={6} md={12} sm={12}>
                                <h4>{t("UslugiRating.RatingType1.19")}</h4>
                                <div className={styles.struct_wrap_col_item}>
                                    <ul>
                                        <li>
                                            <i class='bx bxs-right-arrow-alt'></i>
                                            <p>{t("UslugiRating.RatingType1.20")}</p>
                                        </li>
                                        <li>
                                            <i class='bx bxs-right-arrow-alt'></i>
                                            <p>{t("UslugiRating.RatingType1.21")}</p>
                                        </li>
                                        <li>
                                            <i class='bx bxs-right-arrow-alt'></i>
                                            <p>{t("UslugiRating.RatingType1.22")}</p>
                                        </li>

                                        <li>
                                            <i class='bx bxs-right-arrow-alt'></i>
                                            <p>{t("UslugiRating.RatingType1.24")}</p>
                                        </li>
                                        <hr />
                                        <li>
                                            <i class='bx bxs-right-arrow-alt'></i>
                                            <p>{t("UslugiRating.RatingType1.25")}</p>
                                        </li>
                                        <li>
                                            <i class='bx bxs-right-arrow-alt'></i>
                                            <p>{t("UslugiRating.RatingType1.26")}</p>
                                        </li>
                                        <li>
                                            <i class='bx bxs-right-arrow-alt'></i>
                                            <p>{t("UslugiRating.RatingType1.27")}</p>
                                        </li>
                                        <li>
                                            <i class='bx bxs-right-arrow-alt'></i>
                                            <p>{t("UslugiRating.RatingType1.28")}</p>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className={styles.rating_scale_wrap}>
                        <h4>{t("UslugiRating.RatingType1.29")}</h4>
                        <p>{t("UslugiRating.RatingType1.30")}</p>
                        <Image
                            width="100%"
                            height="100%"
                            src={ModatType4}
                        />
                    </div>

                    <div className={styles.prognos}>
                        <h4>{t("UslugiRating.RatingType1.31")}</h4>
                        <p>{t("UslugiRating.RatingType1.32")}</p>

                        <ul>
                            <li>
                                <span>{t("UslugiRating.RatingType1.33")}</span>
                                <span>{t("UslugiRating.RatingType1.34")}</span>
                            </li>
                            <li>
                                <span>{t("UslugiRating.RatingType1.35")}</span>
                                <span>{t("UslugiRating.RatingType1.36")}</span>
                            </li>
                            <li>
                                <span>{t("UslugiRating.RatingType1.37")}</span>
                                <span>{t("UslugiRating.RatingType1.38")}</span>
                            </li>
                            <li>
                                <span>{t("UslugiRating.RatingType1.39")}</span>
                                <span>{t("UslugiRating.RatingType1.40")}</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </Modal>
        </>
    )
}


export default RatingType2Modal