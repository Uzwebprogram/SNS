import React from 'react'
import { useTranslation } from 'react-i18next'
function Home() {
  const {t , i18n}= useTranslation();
  return (
    <div>
      {t("Header.0")}
    </div>
  )
}

export default Home