import React, { useEffect, useState } from "react";
import { Table, Button } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProductDetailsPage = ({ selectedProducts, setSelectedProducts }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => setProducts(response.data.products))
      .catch((error) => console.error(error));
  }, []);

  const handleCompare = (product) => {
    setSelectedProducts([...selectedProducts, product]);
    navigate("/compare");
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      sorter: (a, b) => a.title.localeCompare(b.title),
    },
    { title: "Description", dataIndex: "description", key: "description" },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Discount Percentage",
      dataIndex: "discountPercentage",
      key: "discountPercentage",
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
      sorter: (a, b) => a.brand.localeCompare(b.brand),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      sorter: (a, b) => a.category.localeCompare(b.category),
    },
    {
      title: "Thumbnail",
      dataIndex: "thumbnail",
      key: "thumbnail",
      render: (text) => <img src={text} alt="thumbnail" width={50} />,
    },
    {
      title: "Compare",
      key: "compare",
      render: (text, record) => (
        <Button
          disabled={selectedProducts.includes(record)}
          onClick={() => handleCompare(record)}
        >
          Compare
        </Button>
      ),
    },
  ];

  return (
    <Table
      style={{ width: "100%" }}
      dataSource={products}
      columns={columns}
      pagination={{ pageSize: 5 }}
      rowKey="id"
    />
  );
};

export default ProductDetailsPage;
