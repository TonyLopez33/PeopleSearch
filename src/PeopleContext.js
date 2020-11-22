import React, { useState, createContext } from "react";

export const PeopleContext = createContext();

export const PeopleProvider = (props) => {
  const [people, setPeople] = useState([
    {
      firstname: "Tony",
      lastname: "Lopez",
      title: "IT Developer",
      id: 11111,
    },
    {
        firstname: "Aubrey",
        lastname: "Lopez",
        title: "Web Designer",
        id: 22222,
    },
    {
        firstname: "Cameron",
        lastname: "Lopez",
        title: "IT Aritecture",
        id: 333333
    },
  ]);
  return (
    <PeopleContext.Provider value={[people, setPeople]}>
      {props.children}
    </PeopleContext.Provider>
  );
};
