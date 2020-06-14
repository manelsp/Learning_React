import React, {Component} from 'react'; 
import '../../index.css';

//material 
import TextField from '@material-ui/core/TextField';
import PlayersGame from './PlayersGame';

class DetailGame extends Component {
    constructor(props){
        super(props)
        this.state = {
          id: props.match.params.id,
          gameName: '',
          name:'',
          difficulty:'',
          date:'',
          gameOwnerId:''
        }
    }

    componentDidMount() {
        if (this.state.id !== undefined){
          fetch("https://localhost:44360/api/games/"+ this.state.id).then(response =>
            response.json()
          ).then((json) => this.setState({
            id: json.id,
            gameName: json.gameName,
            name: json.name,
            difficulty: json.difficulty,
            date: json.date,
            gameOwnerId: json.gameOwnerId
          }));
        }
      }

    render(){
        return(
            <div className="Content">
                <h3>GAME INFO</h3> 
            <div className="GameInfo">
              <TextField  style={{marginRight: "30px"}} id="standard-basic" label="Game" name="gameName" value={this.state.gameName || ""} onChange={this.handleChange}
               InputProps={{
                readOnly: true,
              }}/> 
              <TextField style={{marginRight: "30px"}} id="standard-basic" label="Name" name="name" value={this.state.name || ""} onChange={this.handleChange}
               InputProps={{
                readOnly: true,
              }}/> 
              <TextField style={{marginRight: "30px"}} id="standard-basic" label="Difficulty" name="difficulty" value={this.state.difficulty || ""} onChange={this.handleChange}
               InputProps={{
                readOnly: true,
              }}/>
              <TextField style={{marginRight: "30px"}} id="standard-basic" label="Date" name="date" value={this.state.date || ""} onChange={this.handleChange} 
               InputProps={{
                readOnly: true,
              }}/> 
              <TextField id="standard-basic" label="GameOwnerId" name="gameOwnerId" value={this.state.gameOwnerId || ""} onChange={this.handleChange}
               InputProps={{
                readOnly: true,
              }}/> <br/>
              </div>
              <div className="ListPlayers"> <br/>
                  <h3>PLAYERS LIST</h3>
                  <PlayersGame id={this.state.id}/>
              </div>
        </div>
        );
    }
}

export default DetailGame; 