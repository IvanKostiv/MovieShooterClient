import React, { Component } from "react";

import { Menu, Button } from "antd";
import "../Sidebar/Sidebar.css";

import { HomeOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";

import MovieIcon from "../Icons/MovieIcon";

const { SubMenu } = Menu;

class Sidebar extends Component {
  state = {
    collapsed: true,
  };

  open = (isOpen) => {
    this.setState({
      collapsed: isOpen,
    });
  };

  render() {
    return (
      <div
        style={{ width: 256 }}
        onMouseEnter={() => this.open(false)}
        onMouseLeave={() => this.open(true)}
      >
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Menu.Item
            className="menu-item"
            key="1"
            icon={<HomeOutlined style={{ fontSize: "1.5rem" }} />}
          >
            Home
          </Menu.Item>

          <Menu.Item
            className="menu-item"
            key="2"
            icon={<MovieIcon style={{ fontSize: "1.5rem" }} />}
          >
            Movie
          </Menu.Item>

          <Menu.Item
            className="menu-item"
            key="3"
            icon={<SearchOutlined style={{ fontSize: "1.5rem" }} />}
          >
            Search
          </Menu.Item>
          <Menu.Item
            className="menu-item"
            key="4"
            icon={<UserOutlined style={{ fontSize: "1.5rem" }} />}
          >
            Profile
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Sidebar;
