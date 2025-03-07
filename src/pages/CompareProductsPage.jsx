import React, { useState } from "react";
import { Table, Button, Modal } from "antd";
import axios from "axios";

const CompareProductsPage = ({ selectedProducts, setSelectedProducts }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [allProducts, setAllProducts] = useState([]);

  const showModal = () => {
    setIsModalVisible(true);
    axios
      .get("https://dummyjson.com/products")
      .then((response) => setAllProducts(response.data.products))
      .catch((error) => console.error(error));
  };

  const handleAddProduct = (product) => {
    if (selectedProducts.length < 4 && !selectedProducts.includes(product)) {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const handleRemoveProduct = (product) => {
    setSelectedProducts(selectedProducts.filter((p) => p.id !== product.id));
  };

  const columns = [
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Price", dataIndex: "price", key: "price" },
    { title: "Brand", dataIndex: "brand", key: "brand" },
    { title: "Category", dataIndex: "category", key: "category" },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Button onClick={() => handleAddProduct(record)}>Add</Button>
      ),
    },
  ];

  return (
    <div>
      <Button onClick={showModal}>Add More</Button>
      <Modal
        title="Add Products to Compare"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Table
          dataSource={allProducts}
          columns={columns}
          rowKey="id"
          pagination={{ pageSize: 4 }}
        />
      </Modal>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        {selectedProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              width: "200px",
              borderRadius: "6px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h3>{product.title}</h3>
            <img src={product.thumbnail} alt={product.title} width="100%" />
            <p>
              <strong>Price:</strong> ${product.price}
            </p>
            <p>
              <strong>Brand:</strong> {product.brand}
            </p>
            <p>
              <strong>Category:</strong> {product.category}
            </p>
            <p>
              <strong>Discount:</strong> {product.discountPercentage}%
            </p>
            <Button
              type="primary"
              danger
              onClick={() => handleRemoveProduct(product)}
              style={{ marginTop: "10px" }}
            >
              Remove
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompareProductsPage;
