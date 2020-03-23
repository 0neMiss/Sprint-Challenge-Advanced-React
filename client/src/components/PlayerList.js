
import React from "react";
import Player from "./Player"


//accessing props to get information to pass down to each Player component
const PlayerList = props => {
  //mapping through the playerlist passed then passing needed information
  return (
    <div className="player-container">
      {props.playerlist.map(player =>
        {
      return <Player
                key = {player.id}
                name = {player.name}
                country = {player.country}
                searches = {player.searches}
                />;
      })}
    </div>
  );
};

export default PlayerList;
