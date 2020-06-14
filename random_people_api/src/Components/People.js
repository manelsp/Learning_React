import React, {Component, Fragment} from 'react';

//components
import Person from './Person'; 
import { Grid } from '@material-ui/core';

class People extends Component {
    constructor(props){
        super(props);
        this.state = {
            people: []
        }
    }

    componentDidMount(){
        fetch("https://randomuser.me/api/?results=9")
            .then(response => response.json())
            .then(data => {
                this.setState({people: data.results});
                console.log(data.results);
            })
    }

    render(){
        const row = this.state.people.map((row, index) => {
        return(
            <Person key={index} name={row.name.first + " " + row.name.last} images={row.picture.large}></Person>
        )
        });
        return(
            <Fragment>
                <Grid container spacing={36} justify="center">
                    {row}
                </Grid>
            </Fragment>
        );
    }
}

export default People; 