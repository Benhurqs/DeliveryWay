import { GET_DIRECTION } from '../actions/action_get_directions';

export function direction(state = {}, action){
    switch (action.type){
        case GET_DIRECTION:
			const { delivery, msg } = action
            return {
                ...delivery,
                ...msg
            }
        default:
            return state
    }
}
