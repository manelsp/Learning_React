import React, {Component} from 'react'; 

//import react
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

//components
import DeleteButton from './DeleteButton'; 
import EditButton from './EditButton';

class Alumno extends Component {

    onEdit= (id) => {
        this.props.history.push("/Editar/"+id);
    }

    render(){
        return(
            <TableRow>
                <TableCell>{this.props.nombre}</TableCell>
                <TableCell align="right">{this.props.nota}</TableCell>
                <TableCell align="right">
                    <EditButton id={this.props.id} clickEdit={this.onEdit}/>
                    <DeleteButton borrar={this.props.borrar} id={this.props.id}/>
                </TableCell>
            </TableRow>
        );
    }
}

export default Alumno; 