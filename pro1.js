const text1 = document.getElementById("quote");
const author = document.getElementById("author");

const getNewQuote = async () => {
  var url = "https://type.fit/api/quotes";

  const response = await fetch(url);

  const Quotes = await response.json();

  const i = Math.floor(Math.random() * Quotes.length);

  const quote = Quotes[i].text;

  const auth = Quotes[i].author;

  if (auth == null) {
    author = "Anonymous";
  }

  text1.innerHTML = quote;
  author.innerHTML = auth;
};
getNewQuote();
