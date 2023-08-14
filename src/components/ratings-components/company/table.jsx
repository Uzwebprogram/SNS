import React, { useState, useEffect } from "react";
import { Table } from "antd";
import { useTranslation } from "react-i18next";
// const { t, i18n } = useTranslation();
import { NavLink } from "react-router-dom";
import { GetBanks, GetBanksId } from "../../../redux/bank/index";
import { useDispatch, useSelector } from "react-redux";
import { Spin } from "antd";
import RatingType1Modal from '../../uslugi-rating/types-rating/raiting-type1/index'
import RatingType2Modal from '../../uslugi-rating/types-rating/raiting-type2/index'
import RatingType3Modal from '../../uslugi-rating/types-rating/raiting-type3/index'
import RatingType4Modal from '../../uslugi-rating/types-rating/raiting-type4/index'

import Link from "./../../../assets/icons-link.png"
import { GetRaiting } from "../../../redux/raiting";
import Cookies from "universal-cookie";
const Tables = ({ sorts, search }) => {
  const { t, i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalId, setModalId] = useState()
  const cookies = new Cookies
  const data = [];
  const dispatch = useDispatch();
  const getBanks = useSelector((state) => state.banks.getbanks?.Data);
  const getBanksId = useSelector((state) => state.banks.getbanksId?.Data);
  const getBankSearch = useSelector(
    (state) => state.banks.getbanksSearch?.Data
  );
  useEffect(() => {
    dispatch(GetBanks());
  }, []);
  useEffect(() => {
    dispatch(GetRaiting())
  }, [])
  function GetLanguageValue() {
    return cookies.get("i18next")
  }
  const GetRating = useSelector((state) => state.raiting.getRaiting.Data)
  function DateFunction(originalDateTime) {
    const [datePart, timePart] = originalDateTime.split(' ');
    const [year, month, day] = datePart.split('-');

    const newFormattedDate = `${day}-${month}-${year}`;

    return newFormattedDate
  }
  const GetRatingFilter = GetRating.filter(e => e.bank_id == getBanks.map(elem => elem.bank_id))
  const handleId = (e) => {
    // e.preventDefault()
    setIsModalOpen(true)
    setModalId(e.currentTarget?.id)
  }
  if (sorts == "" && search == "") {
    getBanks.map((elem) => {
      data.push({
        key: elem.bank_id,
        object: (
          <NavLink className="navlink" to={`/companyprofile/${elem.bank_id}`}>
            {elem.companyname}
          </NavLink>
        ),
        reting: (
          <NavLink className="navlink" to={`/companyprofile/${elem.bank_id}`}>
            {GetRating.filter(e => e.bank_id == elem.bank_id).slice(0 , 1).map((e) => e.raiting)}
          </NavLink>
        ),
        bidreting: (
          <a className="navlink" onClick={handleId} id={GetRating.filter(e => e.bank_id == elem.bank_id).slice(0 , 1).map((e) => e.link)}>
            {GetRating.filter(e => e.bank_id == elem.bank_id).slice(0 , 1).map((e) =>  GetLanguageValue() == 'ru' ?  e.type_reting : GetLanguageValue() == "uz"? e.type_reting_uz :GetLanguageValue() == "en"? e.type_reting_en :null)}
          </a>
        ),
        protsent: (
          <a className="navlink" href={GetRating.filter(e => e.bank_id == elem.bank_id).slice(0 , 1).map((e) => e.update_date_pdf)} target={"_blank"}>
            {GetRating.filter(e => e.bank_id == elem.bank_id).slice(0 , 1).map((e) => DateFunction(e.update_date))}
          <img src={Link} width={17} style={{ marginLeft: "10px" }} height={17} alt="" />
          </a>
        ),
        obnavit: (
          <a className="navlink" href={GetRating.filter(e => e.bank_id == elem.bank_id).slice(0 , 1).map((e) => e.update_date_pdf)} target={"_blank"}>
            {GetRating.filter(e => e.bank_id == elem.bank_id).slice(0 , 1).map((e) => GetLanguageValue() == 'ru' ?  e.prognoz : GetLanguageValue() == "uz"? e.prognoz_uz :GetLanguageValue() == "en"? e.prognoz_en :null)}
            
          </a>
        ),
      });
    });
  } else if (search) {
    getBankSearch.map((elem) => {
      data.push({
        key: elem.bank_id,
        object: (
          <NavLink className="navlink" to={`/companyprofile/${elem.bank_id}`}>
            {elem.companyname}
          </NavLink>
        ),
        reting: (
          <NavLink className="navlink" to={`/companyprofile/${elem.bank_id}`}>
            {GetRating.filter(e => e.bank_id == elem.bank_id).slice(0 , 1).map((e) => e.raiting)}
          </NavLink>
        ),
        bidreting: (
          <a className="navlink" onClick={handleId} id={GetRating.filter(e => e.bank_id == elem.bank_id).slice(0 , 1).map((e) => e.link)}>
            {GetRating.filter(e => e.bank_id == elem.bank_id).slice(0 , 1).map((e) => e.type_reting)}
          </a>
        ),
        protsent: (
          <a className="navlink" href={GetRating.filter(e => e.bank_id == elem.bank_id).slice(0 , 1).map((e) => e.update_date_pdf)} target={"_blank"}>
            {GetRating.filter(e => e.bank_id == elem.bank_id).slice(0 , 1).map((e) => DateFunction(e.update_date))}
          <img src={Link} width={17} style={{ marginLeft: "10px" }} height={17} alt="" />
          </a>
        ),
        obnavit: (
          <a className="navlink" href={GetRating.filter(e => e.bank_id == elem.bank_id).slice(0 , 1).map((e) => e.update_date_pdf)} target={"_blank"}>
                       {GetRating.filter(e => e.bank_id == elem.bank_id).slice(0 , 1).map((e) => GetLanguageValue() == 'ru' ?  e.prognoz : GetLanguageValue() == "uz"? e.prognoz_uz :GetLanguageValue() == "en"? e.prognoz_en :null)}
            
          </a>
        ),
      });
    });
  } else {
    getBanksId.map((elem) => {
      if (elem.category_id == sorts) {
        data.push({
          key: elem.bank_id,
          object: (
            <NavLink className="navlink" to={`/companyprofile/${elem.bank_id}`}>
              {elem.companyname}
            </NavLink>
          ),
          reting: (
            <NavLink className="navlink" to={`/companyprofile/${elem.bank_id}`}>
              {GetRating.filter(e => e.bank_id == elem.bank_id).slice(0 , 1).map((e) => e.raiting)}
            </NavLink>
          ),
          bidreting: (
            <a className="navlink" onClick={handleId} id={GetRating.filter(e => e.bank_id == elem.bank_id).slice(0 , 1).map((e) => e.link)}>
              {GetRating.filter(e => e.bank_id == elem.bank_id).slice(0 , 1).map((e) => e.type_reting)}
            </a>
          ),
          protsent: (
            <a className="navlink" href={GetRating.filter(e => e.bank_id == elem.bank_id).slice(0 , 1).map((e) => e.update_date_pdf)} target={"_blank"}>
              {GetRating.filter(e => e.bank_id == elem.bank_id).slice(0 , 1).map((e) => DateFunction(e.update_date))}
            <img src={Link} width={17} style={{ marginLeft: "10px" }} height={17} alt="" />
            </a>
          ),
          obnavit: (
            <a className="navlink" href={GetRating.filter(e => e.bank_id == elem.bank_id).slice(0 , 1).map((e) => e.update_date_pdf)} target={"_blank"}>
                         {GetRating.filter(e => e.bank_id == elem.bank_id).slice(0 , 1).map((e) => GetLanguageValue() == 'ru' ?  e.prognoz : GetLanguageValue() == "uz"? e.prognoz_uz :GetLanguageValue() == "en"? e.prognoz_en :null)}
              
            </a>
          ),
        });
      } else {
        return null;
      }
    });
  }
  const columns = [
    {
      title: `${t("Rating.4")}`,
      dataIndex: "object",
    },
    {
      title: `${t("Rating.5")}`,
      dataIndex: "reting",
    },
    {
      title: `${t("Rating.20")}`,
      dataIndex: "bidreting",
    },
    {
      title: `${t("Rating.6")}`,
      dataIndex: "obnavit",
    },
    {
      title: `${t("Rating.7")}`,
      dataIndex: "protsent",
      width: 130,
    },
  ];

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <div>
      {modalId == 1 ? <RatingType1Modal handleCancel={handleCancel} isModalOpen={isModalOpen} /> : null}
      {modalId == 2 ? <RatingType2Modal handleCancel1={handleCancel} isModalOpen1={isModalOpen} /> : null}
      {modalId == 3 ? <RatingType3Modal handleCancel2={handleCancel} isModalOpen2={isModalOpen} /> : null}
      {modalId == 4 ? <RatingType4Modal handleCancel3={handleCancel} isModalOpen3={isModalOpen} /> : null}
      {/* {modalId == 1 ? <RatingType1Modal isModalOpen={isModalOpen} /> : modalId == 2 ? <RatingType2Modal isModalOpen={isModalOpen} /> : modalId == 3 ? <RatingType3Modal isModalOpen={isModalOpen} /> : modalId == 4 ? <RatingType4Modal isModalOpen={isModalOpen} /> : null} */}
      <div
        style={{
          marginBottom: 16,
        }}
      >
        <span
          style={{
            marginLeft: 8,
          }}
        >
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
        </span>
      </div>
      {/* <button onClick={showModal}>open modal</button> */}
      <div className="table-scroll">

        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          scroll={{
            x: 200,
          }}
        />
      </div>
    </div>
  );
};
export default Tables;
