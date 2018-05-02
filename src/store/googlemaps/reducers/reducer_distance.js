import {
    GET_DISTANCE
} from '../actions/action_get_distance';

export function metrics(state = {}, action){
    switch (action.type){
        case GET_DISTANCE:
			const { delivery, msg } = action
            return {
                ...delivery,
                ...msg
            }
        default:
            return state
    }
}
