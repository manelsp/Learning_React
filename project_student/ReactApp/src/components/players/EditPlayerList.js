import React, {Component} from 'react'; 

//material 
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';


class EditPlayerList extends Component{
    constructor(props){
        super(props)
        this.state = {
          id: props.match.params.id,
          name: '',
          nickname:'',
          email:''
        }
    }

    componentDidMount() {
      if (this.state.id !== undefined){
        fetch("https://localhost:44360/api/players/"+ this.state.id).then(response =>
          response.json()
        ).then((json) => this.setState({
          id: json.id,
          name: json.name,
          nickname: json.nickname,
          email: json.email
        }));
      }
    }

    SaveChanges = () =>{
      console.log(this.state.id);
      if(this.state.id === undefined){
        const params = {
            method: "POST",
            body: JSON.stringify({ 
              name: this.state.name,
              nickname: this.state.nickname,
              email: this.state.email
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          };
          fetch("https://localhost:44360/api/players", params).then(response =>
            console.log(response)
          );
        } else {
          const params = {
            method: "PUT",
            body: JSON.stringify({ 
              id: this.state.id,
              name: this.state.name,
              nickname: this.state.nickname,
              email: this.state.email
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          };
          fetch("https://localhost:44360/api/players/"+ this.state.id, params).then(response =>
            console.log(response))
          }
        }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      };

    render(){
        return (
          <div className="Content"> 
              <div className="Inputs">
              <TextField id="standard-basic" label="Name" name="name" value={this.state.name || ""} onChange={this.handleChange}/> <br/>
              <TextField id="standard-basic" label="Nickname" name="nickname" value={this.state.nickname || ""} onChange={this.handleChange}/> <br/>
              <TextField id="standard-basic" label="Email" name="email" value={this.state.email || ""} onChange={this.handleChange}/> <br/>
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

export default EditPlayerList; 
  