import React, { Component } from "react";
import { Carousel } from "antd";
import axios from "axios";
import { API_URL, API_VERSION, API_KEY } from "../../../constants";

import PopularMovieCarouselItem from "./PopularMovieCarouselItem";

class PopularMovieCarousel extends Component {
  state = {
    popularMovie: [],
  };
  getPopularMovies = () => {
    axios
      .get(`${API_URL}/${API_VERSION}/movie/popular?api_key=${API_KEY}&language=uk-UA`)
      .then((response) => {
        let popularMovie = response.data.results;
        this.setState({ popularMovie });
      });
  };

  componentDidMount() {
    this.getPopularMovies();
  }
  render() {
    const settings = {
      autoplaySpeed: 5000,
    };
    return (
      <Carousel style={{overflow: 'hidden'}} afterChange={this.onChange} autoplay {...settings}>
        {this.state.popularMovie.map((elem) => (
          <PopularMovieCarouselItem key={elem.id} item={elem} />
        ))}
      </Carousel>
    );
  }
}

export default PopularMovieCarousel;
