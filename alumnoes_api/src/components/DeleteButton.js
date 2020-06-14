import React, {Component} from 'react'; 

//material
import Button from '@material-ui/core/Button';

class DeleteButton extends Component{
    borrar = () => {
        this.props.borrar(this.props.id);
    }
    render(){
        return (
          <Button variant="contained" color="secondary" onClick={this.borrar}>Delete</Button >
        );
      }
    }

export default DeleteButton; 