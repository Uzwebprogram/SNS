import styled from "styled-components";

export const WrapperPress = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 20px -10px #cccccc;
  border-radius: 15px;
  padding: 25px;
  margin-top: 20px;
  a {
    text-decoration: none;
    color: #1e1e1e;
  }
  @media only screen and (max-width: 425px) {
    margin-top: 0;
    border-radius: 0;
    box-shadow: none;

    .row {
      margin: 0 !important;
    }
  }

  .select-box {
    width: 100%;
    margin-bottom: 20px;
    select {
      width: 60%;
      border: 1px solid #cccccc;
      border-radius: 5px;
      outline: none;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      /* identical to box height */
      letter-spacing: 0.01em;
      color: #1e1e1e;
      padding: 10px 30px 10px 10px;

      @media only screen and (max-width: 425px) {
        width: 100%;
      }
    }
  }

  h2 {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 130%;
    margin-top: 0;
    letter-spacing: 0.01em;
    color: #1e1e1e;
  }

  .col {
    margin: 10px 0;
    a {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      letter-spacing: 0.01em;
      color: #1e1e1e;
      margin: 0;
      text-decoration: none;
    }

    time {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 130%;
      letter-spacing: 0.01em;
      color: #616262;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
  .press-content:last-child {
    hr {
      display: none;
    }
  }

  /* .ant-table-row:hover {
    border-left: 1px solid red !important;
    border-right: 1px solid red !important;
  } */
  .ant-table-selection,
  .ant-checkbox-wrapper {
    display: none !important;
  }

  .ant-table-wrapper .ant-table-tbody > tr > td {
    padding: 10px !important;
  }

  .ant-table-row:hover {
    background: #f5f5f5 !important;
    color: #fff !important;
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
  .table-scroll {
    @media only screen and (max-width: 425px) {
      width: 378px !important;
      overflow-x: scroll !important;
    }
    @media only screen and (max-width: 375px) {
      width: 345px !important;
      overflow-x: scroll !important;
    }
    @media only screen and (max-width: 320px) {
      width: 250px !important;
      overflow-x: scroll !important;
    }
  }
`;
