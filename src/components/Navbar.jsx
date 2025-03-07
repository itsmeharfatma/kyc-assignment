import React from "react";
import { Layout, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { Header } = Layout;

const Navbar = () => {
  return (
    <Header
      style={{
        height: 80,
        paddingInline: 20,
        lineHeight: "80px",
        backgroundColor: "#fff",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Avatar
        src="https://placeit-img-1-p.cdn.aws.placeit.net/uploads/stage/stage_image/49250/optimized_large_thumb_stage.jpg"
        shape="square"
        size={64}
        style={{ cursor: "pointer" }}
      />
      <Avatar size={38} icon={<UserOutlined />} style={{ cursor: "pointer" }} />
    </Header>
  );
};

export default Navbar;
