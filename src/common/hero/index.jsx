import React from "react";
import { HeroSection, Button } from './style-index'
import { WrapperContainer } from '../../style-App'


const HeroCommon = ({ bgImg, title, text, btn, isBtn, isText, style, styleText, styleTitle, className }) => {
    return (
        <>
            <HeroSection bgImg={bgImg}>
                <WrapperContainer>
                    <div className={className} style={style}>

                        {
                            isText == true ? <p style={styleText}>{text}</p> : null
                        }
                        <h4 style={styleTitle}>{title}</h4>
                        {
                            isBtn == true ? <Button>{btn}</Button> : null
                        }
                    </div>

                </WrapperContainer>
            </HeroSection>
        </>
    )
}

export default HeroCommon