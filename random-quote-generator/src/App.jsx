import { quotes } from "./data/quotes";
import { useState } from "react";

const App = () => {
  const [quote, setQuote] = useState(quotes[8]);

  const getNewQuote = () => {
    const getRandom = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[getRandom]);
  };

  return (
    <div id="quote-box" className="quote-box">
      <div id="text" className="text">
        {quote.text}
      </div>
      <div id="author" className="author">
        {quote.author}
      </div>

      <div className="quote-btn-container">
        <button id="new-quote" className="new-quote" onClick={getNewQuote}>
          New Quote
        </button>
        <a
          id="tweet-quote"
          className="tweet-quote"
          href={`https://twitter.com/intent/tweet?text="${quote.text}" ${quote.author}`}
          target="_blank"
        >
          Tweet Quote
        </a>
      </div>
    </div>
  );
};

export default App;
