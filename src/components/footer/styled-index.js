import styled from "styled-components";

export const Wrapper = styled.div`
width: 100%;
background-color: #1B1A1A;
padding-top: 50px;
.Footer-top-left{
    display: flex;
    flex-direction: column;
    img{
        margin-bottom: 61px;
    }
    p{
        font-family: 'Gilroy';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 130%;
        letter-spacing: 0.01em;
        color: #FFFFFF;
    }
    span{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 130%;
        letter-spacing: 0.01em;
        color: #F5F5F5;
    }

}
.Footer-top-ul{
        margin: 0;
        padding: 0;
        ul{
            margin: 0;
            padding: 0;
            p{
                margin: 0;
                padding: 0;
                font-family: 'Gilroy';
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                line-height: 130%;
                letter-spacing: 0.01em;
                color: #FFFFFF;
                margin-bottom: 19px;
            }
            li{
                list-style-type: none;
                a{
                text-decoration: none;
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 400;
                font-size: 14px;
                line-height: 130%;
                letter-spacing: 0.01em;
                color: #F5F5F5;
                }
            }
        }
    }
`