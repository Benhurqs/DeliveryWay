import { getDistance } from '../comm/ApiRest';
import { STORE } from '../comm/Consts';
import { managerGoogleResponse } from '../comm/Utils';

export const GET_DISTANCE = 'GET_DISTANCE';

export const pullDistance = (origin) => dispatch => (
    getDistance(origin, STORE.address)
        .then(response => dispatch(managerGoogleResponse(response)))
        .catch(err => err)
)
