import styled from "styled-components";

export const Wrapper = styled.div`
width: 100%;
background-color: #1B1A1A;
padding-top: 50px;
padding-bottom: 50px;
hr{
    width: 100%;
    background-color: #616262;
    border: 1px solid #616262;
    margin-top: 50px;
    margin-bottom: 30px;
}

.Footer-top-left{
    display: flex;
    flex-direction: column;
    margin: 0 !important;
    @media only screen and (max-width:768px) {
                margin-bottom: 30px;
                }
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
        @media only screen and (max-width:768px) {
                margin-bottom: 30px;
                }
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
                @media only screen and (max-width:768px) {
                margin-bottom: 5px;
                }
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
    .Footer-Bottom-left{
    margin: 0 !important;

        p{
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 150%;
            letter-spacing: 0.01em;
            color: #F5F5F5;
        }
    }
    .Footer-Bottom-left-bottom{
    margin: 0 !important;

            a{
                font-family: 'Gilroy';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 130%;
        letter-spacing: 0.01em;
        text-decoration-line: underline;
        color: #FFFFFF;
            }
    }
    .Footer-Bottom-right{
    margin: 0 !important;

        h3{
            font-family: 'Gilroy';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 130%;
        letter-spacing: 0.01em;
        color: #FFFFFF;
        }
        p{
            font-family: 'Gilroy';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 130%;
            letter-spacing: 0.01em;
            color: #FFFFFF;
            width: 58%;
            @media only screen and (max-width: 920px) {
            width: 100%;
            }
            a{
                font-family: 'Gilroy';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 130%;
            letter-spacing: 0.01em;
                color: #2F66B8;
            }
        }
    }

`