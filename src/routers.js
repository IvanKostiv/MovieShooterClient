import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Layout } from "antd";

import HomePage from "./components/HomePage/HomePage";
import MoviePage from "./components/MoviePage/MoviePage";
import SearchPage from "./components/SearchPage/SearchPage";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import Sidebar from "./components/Sidebar/Sidebar";
import history from "./history";

const { Sider, Content } = Layout;

class Routers extends Component {
  render() {
    return (
      <Router history={history}>
        <Layout>
          <Sider collapsible defaultCollapsed width="256">
            <Sidebar></Sidebar>
          </Sider>
          <Layout>
            <Content
              style={{
                backgroundColor: "#111d2c",
                overflow: "hidden",
              }}
            >
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/movie" component={MoviePage} />
                <Route path="/search" component={SearchPage} />
                <Route path="/profile" component={ProfilePage} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default Routers;
