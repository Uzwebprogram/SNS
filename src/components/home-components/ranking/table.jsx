import React, { useState, useEffect } from "react";
import { Table } from "antd";
import { useTranslation } from "react-i18next";
// const { t, i18n } = useTranslation();
import { NavLink, useParams } from "react-router-dom";
import { GetRanking, GetRankingId } from "../../../redux/ranking/index";
import { useDispatch, useSelector } from "react-redux";

const Tables = ({
  sorts,
  search,
  getranking,
  arr3,
  atribut,
  arr4,
  atributs,
  yearBoolean,
  Year1,
  Year2,
  arr5,
  AtributBoolean,
}) => {
  const LangVal = () => {
    return window.localStorage.getItem("i18nextLng");
  };
  const { t, i18n } = useTranslation();
  const data = [];
  function financial(x) {
    return Number.parseFloat(x).toFixed(1);
  }
  const numers = []
  data.push({
    key: 1,
    object: null,
    reting: Year1 == undefined ? `${t("Ranking.11")}` : `${Year1}  | ${Year2} `,
    obnavit: null,
    mlrd: Year1 == undefined ? `${t("Ranking.11")}` : `${Year1}  | ${Year2} `,
    rank: Year1 == undefined ? `${t("Ranking.11")}` : `${Year1}  | ${Year2} `,
  });
  // console.log(arr3);
  // console.log(getranking);
  const dispatch = useDispatch();
  const getrankingId = useSelector((state) => state.ranking.getrankingId?.Data);
  // eslint-disable-next-line no-lone-blocks, no-unused-expressions
  {
    atribut == false
      ? getranking?.map((elem) => {
          if (sorts == elem.category_name || sorts == elem.category_name_ru || sorts == elem.category_name_en || sorts == undefined) {
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
              protsent: (
                <NavLink className="navlink" to={`/rankingprofile/${elem.id}`}>
                  {elem.inn}
                </NavLink>
              ),

              obnavit: (
                <NavLink className="navlink" to={`/rankingprofile/${elem.id}`}>
                  {elem.about_renking.slice(0, 1).map((e) => e.atribut)}
                </NavLink>
              ),
            });
          }
        })
      : yearBoolean == false
      ? arr3?.map((elem) => {
          if (sorts == elem.category_name || sorts == elem.category_name_ru || sorts == elem.category_name_en || sorts == undefined) {
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
              protsent: (
                <NavLink className="navlink" to={`/rankingprofile/${elem.id}`}>
                  {elem.inn}
                </NavLink>
              ),
              obnavit: (
                <NavLink className="navlink" to={`/rankingprofile/${elem.id}`}>
                  {elem.about_renking.slice(0, 1).map((e) => e.atribut)}
                </NavLink>
              ),
            });
          }
        })
      : AtributBoolean == false
      ? arr4.map((elem) =>
          elem.about_renking.filter((e) => atributs == e.atribut || atributs == e.atribut_ru || atributs == e.atribut_en)
            ? data.push({
                key: elem.id,
                object: (
                  <NavLink
                    className="navlink"
                    to={`/rankingprofile/${elem.id}`}
                  >
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
                  <NavLink
                    className="navlink"
                    to={`/rankingprofile/${elem.id}`}
                  >
                      <p>
                      {elem.about_renking
                      .filter((e) => atributs == e.atribut || atributs == e.atribut_ru || atributs == e.atribut_en)
                      .slice(0, 1)
                      .map((item) => item.raiting)}
                      </p>
                    <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                      {" "}
                      |{" "}
                    </span>
                          <p>
                          {elem.about_renking
                      .filter((e) => atributs == e.atribut || atributs == e.atribut_ru || atributs == e.atribut_en)
                      .slice(1, 2)
                      .map((item) => item.raiting)}
                          </p>
                  </NavLink>
                ),
                protsent: (
                  <NavLink
                    className="navlink"
                    to={`/rankingprofile/${elem.id}`}
                  >
                    {elem.inn}
                  </NavLink>
                ),
                mlrd: (
                  <NavLink
                    className="navlink"
                    to={`/rankingprofile/${elem.id}`}
                  >
                      <p>                    {elem.about_renking
                      .filter((e) => atributs == e.atribut || atributs == e.atribut_ru || atributs == e.atribut_en)
                      .slice(0, 1)
                      .map((item) => item.sum)}</p>
                    <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                      {" "}
                      |{" "}
                    </span>
                        <p>
                        {elem.about_renking
                      .filter((e) => atributs == e.atribut || atributs == e.atribut_ru || atributs == e.atribut_en)
                      .slice(1, 2)
                      .map((item) => item.sum)}
                        </p>
                  </NavLink>
                ),
                obnavit: (
                  <NavLink
                    className="navlink"
                    to={`/rankingprofile/${elem.id}`}
                  >
                    {elem.about_renking
                      .filter((e) => atributs == e.atribut || atributs == e.atribut_ru || atributs == e.atribut_en)
                      .slice(0, 1)
                      .map((item) => item.atribut)}
                  </NavLink>
                ),
                rank:(
                  <NavLink
                  className="navlink"
                  to={`/rankingprofile/${elem.id}`}
                >
                    <p>                   
                       {elem.about_renking
                    .filter((e) => atributs == e.atribut || atributs == e.atribut_ru || atributs == e.atribut_en).slice(0 , 1).map((item) => item.ranges)}</p>
                    <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                      {" "}
                      |{" "}
                    </span>
                    <p>                   
                       {elem.about_renking
                    .filter((e) => atributs == e.atribut || atributs == e.atribut_ru || atributs == e.atribut_en).slice(1 , 2).map((item) => item.ranges)}</p>
                </NavLink> 
                ),
                foiz: (
                  <NavLink>
                    {financial( +elem.about_renking
                      .filter(
                        (e) =>
                          atributs == e.atribut || atributs == e.atribut_ru || atributs == e.atribut_en &&
                          (Year1 == e.god || Year2 == e.god)
                      )
                      .slice(1, 2)
                      .map((item) => Number(item.sum)) * 100 /
                      +elem.about_renking
                        .filter(
                          (e) =>
                            atributs == e.atribut || atributs == e.atribut_ru || atributs == e.atribut_en &&
                            (Year1 == e.god || Year2 == e.god)
                        )
                        .slice(0, 1)
                        .map((item) => Number(item.sum)) - 100) == -100  ? 0 : financial( +elem.about_renking
                          .filter(
                            (e) =>
                              atributs == e.atribut || atributs == e.atribut_ru || atributs == e.atribut_en &&
                              (Year1 == e.god || Year2 == e.god)
                          )
                          .slice(1, 2)
                          .map((item) => Number(item.sum)) * 100 /
                          +elem.about_renking
                            .filter(
                              (e) =>
                                atributs == e.atribut || atributs == e.atribut_ru || atributs == e.atribut_en &&
                                (Year1 == e.god || Year2 == e.god)
                            )
                            .slice(0, 1)
                            .map((item) => Number(item.sum)) - 100)}  %
                  </NavLink>
                ),
              })
            : null
        )
      : arr5.map((elem) =>
          elem.about_renking.filter((e) => atributs == e.atribut || atributs == e.atribut_ru || atributs == e.atribut_en)
            ? data.push({
                key: elem.id,
                object: (
                  <NavLink
                    className="navlink"
                    to={`/rankingprofile/${elem.id}`}
                  >
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
                  <NavLink
                    className="navlink"
                    to={`/rankingprofile/${elem.id}`}
                  >
                      <p>                    
                          {elem.about_renking
                      .filter(
                        (e) =>
                          atributs == e.atribut || atributs == e.atribut_ru || atributs == e.atribut_en &&
                          (Year1 == e.god || Year2 == e.god)
                      )
                      .slice(0, 1)
                      .map((item) => item.raiting)}</p>
                    <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                      {" "}
                      |{" "}
                    </span>
                        <p>
                        {elem.about_renking
                      .filter(
                        (e) =>
                          atributs == e.atribut || atributs == e.atribut_ru || atributs == e.atribut_en &&
                          (Year1 == e.god || Year2 == e.god)
                      )
                      .slice(1, 2)
                      .map((item) => item.raiting)}
                        </p>
                  </NavLink>
                ),
                protsent: (
                  <NavLink
                    className="navlink"
                    to={`/rankingprofile/${elem.id}`}
                  >
                    {elem.inn}

                  </NavLink>
                ),

                mlrd: (
                  <NavLink
                    className="navlink"
                    to={`/rankingprofile/${elem.id}`}
                  >
                      <p>
                      {elem.about_renking
                      .filter(
                        (e) =>
                         
                          (  atributs == e.atribut || atributs == e.atribut_ru || atributs == e.atribut_en && Year1 == e.god || Year2 == e.god)
                      )
                      .slice(0, 1)
                      .map((item) => item.sum)}
                      </p>
                    <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                      {" "}
                      |{" "}
                    </span>
                      <p>
                            {elem.about_renking
                      .filter(
                        (e) =>
                          atributs == e.atribut || atributs == e.atribut_ru || atributs == e.atribut_en &&
                          (Year1 == e.god || Year2 == e.god)
                      )
                      .slice(1, 2)
                      .map((item) => item.sum)}
                            </p>

                  </NavLink>
                ),
                obnavit: (
                  <NavLink
                    className="navlink"
                    to={`/rankingprofile/${elem.id}`}
                  >
                    {elem.about_renking
                      .filter(
                        (e) =>
                          ( atributs == e.atribut || atributs == e.atribut_ru || atributs == e.atribut_en && Year1 == e.god || Year2 == e.god)
                      )
                      .slice(0, 1)
                      .map((item) => item.atribut)}
                  </NavLink>
                ),
                rank:(
                  <NavLink
                  className="navlink"
                  to={`/rankingprofile/${elem.id}`}
                >
                    <p>                   
                       {elem.about_renking
                    .filter((e) => atributs == e.atribut || atributs == e.atribut_ru || atributs == e.atribut_en).slice(0 , 1).map((item) => item.ranges)}</p>
                    <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                      {" "}
                      |{" "}
                    </span>
                    <p>                   
                       {elem.about_renking
                    .filter((e) => atributs == e.atribut || atributs == e.atribut_ru || atributs == e.atribut_en).slice(1 , 2).map((item) => item.ranges)}</p>
                </NavLink> 
                ),
                foiz: (
                  <NavLink>
                    {financial( +elem.about_renking
                      .filter(
                        (e) =>
                          atributs == e.atribut || atributs == e.atribut_ru || atributs == e.atribut_en &&
                          (Year1 == e.god || Year2 == e.god)
                      )
                      .slice(1, 2)
                      .map((item) => Number(item.sum)) * 100 /
                      +elem.about_renking
                        .filter(
                          (e) =>
                            atributs == e.atribut || atributs == e.atribut_ru || atributs == e.atribut_en &&
                            (Year1 == e.god || Year2 == e.god)
                        )
                        .slice(0, 1)
                        .map((item) => Number(item.sum)) - 100) == -100  ? 0 : financial( +elem.about_renking
                          .filter(
                            (e) =>
                              atributs == e.atribut || atributs == e.atribut_ru || atributs == e.atribut_en &&
                              (Year1 == e.god || Year2 == e.god)
                          )
                          .slice(1, 2)
                          .map((item) => Number(item.sum)) * 100 /
                          +elem.about_renking
                            .filter(
                              (e) =>
                                atributs == e.atribut || atributs == e.atribut_ru || atributs == e.atribut_en &&
                                (Year1 == e.god || Year2 == e.god)
                            )
                            .slice(0, 1)
                            .map((item) => Number(item.sum)) - 100)}  %
                  </NavLink>
                ),
              })
            : null
        );
  }
  // eslint-disable-next-line no-lone-blocks

  const columns = [
    {
      title: `${t("Rating.4")}`,
      dataIndex: "object",
    },
    {
      title: `${t("Auth.4")}`,
      dataIndex: "protsent",
    },
    {
      title: `${t("Rating.16")}`,
      dataIndex: "mlrd",
      width:100
    },
    {
      title: `${t("Ranking.6")}`,
      dataIndex: "reting",
      width:100
    },
    {
      title: `${t("Rating.19")}`,
      dataIndex: "rank",
      width:100
    },
    {
      title: `${t("Ranking.12")}`,
      dataIndex: "foiz",
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
          scroll={{ x: 240 }}
        />
      </div>
    </div>
  );
};
export default Tables;
