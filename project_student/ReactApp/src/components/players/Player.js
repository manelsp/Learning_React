import React, { Component } from 'react';

//material
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import DetailsIcon from '@material-ui/icons/Details';

//Router
import { Link } from "react-router-dom";

class Player extends Component {
    DeletePlayer = () => {
        this.props.deletePlayer(this.props.id);
    }

    render() {
        let urlEdit = "/players/edit/" + this.props.id;
        let urlDetails = "/players/details/" + this.props.id;
        let generalInfo = (
            <>
                <TableCell align="left" >{this.props.name}</TableCell>
                <TableCell align="right" >{this.props.nickname}</TableCell>
                <TableCell align="right" >{this.props.email}</TableCell>
            </>);

        if (window.location.pathname.includes("games/details") || window.location.pathname.includes("games/addplayers")) {
            return <TableRow> 
                {generalInfo}
            </TableRow>
        }
        return (
            <TableRow>
                {generalInfo}
                <TableCell align="right">
                    <IconButton id={this.props.id}>
                        <Link to={urlDetails}>
                            <DetailsIcon className="LinkButtonMaterial" />
                        </Link>
                    </IconButton>
                    <IconButton id={this.props.id} onClick={this.EditPlayer}>
                        <Link to={urlEdit}>
                            <EditIcon className="LinkButtonMaterial" />
                        </Link>
                    </IconButton>
                    <IconButton id={this.props.id} onClick={this.DeletePlayer}>
                        <DeleteIcon />
                    </IconButton>
                </TableCell>
            </TableRow>
        );
    }
}

export default Player; 