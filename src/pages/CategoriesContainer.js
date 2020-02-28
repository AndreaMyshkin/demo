import React, { Component } from "react";
import Card from "../components/Card";
import PageLoading from "../components/PageLoading";
import SideBar from "../components/SideBar";
import './styles/Categories.css';

export default class CategoriesContainer extends Component {
  state = {
    loading: true,
    error: null,
    data: [],
    category: [],
    fact: [],
    border: "transparent"
  };
  componentDidMount() {
    this.fetchCategories();
    this.getRandomFact();
    this.fetchRandomCat();
  }

  fetchCategories = async () => {
    const urlCategories = "https://api.thecatapi.com/v1/categories";
    try {
      const responseCategories = await fetch(urlCategories);
      const dataCategories = await responseCategories.json();
      this.setState({
        data: dataCategories
      });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  getRandomFact = async () => {
    const urlFact = "https://catfact.ninja/fact";
    try {
      const responseFact = await fetch(urlFact);
      const dataFact = await responseFact.json();
      this.setState({
        fact: dataFact,
        loading: false
      });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  handleClick =() =>{
    this.getRandomFact();
  }
  getRandomByCategory = async e => {
    const id = e.target.id;
    const text = e.target.innerText;
    const urlFiltered = `https://api.thecatapi.com/v1/images/search?category_ids=${id}`;
    try {
      const responseFiltered = await fetch(urlFiltered);
      const dataFiltered = await responseFiltered.json();
      this.getRandomFact();
      this.setState({
        loading: false,
        category: dataFiltered,
        text: text
      });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  fetchRandomCat = async () => {
    const urlRandomCat = "https://api.thecatapi.com/v1/images/search?size=full";
    try {
      const response = await fetch(urlRandomCat);
      const dataRandomCat = await response.json();
      this.setState({
        category: dataRandomCat
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
      <div className="body_categories">
        <div className="card_on_categories">
          <Card
            randomCat={this.state.category}
            title={this.state.fact.fact}
            style={this.state.border}
          />
        </div>
        <div>
          <SideBar
            categories={this.state.data}
            getRandomByCategory={this.getRandomByCategory}
          />
        </div>
      </div>
    );
  }
}
