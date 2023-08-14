import React from 'react'
import HeroCommon from '../../../common/hero'
import FinanceConsultBg from '../../../assets/finance-consultBg.png'
import { useTranslation } from 'react-i18next'
import styles from './style.module.css'

const Hero = () => {
    const { t } = useTranslation()
    return (
        <>
            <HeroCommon
                className={styles.finance_consult_hero_box}
                bgImg={FinanceConsultBg}
                title={t("FinanceConsult.0")}
                isBtn={false}
                isText={false}
            />
        </>
    )
}

export default Hero