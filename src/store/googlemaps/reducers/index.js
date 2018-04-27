import { combineReducers } from 'redux';
import { metrics } from './reducer_distance'

const rootReducer = combineReducers({
	distance: metrics
});

export default rootReducer;
