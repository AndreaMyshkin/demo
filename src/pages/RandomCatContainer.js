import React, { Component } from "react";
import PageLoading from "../components/PageLoading";
import RandomCat from "../components/RandomCat";
import "./styles/CatContainer.css";

export default class RandomCatContainer extends Component {
  state = {
    loading: true,
    error: null,
    data: [],
    styles: {
      black: "black",
    }
  };

  componentDidMount() {
    this.fetchRandomCat();
  }

  fetchRandomCat = async () => {
    const urlRandomCat = "https://api.thecatapi.com/v1/images/search?size=full";
    try {
      const response = await fetch(urlRandomCat);
      const dataRandomCat = await response.json();
      console.log(dataRandomCat);
      this.setState({
        loading: false,
        data: dataRandomCat
      });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    return (
      <RandomCat
        handleClick={this.fetchRandomCat}
        randomCat={this.state.data}
        style={this.state.styles}
      />
      
    );
  }
}
