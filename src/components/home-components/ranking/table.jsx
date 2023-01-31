import React, { useState, useEffect } from "react";
import { Table } from "antd";
import { useTranslation } from "react-i18next";
// const { t, i18n } = useTranslation();
import { NavLink } from "react-router-dom";
import { GetRanking, GetRankingId } from "../../../redux/ranking/index";
import { useDispatch, useSelector } from "react-redux";

const Tables = ({ sorts, search }) => {
  console.log(sorts);
  const LangVal = () => {
    return window.localStorage.getItem("i18nextLng");
  };
  const { t, i18n } = useTranslation();
  const data = [];
  const dispatch = useDispatch();
  const getranking = useSelector((state) => state.ranking.getranking?.Data);
  console.log(getranking);
  const getrankingId = useSelector((state) => state.ranking.getrankingId?.Data);

  useEffect(() => {
    dispatch(GetRanking());
  }, []);

  getranking.map((elem) => {
    if (sorts == elem.category_name || sorts == "") {
      data.push({
        key: elem.id,
        object: (
          <NavLink className="navlink" to={`/rankingprofile/${elem.id}`}>
            {LangVal() == "ru"
              ? elem.title_ru
              : LangVal() == "uz"
              ? elem.title_uz
              : LangVal() == "en"
              ? elem.title_en
              : elem.title_ru}
          </NavLink>
        ),
        reting: (
          <NavLink className="navlink" to={`/rankingprofile/${elem.id}`}>
            {elem.about_renking.slice(0, 1).map((e) => e.raiting)}
          </NavLink>
        ),
        protsent: (
          <NavLink className="navlink" to={`/rankingprofile/${elem.id}`}>
            {elem.about_renking.slice(0, 1).map((e) => e.kvartal)}
          </NavLink>
        ),
        obnavit: (
          <NavLink className="navlink" to={`/rankingprofile/${elem.id}`}>
            {elem.about_renking.slice(0, 1).map((e) => e.atribut)}
          </NavLink>
        ),
      });
    }
  });

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
      title: `${t("Rating.13")}`,
      dataIndex: "protsent",
    },
    {
      title: `${t("Rating.14")}`,
      dataIndex: "obnavit",
    },
  ];

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <div>
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
      <div className="table-scroll">
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
        />
      </div>
    </div>
  );
};
export default Tables;
