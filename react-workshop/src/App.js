import React, { Component } from 'react';
import './App.css';
import Header from './containers/Header'

class App extends Component {
  state = {
    number: 0,
    data: [1,2,3,4]
  }
  ComponentDidMount(){
    this.setState({
      number: 1
    })
  }
  shouldComponentUpdate(nextProps, nextState){
    if(nextState.number < 0){
      return false
    }
    return true
  }
  decrease = () => {
    this.setState({
      number: this.state.number - 1  
    })
  }
  increase = () => {
    this.setState({
      number: this.state.number + 1  
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>{ this.state.number }</p>
        <button onClick={ this.increase }>+</button>
        <button onClick={ this.decrease }>-</button>
        {
          this.state.data.map(d => <div>{d}</div>)
        }
      </div>
    );
  }
}

export default App;
