import React, { Component, Fragment } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import PageLoading from "../components/PageLoading";
import "./styles/CatContainer.css";

export default class RandomCatContainer extends Component {
  state = {
    loading: true,
    error: null,
    data: [],
    styles: {
      black: "black"
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
      this.setState({ loading: false, error: null });
    }
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    return (
      <Fragment>
        <Button handleClick={this.fetchRandomCat} name={"cat"}/>
        <div className="card__container">
          <Card
            randomCat={this.state.data}
            style={this.state.styles.black}
            title={"I'am the cat one"}
          />
        </div>
      </Fragment>
    );
  }
}
