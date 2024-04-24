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
      <section className="counter">
        <WrapperContainer>
          <Row className={styles.row}>
            <Col className={styles.col} lg={4} md={4} sm={12} sx={12}>
              <div className={styles.count_wrap}>
                <strong className="strong" data-number="8">
                  <CountUp {...rest} start={viewPortEntered ? null : 0} end={8}>
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
                          <span className="number" ref={countUpRef} />
                        </ReactVisibilitySensor>
                      );
                    }}
                  </CountUp>
                  <span>+</span>
                </strong>
                <span>{t("About.3")}</span>
              </div>
            </Col>
            <Col className={styles.col} lg={4} md={4} sm={12} sx={12}>
              <div className={styles.count_wrap}>
                <strong className="strong" data-number="250">
                  <CountUp {...rest} start={viewPortEntered ? null : 0} end={250}>
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
                          <span className="number" ref={countUpRef} />
                        </ReactVisibilitySensor>
                      );
                    }}
                  </CountUp>
                  <span>+</span>
                </strong>
                <span>{t("About.4")}</span>
              </div>
            </Col>
            <Col className={styles.col} lg={4} md={4} sm={12} sx={12}>
              <div className={styles.count_wrap}>
                <strong className="strong" data-number="1200">
                  <CountUp
                    {...rest}
                    start={viewPortEntered ? null : 0}
                    end={1200}
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
                          <span className="number" ref={countUpRef} />
                        </ReactVisibilitySensor>
                      );
                    }}
                  </CountUp>
                  <span>+</span>
                </strong>
                <span>{t("About.5")}</span>
              </div>
            </Col>
          </Row>
        </WrapperContainer>

      </section>
    </>
  );
}

export default Counter;
