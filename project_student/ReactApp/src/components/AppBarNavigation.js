import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

//components
import PlayersList from './players/PlayersList';
import EditPlayerList from './players/EditPlayerList';
import DetailPlayer from './players/DetailPlayer';
import GamesList from './games/GamesList';
import EditGamesList from './games/EditGamesList';
import DetailGames from './games/DetailGame'; 
import AddPlayerIntoGame from './games/AddPlayerIntoGame';

//Router
import {
    BrowserRouter as Router,
            Switch,
            Route,
            Link,
            } from "react-router-dom";

class AppBarNavigation extends Component{
    render(){
        return (
            <Router>
                <div>
                    <nav>
                        <AppBar position="static">
                        <Toolbar>
                            <Button color="inherit"><Link to="/players" className="LinkButton">PLAYERS</Link></Button>
                            <Button color="inherit"><Link to="/games" className="LinkButton">GAMES</Link></Button>
                        </Toolbar>
                        </AppBar> 
                    </nav>
                    <Switch>
                        <Route exact path="/players" component={PlayersList}></Route>
                        <Route exact path="/players/add" component={EditPlayerList}></Route>
                        <Route exact path="/players/edit/:id?" component={EditPlayerList}></Route>
                        <Route exact path="/players/details/:id?" component={DetailPlayer}></Route>
                        <Route exact path="/games" component={GamesList}></Route>
                        <Route exact path="/games/add" component={EditGamesList}></Route>
                        <Route exact path="/games/edit/:id?" component={EditGamesList}></Route>
                        <Route exact path="/games/details/:id?" component={DetailGames}></Route>
                        <Route exact path="/games/addplayers/:id?" component={AddPlayerIntoGame}></Route>

                    </Switch>
                </div>
            </Router>
        );
      }
    }

export default AppBarNavigation; 