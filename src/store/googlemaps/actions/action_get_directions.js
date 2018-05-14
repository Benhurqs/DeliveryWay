import { getDirections } from '../comm/ApiRest';
import { STORE } from '../comm/Consts';
import { managerGoogleResponse } from '../comm/Utils';

export const GET_DIRECTION = 'GET_DIRECTION';

export const pullDirections = (destination) => dispatch => (
    getDirections(STORE.address, destination)
        .then(response => dispatch(managerGoogleResponse(response)))
        .catch(err => err)
)

//https://github.com/react-community/react-native-maps/issues/929
