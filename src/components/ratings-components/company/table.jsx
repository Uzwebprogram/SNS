import React, { useState, useEffect } from "react";
import { Table } from "antd";
import { useTranslation } from "react-i18next";
// const { t, i18n } = useTranslation();
import { NavLink } from "react-router-dom";
import { GetBanks, GetBanksId } from "../../../redux/bank/index";
import { useDispatch, useSelector } from "react-redux";
import { Spin } from "antd";

const Tables = ({ sorts, search }) => {
  const { t, i18n } = useTranslation();
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
            {elem.raiting.slice(0, 1).map((e) => e.raiting)}
          </NavLink>
        ),
        bidreting: (
          <NavLink className="navlink" to={`/companyprofile/${elem.bank_id}`}>
            {elem.raiting.map((e) => e.type_reting)}
          </NavLink>
        ),
        protsent: (
          <NavLink className="navlink" to={`/companyprofile/${elem.bank_id}`}>
            {elem.raiting.slice(0, 1).map((e) => e.prognoz)}
          </NavLink>
        ),
        obnavit: (
          <NavLink className="navlink" to={`/companyprofile/${elem.bank_id}`}>
            {elem.raiting.slice(0, 1).map((e) => e.update_date)}
          </NavLink>
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
            {elem.raiting.slice(0, 1).map((e) => e.raiting)}
          </NavLink>
        ),
        bidreting: (
          <NavLink className="navlink" to={`/companyprofile/${elem.bank_id}`}>
            {elem.raiting.slice(0, 1).map((e) => e.type_reting)}
          </NavLink>
        ),
        protsent: (
          <NavLink className="navlink" to={`/companyprofile/${elem.bank_id}`}>
            {elem.raiting.slice(0, 1).map((e) => e.prognoz)}
          </NavLink>
        ),
        obnavit: (
          <NavLink className="navlink" to={`/companyprofile/${elem.bank_id}`}>
            {elem.raiting.slice(0, 1).map((e) => e.update_date)}
          </NavLink>
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
              {elem.raiting.slice(0, 1).map((e) => e.raiting)}
            </NavLink>
          ),
          bidreting: (
            <NavLink className="navlink" to={`/companyprofile/${elem.bank_id}`}>
              {elem.raiting.slice(0, 1).map((e) => e.type_reting)}
            </NavLink>
          ),
          protsent: (
            <NavLink className="navlink" to={`/companyprofile/${elem.bank_id}`}>
              {elem.raiting.slice(0, 1).map((e) => e.prognoz)}
            </NavLink>
          ),
          obnavit: (
            <NavLink className="navlink" to={`/companyprofile/${elem.bank_id}`}>
              {elem.raiting.slice(0, 1).map((e) => e.update_date)}
            </NavLink>
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
      title: `${t("Rating.19")}`,
      dataIndex: "bidreting",
    },
    {
      title: `${t("Rating.6")}`,
      dataIndex: "protsent",
    },
    {
      title: `${t("Rating.7")}`,
      dataIndex: "obnavit",
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
          scroll={{
            x: 200,
          }}
        />
      </div>
    </div>
  );
};
export default Tables;
