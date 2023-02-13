"use strict";

function generate() {
  const quotes = {
    "- Albert Einstein":
      '"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty."',
    "- Pierce Brown":
      '"Man cannot be freed by the same injustice that enslaved it."',
    "- Mary Astell":
      '"If all men are born free, how is it that all women are born slaves?"',
    "- John Galsworthy": '"Life calls the tune, we dance."',
    "- Erik Pevernagie":
      '"Liberty is only possible on the condition of regularity. We cannot be free and play the game of life without abiding to the rules, but the rules have to be adapted constantly in line with our experiences and the events we encounter. ( “If he does not play ball “ )”',
  };

  const authors = Object.keys(quotes);

  const author = authors[Math.floor(Math.random() * authors.length)];

  const quote = quotes[author];

  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
}
