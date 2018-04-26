import { combineReducers } from 'redux';
// import DistanceReducer from './reducer_distance'
import { metrics } from './reducer_distance'



const rootReducer = combineReducers({
	distance: metrics
});

export default rootReducer;
