import React, { useState, useContext } from "react";
import Person from "./Person";
import { PeopleContext } from "./PeopleContext";

const PeopleList = () => {
  const [people, setPeople] = useContext(PeopleContext);
  return (
    <div>
      {people.map((person) => (
        <Person firstname={person.firstname} lastname={person.lastname} title={person.title} key={person.id} />
      ))}
    </div>
  );
};

export default PeopleList;