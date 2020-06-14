import React, {Component} from 'react';

//material
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import DetailsIcon from '@material-ui/icons/Details';
import GroupAddIcon from '@material-ui/icons/GroupAdd';

//Router
import {Link} from "react-router-dom";

class Game extends Component{


    DeleteGame = () => {
        this.props.deleteGame(this.props.id);
    }

    render(){
        let urlAddPlayers = "games/addplayers/" + this.props.id; 
        let urlDetails = "/games/details/" + this.props.id;
        let urlEdit = "/games/edit/" + this.props.id;
        return(
            <TableRow>
                <TableCell align="left" >{this.props.gameName}</TableCell>
                <TableCell align="right" >{this.props.name}</TableCell>
                <TableCell align="right" >{this.props.difficulty}</TableCell>
                <TableCell align="right" >{this.props.date}</TableCell>
                <TableCell align="right" >{this.props.gameOwner}</TableCell>
                <TableCell align="right"> 
                    <IconButton id={this.props.id}>
                        <Link to={urlAddPlayers}> 
                            <GroupAddIcon className="LinkButtonMaterial"/>
                        </Link>
                    </IconButton>
                    <IconButton id={this.props.id}>
                        <Link to={urlDetails}> 
                            <DetailsIcon className="LinkButtonMaterial"/>
                        </Link>
                    </IconButton>
                    <IconButton id={this.props.id} onClick={this.EditPlayer}>
                        <Link to={urlEdit}> 
                            <EditIcon className="LinkButtonMaterial" />
                        </Link>   
                    </IconButton>
                    <IconButton id={this.props.id} onClick={this.DeleteGame}>
                        <DeleteIcon />
                    </IconButton>
                </TableCell>
            </TableRow>
        );
    }
}

export default Game; 