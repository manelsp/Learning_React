import React, {Component} from 'react'; 

//Router
import {
    BrowserRouter as Router,
        Switch,
        Route,
        Link,
    } from "react-router-dom";

//material
import Button from '@material-ui/core/Button';

class EditButton extends Component{
    render(){
        return (    
            <Router>
                <nav>
                    <Button variant="contained" onClick={() => this.props.clickEdit(this.props.id)}>Editar</Button>
                </nav>
            </Router>   
        );
      }
    }

export default EditButton; 