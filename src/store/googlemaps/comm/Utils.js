import { STORE, GOOGLE_STATUS } from '../comm/Consts';
import { GET_DISTANCE } from '../actions/action_get_distance';

export function getMsg(status){
    switch (status){
        case GOOGLE_STATUS.OK:
			return "Uhuuu vamos comer."
        case GOOGLE_STATUS.NOT_FOUND:
        case GOOGLE_STATUS.ZERO_RESULTS:
            return "Infelizmente não encontramos seu endereço."
        default:
            return "Infelismente não conseguimos completar sua requisição"
    }
}

export const convertToMsg = (msg, delivery = false, ) => ({
    type: GET_DISTANCE,
    delivery,
    msg 
});

export function managerGoogleResponse(response){
    console.log(response)
    var status = GOOGLE_STATUS.UNKNOWN_ERROR
    if(response.data.status === GOOGLE_STATUS.OK){
        status = response.data.status

        //Verificar se é um endereço válido
        const elements = response.data.rows[0].elements[0]
        status = elements.status

        if(elements.status === GOOGLE_STATUS.OK){
            //Verificar se está dentro do raio de entrega
            const distance = elements.distance.value
            if(distance <= STORE.radius){
                return convertToMsg(getMsg(elements.status), true)
            }else{
                return convertToMsg("Infelizmente não entregamos na sua área." )
            }
        }
    }

    return convertToMsg(getMsg(status))
}