import React, { useState }   from 'react'
import { isVisible } from "@testing-library/user-event/dist/utils";
import styles from './style.module.css'
import { WrapperContainer } from '../../../style-App'
import { Col, Row } from 'react-grid-system'
import { useTranslation } from 'react-i18next'
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

const ConsultantMethodology = ({...rest}) => {
    const { t } = useTranslation()
    const [viewPortEntered, setViewPortEntered] = useState(false);
    return (
        <>
            <div className={styles.consultant_methodology_section}>
                <WrapperContainer>
                    <Row className={styles.method_row}>
                        <Col className={styles.method_col} lg={8}>
                            <h4>{t("Consultant.10")}</h4>
                            <p>{t("Consultant.11")}</p>
                            <div className={styles.method_col_item}>
                                <i class='bx bxs-right-arrow-alt'></i>
                                <p>{t("Consultant.12")}</p>
                            </div>
                            <div className={styles.method_col_item}>
                                <i class='bx bxs-right-arrow-alt'></i>
                                <p>{t("Consultant.13")}</p>
                            </div>
                        </Col>
                        <Col className={styles.method_col} lg={4}>
                            <h4>{t("Consultant.14")}</h4>
                            <div className={styles.method_count_wrapp}>
                                <div className={styles.count_wrap}>
                                    <strong data-number="62">
                                        <CountUp {...rest} start={viewPortEntered ? null : 0} end={62}>
                                            {({ countUpRef }) => {
                                                return (
                                                    <ReactVisibilitySensor
                                                        active={!viewPortEntered}
                                                        onChange={(isVisible) => {
                                                            if (isVisible) {
                                                                setViewPortEntered(true);
                                                            }
                                                        }}
                                                        delayedCall
                                                    >
                                                        <span className={styles.number} ref={countUpRef} />
                                                    </ReactVisibilitySensor>
                                                );
                                            }}
                                        </CountUp>
                                    </strong>
                                    <span>{t("Consultant.15")}</span>
                                </div>
                            </div>
                            <div className={styles.method_count_wrapp}>
                                <div className={styles.count_wrap}>
                                    <strong data-number="15">
                                        <CountUp {...rest} start={viewPortEntered ? null : 0} end={15}>
                                            {({ countUpRef }) => {
                                                return (
                                                    <ReactVisibilitySensor
                                                        active={!viewPortEntered}
                                                        onChange={(isVisible) => {
                                                            if (isVisible) {
                                                                setViewPortEntered(true);
                                                            }
                                                        }}
                                                        delayedCall
                                                    >
                                                        <span className={styles.number} ref={countUpRef} />
                                                    </ReactVisibilitySensor>
                                                );
                                            }}
                                        </CountUp>
                                    </strong>
                                    <span>{t("Consultant.16")}</span>
                                </div>
                            </div>
                            <div className={styles.method_count_wrapp}>
                                <div className={styles.count_wrap}>
                                    <strong data-number="406">
                                        <CountUp {...rest} start={viewPortEntered ? null : 0} end={406}>
                                            {({ countUpRef }) => {
                                                return (
                                                    <ReactVisibilitySensor
                                                        active={!viewPortEntered}
                                                        onChange={(isVisible) => {
                                                            if (isVisible) {
                                                                setViewPortEntered(true);
                                                            }
                                                        }}
                                                        delayedCall
                                                    >
                                                        <span className={styles.number} ref={countUpRef} />
                                                    </ReactVisibilitySensor>
                                                );
                                            }}
                                        </CountUp>
                                    </strong>
                                    <span>{t("Consultant.17")}</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </WrapperContainer>
            </div>
        </>
    )
}

export default ConsultantMethodology