import {
    GET_DISTANCE,
} from '../actions/action_get_distance';


//
// export default function(state = null, action) {
// 	switch (action.type) {
// 		case 'GOOGLE_DISTANCE':
// 			return action.payload
// 	}
// 	return state
// }

export function metrics(state = {}, action){
    switch (action.type){
        case GET_DISTANCE:
			const { distance } = action
            return {
                ...distance
            }

        default:
            return state
    }
}
