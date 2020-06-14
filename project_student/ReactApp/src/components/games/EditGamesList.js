import React, {Component} from 'react'; 

//material 
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';


class EditGamesList extends Component{
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

    SaveChanges = () =>{
      console.log(this.state.id);
      if(this.state.id === undefined){
        const params = {
            method: "POST",
            body: JSON.stringify({ 
              gameName: this.state.gameName,
              name: this.state.name,
              difficulty: parseInt(this.state.difficulty),
              date: this.state.date,
              gameOwnerId: parseInt(this.state.gameOwnerId),
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          };
          fetch("https://localhost:44360/api/games", params).then(response =>
            console.log(response)
          );
        } else {
          const params = {
            method: "PUT",
            body: JSON.stringify({ 
              id: this.state.id,
              gameName: this.state.gameName,
              name: this.state.name,
              difficulty: parseInt(this.state.difficulty),
              date: this.state.date,
              gameOwnerId: parseInt(this.state.gameOwnerId)
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          };
          fetch("https://localhost:44360/api/games/"+ this.state.id, params).then(response =>
            console.log(response))
        }
      }

        handleChange = event => {
          const { name, value } = event.target;
          this.setState({ [name]: value });
        };

    render(){
        
        return(
          <div className="Content"> 
            <div className="Inputs">
              <TextField id="standard-basic" label="Game" name="gameName" value={this.state.gameName || ""} onChange={this.handleChange}/> <br/>
              <TextField id="standard-basic" label="Name" name="name" value={this.state.name || ""} onChange={this.handleChange}/> <br/>
              <TextField id="standard-basic" label="Difficulty" name="difficulty" value={this.state.difficulty || ""} onChange={this.handleChange}/> <br/>
              <TextField id="standard-basic" label="Date" name="date" value={this.state.date || ""} onChange={this.handleChange} /> <br/>
              <TextField id="standard-basic" label="GameOwnerId" name="gameOwnerId" value={this.state.gameOwnerId || ""} onChange={this.handleChange}/> <br/>
            </div> <br/>
              <Button
                variant="contained"
                color="primary"
                size="small"
                startIcon={<SaveIcon />}
                onClick={this.SaveChanges}
              >
                Save changes
              </Button>
        </div>
        );
    }
}

export default EditGamesList;