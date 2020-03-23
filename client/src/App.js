import React from 'react';
import './App.css';
import PlayerList from './components/PlayerList';
import DarkModeButton from './components/DarkModeButton';

class App extends React.Component {
  //declaring initial state on an array to contain the players
  state = {
    players: []
  };
//calling components did mount to set state
  componentDidMount() {
//fetching info from api and converting into a json object
    fetch("http://localhost:5000/api/players")
      .then(response => response.json())
      .then(response => {
        console.log(response);
        //setting state passing the information from the json object
         this.setState({
           players: response
         })
         console.log(this.state.players)
       })
       //catching error
       .catch(err => console.log(err));
  }
//rendering to screen, passing the information from state down into our components through props
  render(){
    return (
      <div className="App">
        <DarkModeButton/>
          <PlayerList playerlist = {this.state.players}/>
      </div>
    );
  }
}

export default App;
