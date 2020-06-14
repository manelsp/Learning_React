import React, { Component } from "react";
import Alumno from "./Alumno";

//import react
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

class Api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alumnos: []
    };
  }

  //fetch
  componentDidMount() {
    fetch("http://localhost:5000/api/alumnoes")
      .then(response => response.json())
      .then(data => {
        this.setState({ alumnos: data });
        console.log(data);
      });
  }

  //delete
  borrar = id => {
    const options = {
      method: "DELETE",
      header: {
        "Content-Type": "applications/json"
      }
    };
    fetch("http://localhost:5000/api/alumnoes/" + id, options).then(() =>
      this.componentDidMount()
    );
  };

  render() {
    const nuevoAlumno = this.state.alumnos.map(alumno => {
      console.log(alumno.id);
      
      return (
        <Alumno
          key={alumno.id}
          id={alumno.id}
          nombre={alumno.nombre}
          borrar={this.borrar}
          nota={alumno.nota}
          history={this.props.history}
        ></Alumno>
      );
    });

    return (
      <div className="Main">
        <Typography component="h2" variant="display2" gutterBottom>
          {" "}
          Lista alumnos{" "}
        </Typography>
        <Paper>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Alumno</TableCell>
                <TableCell align="right">Nota</TableCell>
                <TableCell align="right">Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{nuevoAlumno}</TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default Api;
