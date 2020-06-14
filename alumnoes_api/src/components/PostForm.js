import React, { Component } from "react";

//material
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      nombre: '', //mismo nombre que la api
      nota: '' //mismo nombre que la api
    };
  }

  componentDidMount() {
    if (this.state.id !== undefined){
      fetch("http://localhost:5000/api/Alumnoes/"+ this.state.id).then(response =>
        response.json()
      ).then((json) => this.setState({
        id: json.id,
        nombre: json.nombre,
        nota: json.nota
      }));
    }
  }

  anadirAlumno = () => {
    console.log(this.state.id);
    if(this.state.id === undefined){
      const params = {
        method: "POST",
        body: JSON.stringify({
          nombre: this.state.nombre,
          nota: this.state.nota
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      };
      fetch("http://localhost:5000/api/Alumnoes", params).then(response =>
        console.log(response)
      );
    }
    else{
      const params = {
        method: "PUT",
        body: JSON.stringify({
          id: this.state.id,
          nombre: this.state.nombre,
          nota: this.state.nota
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      };
      fetch("http://localhost:5000/api/Alumnoes/"+ this.state.id, params).then(response =>
        console.log(response)
      );
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="Main">
        <Typography component="h2" variant="display2" gutterBottom>
          {" "}
          Alumno{" "}
        </Typography>
        <TextField
          id="standard-basic"
          label="Nombre"
          type="text"
          name="nombre"
          value={this.state.nombre}
          onChange={this.handleChange}
        />
        <br />
        <TextField
          id="standard-basic"
          label="Nota"
          type="number"
          name="nota"
          value={this.state.nota}
          onChange={this.handleChange}
        />
        <br />
        <br />
        <Button variant="contained" color="primary" onClick={this.anadirAlumno}>
          Guardar
        </Button>
      </div>
    );
  }
}

export default PostForm;
