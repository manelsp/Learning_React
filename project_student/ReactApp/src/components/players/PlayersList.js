import React, {Component} from 'react';

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

//components
import Player from './Player'; 

class PlayersList extends Component{
    constructor(props) {
        super(props);
        this.state = {
          Players: []
        };
    }

    //obtain PlayerList (fetch)
    componentDidMount(){
        fetch("https://localhost:44360/api/players")
        .then(response => response.json())
        .then(data => {
          this.setState({ Players: data });
          console.log(data);
        });
    }

    //delete Player (delete)
    deletePlayer = id => {
      const options = {
        method: "DELETE",
        header: {
          "Content-Type": "applications/json"
        }
      };
      fetch("https://localhost:44360/api/players/" + id, options).then(() =>
        this.componentDidMount()
      );
    }

    render(){
        const newPlayer = this.state.Players.map(player => {
            console.log(Player.id); 

            return (
              <Player
                key={player.id}
                id={player.id}
                name={player.name}
                nickname={player.nickname}
                email={player.email}
                deletePlayer={this.deletePlayer}
              ></Player>
            );
        });
            
        return(
          <div>
          <Paper className="Content">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="left"><b>Name</b></TableCell>
                  <TableCell align="right"><b>Nickname</b></TableCell>
                  <TableCell align="right"><b>Email</b></TableCell>
                  <TableCell align="right"><b>Actions</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {newPlayer}
              </TableBody>
            </Table>
          </Paper>
          <div className="Margen">
              <Fab color="primary" aria-label="add">
                <Link to="/players/add"  className="LinkButton">NEW</Link>   
              </Fab>
            </div>
          </div>
        )
    }
}

export default PlayersList; 