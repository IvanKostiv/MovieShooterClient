import React, { Component } from "react";
import { API_IMAGE_URL } from "../../../constants";
import { Typography, Button } from "antd";
import { HeartOutlined, StarFilled } from "@ant-design/icons";

const { Title, Text } = Typography;

class MovieListItem extends Component {
  render() {
    const releaseDate = new Date(this.props.item.release_date);
    return (
      <div style={{ width: "13vw", height: "35vh", backgroundColor: "white" }}>
        <img
          width="100%"
          height="100%"
          style={{
            cursor: "pointer",
          }}
          src={`${API_IMAGE_URL}/${this.props.item.poster_path}`}
        />
        <div style={{ marginTop: "1.2vh" }}>
          <Title
            style={{ color: "white", cursor: "pointer" }}
            level={4}
            ellipsis={{
              rows: 1,
              expandable: false,
            }}
          >
            {this.props.item.title}
          </Title>
          <div
            style={{
              display: "flex",
              justifyContent: "right",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#8c8c8c",
                marginRight: "auto",
              }}
            >
              {releaseDate.getFullYear().toString()}
            </Text>
            <HeartOutlined
              style={{
                color: "#d2000f",
                justifySelf: "right",
                marginRight: "1vw",
                cursor: "pointer",
              }}
            />
            <Text style={{ color: "white", marginRight: "0.3vw" }}>
              {this.props.item.vote_average}
            </Text>
            <StarFilled style={{ color: "#faad14" }} />
          </div>
        </div>
      </div>
    );
  }
}

export default MovieListItem;
