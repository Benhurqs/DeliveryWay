import axios from 'axios';
import { GOOGLE } from './Consts'


const  headers ={
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json'
  }


const fetcher = axios.create({
    baseURL:  "https://maps.googleapis.com/maps/api/",
    headers: headers
    });


export function getDistance(origin, destination){
    return fetcher.get(`/distancematrix/json?units=imperial&origins=${origin}&destinations=${destination}&key=${GOOGLE.KEY}`)
}
