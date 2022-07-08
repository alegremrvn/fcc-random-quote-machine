import React from 'react';
import './App.css';

class RandomQuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    
  }

  render() {
    return (
      <div id="quote-box">
        <p id="text"></p>
        <p id="author"></p>
        <button id="new-quote" onClick={this.handleClick}>New quote</button>
        <a id="tweet-quote" href="https://twitter.com">tweet</a>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <RandomQuoteMachine />
    </div>
  );
}

export default App;