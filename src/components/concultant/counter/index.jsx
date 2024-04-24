import { isVisible } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import "./styles.css";
import { useTranslation } from "react-i18next";
import { Row, Col } from "react-grid-system";
import styles from "./styled.module.css";
import { WrapperContainer } from "../../../style-App";

function Counter({ className, ...rest }) {
  const [viewPortEntered, setViewPortEntered] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <section className={styles.counter}>
        <WrapperContainer>
          <h4 className={styles.counter_title}>{t("Consultant.5")}</h4>
          <Row className={styles.counter_row}>
            <Col className={styles.counter_col} lg={3} md={3} sm={6} xs={12}>
              <div className={styles.count_wrap}>
                <strong data-number="8">
                  <CountUp {...rest} start={viewPortEntered ? null : 0} end={4}>
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
                <span>{t("Consultant.6")}</span>
              </div>
            </Col>
            <Col className={styles.counter_col} lg={3} md={3} sm={6} xs={12}>
              <div className={styles.count_wrap}>
                <strong  data-number="250">
                  <CountUp {...rest} start={viewPortEntered ? null : 0} end={12}>
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
                <span>{t("Consultant.7")}</span>
              </div>
            </Col>
            <Col className={styles.counter_col} lg={3} md={3} sm={6} xs={12}>
              <div className={styles.count_wrap}>
                <strong  data-number="1200">
                  <CountUp
                    {...rest}
                    start={viewPortEntered ? null : 0}
                    end={5}
                  >
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
                <span>{t("Consultant.8")}</span>
              </div>
            </Col>
            <Col className={styles.counter_col} lg={3} md={3} sm={6} xs={12}>
              <div className={styles.count_wrap}>
                <strong  data-number="1200">
                  <CountUp
                    {...rest}
                    start={viewPortEntered ? null : 0}
                    end={84}
                  >
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
                <span>{t("Consultant.9")}</span>
              </div>
            </Col>
          </Row>
        </WrapperContainer>

      </section>
    </>
  );
}

export default Counter;
