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

/**
 * Retorna a distancia entre dois pontos
 * @param {ponto inicial} origin 
 * @param {ponto final} destination 
 */
export function getDistance(origin, destination){
    return fetcher.get(`/distancematrix/json?units=imperial&origins=${origin}&destinations=${destination}&key=${GOOGLE.KEY}`)
}

/**
 * Retorna a direcao entre os dois pontos
 * @param {ponto inicial} origin 
 * @param {ponto final} destination 
 */
export function getDirections(origin, destination){
    return fetcher.get(`/directions/json?origin=${origin}&destination=${destination}&key=${GOOGLE.KEY}`)
}
