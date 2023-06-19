import React from 'react'
import HeroCommon from '../../../common/hero'
import UslugiAnalyticBg from '../../../assets/uslugi-analyticBg.png'
import { useTranslation } from 'react-i18next'
import styles from './style.module.css'

const Hero = () => {
    const { t } = useTranslation()
    return (
        <>
            <HeroCommon
                className={styles.uslugi_analytic_hero_box}
                bgImg={UslugiAnalyticBg}
                title={t("UslugiAnalytic.0")}
                isBtn={false}
                isText={false}
            />
        </>
    )
}

export default Hero