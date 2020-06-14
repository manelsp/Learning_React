import React, {Component} from 'react'; 

//components
import Game from './Game'; 

//material
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';

//Router
import {Link} from "react-router-dom";

class GamesList extends Component{
    constructor(props) {
        super(props);
        this.state = {
          Games: [],
          playerOwner:''
        };
    }

    //obtain GamesList (fetch)
    componentDidMount(){
        fetch("https://localhost:44360/api/games")
        .then(response => response.json())
        .then(data => {
        this.setState({ Games: data });
        console.log(data);
      });
    }

    //delete 
    deleteGame = id => {
        const options = {
          method: "DELETE",
          header: {
            "Content-Type": "applications/json"
          }
        };
        fetch("https://localhost:44360/api/games/" + id, options).then(() =>
          this.componentDidMount()
        );
      }

    render(){
        const newGame = this.state.Games.map(game => {
            console.log(game.state); 
            console.log(this.state.playerOwner);

            return (
              <Game
                key={game.id}
                id={game.id}
                gameName={game.gameName}
                name={game.name}
                difficulty={game.difficulty}
                date={game.date}
                gameOwner={game.gameOwner.nickname}
                deleteGame={this.deleteGame}
              ></Game>
            );
        });
        return(
            <div>
                <Paper className="Content">
                    <Table>
                    <TableHead>
                        <TableRow>
                        <TableCell align="left"><b>Game</b></TableCell>
                        <TableCell align="right"><b>Name</b></TableCell>
                        <TableCell align="right"><b>Difficulty</b></TableCell>
                        <TableCell align="right"><b>Date</b></TableCell>
                        <TableCell align="right"><b>Owner</b></TableCell>
                        <TableCell align="right"><b>Actions</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {newGame}
                    </TableBody>
                    </Table>
                </Paper>
                <div className="Margen">
                    <Fab color="primary" aria-label="add">
                        <Link to="/games/add"  className="LinkButton">NEW</Link>  
                    </Fab>
                </div>
            </div>
        );
    }
}

export default GamesList;