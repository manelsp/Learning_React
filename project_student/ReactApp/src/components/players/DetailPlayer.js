import React, {Component} from 'react'; 

//material 
import TextField from '@material-ui/core/TextField';

class DetailPlayer extends Component{
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

    render(){
        return(
            <div className="Content"> 
                <div className="Inputs">
                    <TextField id="standard-basic" label="Name" name="name" value={this.state.name || ""} 
                    InputProps={{
                        readOnly: true,
                      }}
                    /> <br/>
                    <TextField id="standard-basic" label="Nickname" name="nickname" value={this.state.nickname || ""} 
                    InputProps={{
                        readOnly: true,
                      }}/> <br/>
                    <TextField id="standard-basic" label="Email" name="email" value={this.state.email || ""} 
                    InputProps={{
                        readOnly: true,
                      }}/> <br/>
                </div> <br/>
          </div>
        )
    }
}

export default DetailPlayer; 