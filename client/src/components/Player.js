import React from "react";

const Player = props => {
  console.log(props.searches);
//passing information from playerlist through the different html elements
  return (
    <div className = "main-card">
      <h3 className = "login">{props.name}</h3>

        <p className = "country">Country: {props.country} </p>

      <p className = "searches">Searches: {props.searches}</p>
    </div>
  );
};

export default Player;
