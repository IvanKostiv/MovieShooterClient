import React, { Component } from "react";
import axios from "axios";
import { API_URL, API_VERSION, API_KEY } from "../../../constants";
import { List, Typography } from "antd";
import MovieListItem from "./MovieListItem";

const { Title } = Typography;

class MovieList extends Component {
  state = {
    movieList: [],
  };

  getMovieList = () => {
    axios
      .get(
        `${API_URL}/${API_VERSION}/movie/${this.props.type}?api_key=${API_KEY}&language=uk-UA`
      )
      .then((response) => {
        let movieList = response.data.results;
        this.setState({ movieList });
      });
  };

  componentDidMount() {
    this.getMovieList();
  }

  render() {
    return (
      <div style={{ marginTop: "4vh", marginBottom: "12vh" }}>
        <Title level={2} style={{ color: "white" }}>
          {this.props.icon}
          <span style={{ marginLeft: "0.7rem" }}>{this.props.title}</span>
        </Title>
        <List
          style={{ paddingTop: "0.5rem" }}
          grid={{ gutter: 16, column: 6 }}
          dataSource={this.state.movieList.slice(0, 6)}
          renderItem={(item) => (
            <List.Item>
              <MovieListItem item={item} />
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default MovieList;
