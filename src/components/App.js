import React, {Component} from 'react';
import logo from '../logo.svg';
import './styles/App.css';


class App extends Component {
  state = {
    count: 0
  };
  handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }));
  };

  componentDidMount(){
    console.log('ya me montè', this.state.count)
  }

  componentWillMount(){
    console.log('me montarè', this.state.count)
  }
  componentWillUpdate(){
    console.log('me voy a actualizar', this.state.count)
  }
  componentDidUpdate(){
    console.log('ya me actualizè')
    console.log(this.state.count)
  }

  render() { 
    return (  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
  <h1>{this.state.count}</h1>
      <button onClick={this.handleClick}>Actualizar estado</button>
    </header>
  </div>);
  }
}
 
export default App;

