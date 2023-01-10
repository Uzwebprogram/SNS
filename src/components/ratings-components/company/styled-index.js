import styled from "styled-components";

export const WrapperPress = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 20px -10px #cccccc;
  border-radius: 15px;
  padding: 25px;
  @media only screen and (max-width: 425px) {
    border-radius: 0;
    box-shadow: none;
    padding: 10px;

    .row {
      margin: 0 !important;
    }

    .col {
      padding: 0 !important;
    }
  }

  h2 {
    font-family: "Gilroy";
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 130%;
    margin-top: 0;
    letter-spacing: 0.01em;
    color: #1e1e1e;
  }

  form {
    width: 100%;
  }

  .col {
    select {
      width: 100%;
      border: 1px solid #cccccc;
      border-radius: 5px;
      outline: none;
      padding: 10px;
      margin-bottom: 15px;
      @media only screen and (max-width: 320px) {
        width: 100%;
      }
    }

    .input-group {
      border: 1px solid #cccccc;
      border-radius: 5px;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      /* width: 100%; */

      @media only screen and (max-width: 425px) {
        width: 94.5%;
      }
      @media only screen and (max-width: 375px) {
        width: 94%;
      }

      i {
        color: #1e1e1e;
        font-size: 18px;
      }

      input {
        outline: none;
        border: none;
        width: 100%;
      }
    }

    .radio-box {
      display: flex;
      align-items: center;
      margin-bottom: 7px;

      input {
        margin: 0 10px 0 0;
      }
      label {
        font-family: "Gilroy";
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 130%;
        letter-spacing: 0.01em;
        color: #2c2c2c;
      }
    }
  }

  .ant-table-selection,
  .ant-checkbox-wrapper {
    display: none !important;
  }

  .ant-table-tbody > .ant-table-row > td:nth-child(1) {
    font-family: "Montserrat" !important;
    font-style: normal !important;
    font-weight: 600 !important;
    font-size: 16px !important;
    line-height: 130% !important;
    letter-spacing: 0.01em !important;
    color: #1e1e1e !important;
  }
  .ant-table-thead > tr {
    background: #fff !important;
  }
  .ant-table-selection-col {
    width: 0 !important;
  }
  .ant-table-cell {
    background: transparent !important;
    border-top: 1px solid #f0f0f0;
  }
  .ant-table-pagination-right {
    justify-content: flex-start !important;
  }

  .ant-pagination-item-active {
    border-bottom: 1px solid #2f66b8 !important;
  }
  .ant-pagination-item-active > a {
    color: #2f66b8;
  }
  .ant-pagination-item {
    border: none;
    border-radius: 0;
  }
  .ant-table-wrapper {
    width: 100% !important;
  }

  .col-media {
    @media only screen and (max-width: 768px) {
      margin-top: 20px;
    }
  }
  .ant-table-cell {
    @media only screen and (max-width: 425px) {
      padding: 12px 6px !important;
      font-size: 12px !important;
    }
    @media only screen and (max-width: 375px) {
      padding: 12px 3px !important;
      font-size: 10px !important;
    }
  }
`;
