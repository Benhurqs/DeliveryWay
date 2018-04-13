import axios from 'axios';


export default function getDistance(origin, destination) {
  console.log("cheguei");
  var  headers ={
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
  }

  return(dispatch)=>{
    return axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin}}&destinations=${destination}&key=AIzaSyANnFv6A0gzXlYmVVC1BNN018Yu1vlR3lE`, headers)
      .then(function (response) {

      console.log("chamada");
        console.log(response);
        dispatch(getStatus(response.data));
      })
      .catch(function (error) {
        console.log("error aqui - " + error);
      });
    
    }
  }

export function getStatus(response){

  console.log("Status -> " + response.status);
    return{
        type: "GOOGLE_DISTANCE",
        payload: response.status
    }
}
