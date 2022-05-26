import { Table } from "antd";
import React from "react";

const DataTable = ({products}) => {

    const columns = [
        {
          title: 'Title',
          dataIndex: 'title',
          key: 'title',
        },
        {
          title: 'Brand',
          dataIndex: 'brand',
          key: 'brand',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
          },
          {
            title: 'Rating',
            dataIndex: 'rating',
            key: 'rating',
          },
          {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
          },
        {
          title: 'Thumbnail',
          key: 'thumbnail',
          dataIndex: 'thumbnail',
          render: (thumbnail) => (
            <img src={thumbnail} width={100} alt="" />
          ),
        },
      ];
  return (
    <div style={styles.container} >
      <Table
        columns={columns}
        dataSource={products}
        pagination={{pageSize:5}}
      />
    </div>
  );
};

const styles = {
  container: {
    margin: "60px 300px",
  },
}

export default DataTable;
