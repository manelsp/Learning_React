import React, {Component} from 'react';

class Geolocator extends Component {
    constructor(props){
      super(props)
      this.state = {
        latitude: null, 
        longitude: null
      };
    }
  
    localizated = (position) => {
      this.setState({
        latitude:position.coords.latitude,
        longitude:position.coords.longitude
      });
    }
  
    componentDidMount(){
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(this.localizated)
      }
    }
  
    render(){
      return(
        <div className ='Geolocator'>
          <p>latitude: {this.state.latitude}</p>
          <p>longitude: {this.state.longitude}</p>
        </div>
      );
    }
  }

  export default Geolocator; 