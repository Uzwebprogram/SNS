import React from 'react'
import HeroCommon from '../../../common/hero'
import HeroImg from '../../../assets/consultantBg.png'
import { useTranslation } from 'react-i18next'
import styles from './style.module.css'

const Hero = () => {
    const { t } = useTranslation()
    return (
        <>
            <HeroCommon
                className={styles.consultant_hero_box}
                bgImg={HeroImg}
                title={t("Consultant.1")}
                text={t("STANDARD AND SENSITIVE RATINGS")}
                isBtn={true}
                btn={t("Consultant.2")}
                isText={true}
            />
        </>
    )
}

export default Hero