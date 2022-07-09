import React from 'react';
import './App.css';

let quotes = [
  {
    quote: "quote0",
    author: "author0"
  },
  {
    quote: "quote1",
    author: "author1"
  }
];

class RandomQuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curQuote: '',
      curAuthor: ''
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    let randomNum = Math.floor(Math.random() * quotes.length);
    this.setState({
      curQuote: quotes[randomNum].quote,
      curAuthor: quotes[randomNum].author
    })
  }

  handleClick() {
    
  }

  render() {
    let styles = {
      width: "100px",
      margin: "auto"
    }
    return (
      <div id="quote-box" style={styles}>
        <p id="text">{this.state.curQuote}</p>
        <p id="author">{this.state.curAuthor}</p>
        <button id="new-quote" onClick={this.handleClick}>New quote</button>
        <a id="tweet-quote" href="twitter.com/intent/tweet">tweet</a>
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