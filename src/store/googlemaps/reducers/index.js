import { combineReducers } from 'redux';
import { metrics } from './reducer_distance'
import { direction } from './reducer_direction'

const rootReducer = combineReducers({
	distance: metrics,
	direction: direction
});

export default rootReducer;
