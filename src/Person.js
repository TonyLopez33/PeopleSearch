import React from "react";

const Person = ({ lastname, firstname, title }) => {
  return (
    <div>
        <a
          className="App-link"
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
        >         
      <h4>{firstname +" " + lastname + " "+ title}</h4>
      </a>
    </div>
  );
};

export default Person;