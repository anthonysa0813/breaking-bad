import React from "react";

const Phrase = ({ phrase }) => {
  const { author, quote } = phrase;
  console.log({
    author,
    quote,
  });
  return (
    <div className="container-phras">
      <h1>{quote}</h1>
      <p>{author}</p>
    </div>
  );
};

export default Phrase;
