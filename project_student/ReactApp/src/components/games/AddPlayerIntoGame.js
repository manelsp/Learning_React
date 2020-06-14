import React, {Component} from 'react'; 

//material
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

//component 
import PlayersGame from './PlayersGame';

class AddPlayerIntoGame extends Component{
    constructor(props){
        super(props)
        this.state = {
          id: props.match.params.id,
          gameName: '',
          name:'',
          playerId: '',
          players:[]
        }
    }

    componentDidMount(){
        fetch("https://localhost:44360/api/games/" + this.state.id)
        .then(response => response.json())
        .then(json => {
        this.setState({ 
            id: json.id,
            gameName: json.gameName,
            name: json.name,
         });
      });

      fetch("https://localhost:44360/api/players")
      .then(response => response.json())
      .then(data => {
        this.setState({ players: data });
        console.log(data);
      });
    }
    
    SaveChanges = () => {
        console.log(this.state.id);
          const params = {
              method: "POST",
              body: JSON.stringify({ 
                playerId: this.state.playerId,
                gameId : this.state.id,
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8"
              }
            };
            fetch("https://localhost:44360/api/gameplayers", params).then(response =>
              console.log(response)
            ).then(response => {this.componentDidMount()});
        }       
    
    render(){
        
        const handleChange = event => {
            const { name, value } = event.target;
            this.setState({ [name]: value });
          };

          const newPlayer = this.state.players.map(player => {
            console.log(player.id); 

            return (
              <MenuItem
                key={player.id}
                value={player.id}
              > {player.nickname}</MenuItem>
            );
        });

        return(
            <div className="Content">
                <h3>GAME INFO</h3>
                <TextField  style={{marginRight: "30px"}} id="standard-basic" label="Game" name="gameName" value={this.state.gameName || ""} onChange={this.handleChange}
               InputProps={{
                readOnly: true,
              }}/> 
              <TextField style={{marginRight: "30px"}} id="standard-basic" label="Name" name="name" value={this.state.name || ""} onChange={this.handleChange}
               InputProps={{
                readOnly: true,
              }}/> <br/> <br/>
              <h3>ADD PLAYERS</h3>
              <FormControl style={{minWidth: 180}}>
                    <InputLabel id="demo-simple-select-label">Select player</InputLabel>
                    <Select
                        name = "playerId"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.playerId}
                        onChange={handleChange}
                        >
                        {newPlayer}
                    </Select>
                </FormControl> <br/> <br/>
                <Button
                variant="contained"
                color="primary"
                size="small"
                startIcon={<SaveIcon />}
                onClick={this.SaveChanges}
              >
                Add player
              </Button>
              <h3>PLAYER LIST</h3>
              <PlayersGame id={this.state.id} />
            </div>
        );
    }
}

export default AddPlayerIntoGame;