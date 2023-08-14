import React from 'react'
import HeroCommon from '../../../common/hero'
import UslugiRatingImg from '../../../assets/uslugi-ratingBg.png'
import { useTranslation } from 'react-i18next'
import styles from './style.module.css'

const Hero = () => {
    const { t } = useTranslation()
    return (
        <>
            <HeroCommon
                className={styles.uslugi_rating_hero_box}
                bgImg={UslugiRatingImg}
                title={t("UslugiRating.0")}
                isBtn={false}
                isText={false}
            />
        </>
    )
}

export default Hero