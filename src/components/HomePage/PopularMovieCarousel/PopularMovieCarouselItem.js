import React, { Component } from "react";
import { API_IMAGE_URL } from "../../../constants";
import { Typography, Rate, Button } from "antd";
import { PlayCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import "./PopularMovieCarouselItem.css";

const { Title, Paragraph } = Typography;

class PopularMovieCarouselItem extends Component {
  render() {
    return (
      <div className="container">
        <img
          width="100%"
          alt="Norway"
          height="auto"
          style={{ cursor: "pointer" }}
          src={`${API_IMAGE_URL}/${this.props.item.backdrop_path}`}
        />
        <div className="background-item-block"></div>
        <div className="item-content">
          <Title
            style={{ color: "white", marginTop: "33vh", cursor: "pointer" }}
          >
            {this.props.item.title}
          </Title>
          <Paragraph
            ellipsis={{
              rows: 2,
              expandable: true,
              symbol: <strong style={{ color: "white" }}>more</strong>,
              onExpand: () => {
                // TODO view detail movie page
              },
            }}
            style={{
              color: "white",
              textAlign: "left",
              fontSize: "1rem",
              lineHeight: 2,
            }}
          >
            {this.props.item.overview}
          </Paragraph>
          <Rate
            disabled
            allowHalf
            value={this.props.item.vote_average / 2}
          ></Rate>
          <Title style={{ color: "white" }} level={3}>
            {this.props.item.vote_average}
          </Title>
          <div style={{ marginTop: "5vh" }}>
            <Button
              icon={<PlayCircleOutlined />}
              className="item-button"
              type="primary"
              size="large"
            >
              Detail
            </Button>
            <Button
              icon={<PlusCircleOutlined />}
              className="item-button"
              type="default"
              size="large"
            >
              Add to list
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default PopularMovieCarouselItem;
