import React, { Component } from "react";
import PopularMovieCarousel from "./PopularMovieCarousel/PopularMovieCarousel";
import MovieList from "./MovieList/MovieList";

import {
  PlayCircleOutlined,
  FireOutlined,
  StarOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

import "./HomePage.css";

class HomePage extends Component {
  state = {
    data: {
      backdrop_path: "",
      budget: 0,
      genres: [],
      homepage: "",
      id: 0,
      imdb_id: 0,
      overview: "",
      popularity: 0.0,
      poster_path: "",
      release_date: "",
      revenue: 0,
      runtime: 0,
      status: "",
      tagline: "",
      title: "",
      vote_average: 0.0,
      vote_count: 0,
    },
  };

  render() {
    return (
      <div style={{ color: "white" }}>
        <PopularMovieCarousel />
        <div style={{ padding: "4vh" }}>
          <MovieList
            icon={<FireOutlined style={{ fontSize: "2rem" }} />}
            title="Popular"
            type="popular"
          />
          <MovieList
            icon={<PlayCircleOutlined style={{ fontSize: "2rem" }} />}
            title="Now playing"
            type="now_playing"
          />
          <MovieList
            icon={<StarOutlined style={{ fontSize: "2rem" }} />}
            title="Top rated"
            type="top_rated"
          />
          <MovieList
            icon={<ClockCircleOutlined style={{ fontSize: "2rem" }} />}
            title="Upcoming"
            type="upcoming"
          />
        </div>
      </div>
    );
  }
}

export default HomePage;
