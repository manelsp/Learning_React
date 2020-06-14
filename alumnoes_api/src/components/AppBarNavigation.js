import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

//components
import Api from './Api';
import PostForm from './PostForm';

//Router
import {
    BrowserRouter,
        Switch,
        Route,
        Link,
        useParams,
    } from "react-router-dom";

class AppBarNavigation extends Component{
    render(){
        return (
            <BrowserRouter>
                <div>
                    <nav>
                        <AppBar position="static">
                        <Toolbar>
                            <Button color="inherit"><Link to="/Alumnos" className="LinkButton">LISTA</Link></Button>
                            <Button color="inherit"><Link to="/Editar" className="LinkButton">AÑADIR</Link></Button>
                        </Toolbar>
                        </AppBar> 
                    </nav>
                    <Switch>
                        <Route exact path="/Alumnos" component={Api}></Route>
                        <Route exact path="/Editar" component={PostForm}></Route>
                        {/* <Route path="/Editar/:id?"  component={AlumnoId} /> */}
                        <Route path="/Editar/:id?"  component={PostForm} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
      }
    }

    // function AlumnoId() {
    //     let {id} = useParams();
    //     return (
    //         <PostForm id={id}/>
    //     );
    // }

export default AppBarNavigation; 