import React, { useState } from "react";
import { Table } from "antd";
import { useTranslation } from "react-i18next";
// const { t, i18n } = useTranslation();

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    object: 'АО "РФК-БАНК"',
    reting: "byBBB+",
    protsent: "Стабильный",
    obnavit: "16/12/2021",
  });
}
const Tables = () => {
  const { t, i18n } = useTranslation();
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
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  );
};
export default Tables;
