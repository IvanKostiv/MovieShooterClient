import React, { Component } from "react";
import { HomeOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";

import MovieIcon from "../Icons/MovieIcon";
import history from "../../history";

import "../Sidebar/Sidebar.css";

class Sidebar extends Component {
  handleClickMenuItem = (link) => {
    history.push(link);
  };

  render() {
    return (
      <div style={{ width: 256, position: 'fixed'}}>
        <Menu
          defaultSelectedKeys={["home"]}
          mode="inline"
          theme="dark"
          style={{
            height: "95vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Menu.Item
            className="menu-item"
            key="home"
            icon={<HomeOutlined />}
            onClick={(e) => this.handleClickMenuItem("/")}
          >
            Home
          </Menu.Item>

          <Menu.Item
            className="menu-item"
            key="movie"
            icon={<MovieIcon />}
            onClick={(e) => this.handleClickMenuItem("/movie")}
          >
            Movie
          </Menu.Item>

          <Menu.Item
            className="menu-item"
            key="search"
            icon={<SearchOutlined />}
            onClick={(e) => this.handleClickMenuItem("/search")}
          >
            Search
          </Menu.Item>
          <Menu.Item
            className="menu-item"
            key="profile"
            icon={<UserOutlined />}
            onClick={(e) => this.handleClickMenuItem("/profile")}
          >
            Profile
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Sidebar;
