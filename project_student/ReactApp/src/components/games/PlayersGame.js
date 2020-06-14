import React, {Component} from 'react';

//material
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import Fab from '@material-ui/core/Fab';

//components
import Player from './../players/Player';

class PlayersGames extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id: this.props.id,
          Players: []
        };
    }

    componentDidMount(){
        fetch("https://localhost:44360/api/gameplayers/game/" + this.state.id)
        .then(response => response.json())
        .then(data => {
          this.setState({ Players: data });
          console.log(data);
        });
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
                  </TableRow>
                </TableHead>
                <TableBody>
                  {newPlayer}
                </TableBody>
              </Table>
            </Paper>
            </div>
        );
    }
}

export default PlayersGames; 