import React, {Component} from 'react';
/*import { withStyles } from '@material-ui/core/styles';
import {Card, CardMedia, CardContent, Typography} from '@material-ui/core';
import { minWidth } from '@material-ui/system';
import { makeStyles } from '@material-ui/core/styles';*/

/*const useStyles = makeStyles({
    item: {
        minWidth: "350px",
        margin: "1em",
        boxSizing: "border-box"
    },
    media: {
        minHeight:"200px"
    }
  });*/

class Person extends Component {
    render(){
        return(
           /*<Card className={useStyles.item}>
               <CardMedia className={useStyles.media} image={this.props.images}>
                   <CardContent>
                       <Typography component="p" variant="h6"> {this.props.name}</Typography>
                   </CardContent>
               </CardMedia>
           </Card>*/

            <div className ="person">
               <p>{this.props.name}</p>
               <img src={this.props.images}/>
           </div>

        );
    }
}

export default Person 