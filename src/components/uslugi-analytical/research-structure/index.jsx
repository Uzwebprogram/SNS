import React from 'react'
import { WrapperContainer } from '../../../style-App'
import styles from './style.module.css'
import './style.css'
import { Collapse } from 'antd';
import { useTranslation } from 'react-i18next';

const ResearchStructure = () => {
    const { t } = useTranslation()

    const items = [
        {
            key: '1',
            label: <>
                <span className='span_number'>1</span>
                <span className='span_text'> {t("UslugiAnalytic.3")}</span>
            </>,
            children: (
                <ol className={styles.research_ol}>
                    <li>
                        {t("UslugiAnalytic.4")}
                    </li>
                    <li>
                        {t("UslugiAnalytic.5")}
                    </li>
                    <li>
                        {t("UslugiAnalytic.40")}
                    </li>
                    <li>
                        {t("UslugiAnalytic.7")}
                    </li>
                    <li>
                        {t("UslugiAnalytic.8")}
                    </li>
                </ol>
            ),
        },
        {
            key: '2',
            label: <>
                <span className='span_number'>2</span>
                <span className='span_text'> {t("UslugiAnalytic.9")}</span>
            </>,
            children: (
                <ol className={styles.research_ol}>
                    <li>
                        {t("UslugiAnalytic.18")}
                    </li>
                    <li>
                        {t("UslugiAnalytic.19")}
                    </li>
                    <li>
                        {t("UslugiAnalytic.20")}
                    </li>
                </ol>
            ),
        },
        {
            key: '3',
            label: <>
                <span className='span_number'>3</span>
                <span className='span_text'> {t("UslugiAnalytic.10")}</span>
            </>,
            children: (
                <ol className={styles.research_ol}>
                    <li>
                        {t("UslugiAnalytic.21")}
                    </li>
                    <li>
                        {t("UslugiAnalytic.22")}
                    </li>
                </ol>
            ),
        },
        {
            key: '4',
            label: <>
                <span className='span_number'>4</span>
                <span className='span_text'> {t("UslugiAnalytic.11")}</span>
            </>,
            children: (
                <ol className={styles.research_ol}>
                    <li>
                        {t("UslugiAnalytic.23")}
                    </li>
                    <li>
                        {t("UslugiAnalytic.24")}
                    </li>
                    <li>
                        {t("UslugiAnalytic.25")}
                    </li>
                </ol>
            ),
        },
        {
            key: '5',
            label: <>
                <span className='span_number'>5</span>
                <span className='span_text'> {t("UslugiAnalytic.12")}</span>
            </>,
            children: (
                <ol className={styles.research_ol}>
                    <li>
                        {t("UslugiAnalytic.26")}
                    </li>
                    <li>
                        {t("UslugiAnalytic.27")}
                    </li>
                    <li>
                        {t("UslugiAnalytic.28")}
                    </li>
                    <li>
                        {t("UslugiAnalytic.29")}
                    </li>
                    <li>
                        {t("UslugiAnalytic.30")}
                    </li>
                </ol>
            ),
        },
        {
            key: '6',
            label: <>
                <span className='span_number'>6</span>
                <span className='span_text'> {t("UslugiAnalytic.13")}</span>
            </>,
            children: (
                <ol className={styles.research_ol}>
                    <li>
                        {t("UslugiAnalytic.31")}
                    </li>

                </ol>
            ),
        },
        {
            key: '7',
            label: <>
                <span className='span_number'>7</span>
                <span className='span_text'>{t("UslugiAnalytic.14")}</span>
            </>,
            children: (
                <ol className={styles.research_ol}>
                    <li>
                        {t("UslugiAnalytic.32")}
                    </li>
                </ol>
            ),
        },
        {
            key: '8',
            label: <>
                <span className='span_number'>8</span>
                <span className='span_text'> {t("UslugiAnalytic.15")}</span>
            </>,
            children: (
                <ol className={styles.research_ol}>
                    <li>
                        {t("UslugiAnalytic.33")}
                    </li>
                    <li>
                        {t("UslugiAnalytic.34")}
                    </li>
                    <li>
                        {t("UslugiAnalytic.35")}
                    </li>
                </ol>
            )
        },
        {
            key: '9',
            label: <>
                <span className='span_number'>9</span>
                <span className='span_text'> {t("UslugiAnalytic.16")}</span>
            </>,
            children: (
                <ol className={styles.research_ol}>
                    <li>
                        {t("UslugiAnalytic.36")}
                    </li>
                    <li>
                        {t("UslugiAnalytic.37")}
                    </li>
                    <li>
                        {t("UslugiAnalytic.38")}
                    </li>
                    <li>
                        {t("UslugiAnalytic.39")}
                    </li>
                </ol>
            ),
        },
    ];
    const onChange = (key) => {
        console.log(key);
    };

    return (
        <>
            <div className={styles.research_structure_section}>
                <WrapperContainer>
                    <h4 className={styles.research_structure_title}>{t("UslugiAnalytic.2")}</h4>
                    <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />
                </WrapperContainer>
            </div>
        </>
    )
}

export default ResearchStructure