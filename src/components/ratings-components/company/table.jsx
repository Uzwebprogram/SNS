import React, { useState } from "react";
import { Button, Table } from "antd";
const columns = [
  {
    title: "Объект",
    dataIndex: "object",
  },
  {
    title: "Рейтинг",
    dataIndex: "reting",
  },
  {
    title: "Прогноз",
    dataIndex: "protsent",
  },
  {
    title: "Обновлен",
    dataIndex: "obnavit",
  },
];
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
