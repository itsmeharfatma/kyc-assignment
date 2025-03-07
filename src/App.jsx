import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CompareProductsPage from "./pages/CompareProductsPage";

const { Content } = Layout;

const App = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  return (
    <Router>
      <Layout style={{ height: "100vh", width: "100vw" }}>
        <Sidebar />
        <Layout>
          <Navbar />
          <Content style={{ padding: "20px", minWidth: '100%', }}>
            <Routes>
              <Route
                path="/"
                element={
                  <ProductDetailsPage
                    selectedProducts={selectedProducts}
                    setSelectedProducts={setSelectedProducts}
                  />
                }
              />
              <Route
                path="/compare"
                element={
                  <CompareProductsPage
                    selectedProducts={selectedProducts}
                    setSelectedProducts={setSelectedProducts}
                  />
                }
              />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
