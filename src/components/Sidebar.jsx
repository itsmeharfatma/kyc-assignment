import React from "react";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
const { Sider } = Layout;

const Sidebar = () => {
  const location = useLocation();

  const selectedKey = location.pathname === "/" ? "1" : "2";

  return (
    <Sider width={200} style={{ padding: "10px" }}>
      <Menu
        mode="inline"
        selectedKeys={[selectedKey]}
        theme="dark"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "6px",
        }}
      >
        <Menu.Item
          key="1"
          style={{
            backgroundColor: selectedKey === "1" ? "#334454" : "inherit",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          <Link to="/">Product Details</Link>
        </Menu.Item>
        <Menu.Item
          key="2"
          style={{
            backgroundColor: selectedKey === "2" ? "#334454" : "inherit",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          <Link to="/compare">Compare Products</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
