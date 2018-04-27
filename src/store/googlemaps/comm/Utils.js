import { STORE } from '../comm/Consts';
import { GET_DISTANCE } from '../actions/action_get_distance';

export const OK = 'OK'; // a solicitação é válida. Esse status pode ser retornado mesmo se nenhuma rota foi encontrada entre as origens e os destinos.
export const INVALID_REQUEST = 'INVALID_REQUEST'; //a solicitação é inválida. Geralmente, o motivo é a falta de campos obrigatórios. Consulte a lista de campos permitidos acima.
export const MAX_ELEMENTS_EXCEEDED = 'MAX_ELEMENTS_EXCEEDED'; //o produto de origens e destinos excede o limite por consulta.
export const MAX_DIMENSIONS_EXCEEDED = 'MAX_DIMENSIONS_EXCEEDED'; //a solicitação contém mais de 25 origens ou mais de 25 destinos.
export const OVER_QUERY_LIMIT = 'OVER_QUERY_LIMIT'; //o aplicativo solicitou um número excessivo de elementos dentro do período permitido. A solicitação poderá ser bem-sucedida se você tentar novamente após um intervalo razoável.
export const REQUEST_DENIED = 'REQUEST_DENIED'; //o serviço recusou o uso do serviço Distance Matrix por sua página.
export const UNKNOWN_ERROR = 'UNKNOWN_ERROR'; //um erro de servidor impediu o processamento de uma solicitação de matriz de distâncias. A solicitação poderá ser bem-sucedida se você tentar novamente.

//Status de elementos
export const NOT_FOUND = 'NOT_FOUND'; // não foi possível geocodificar a origem e/ou o destino desse pareamento.
export const ZERO_RESULTS = 'ZERO_RESULTS'; //não foi possível encontrar rotas entre a origem e o destino.

export function getMsg(status){
    switch (status){
        case OK:
			return "Uhuuu vamos comer."
        case NOT_FOUND:
        case ZERO_RESULTS:
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
    var status = UNKNOWN_ERROR
    if(response.data.status === "OK"){
        status = response.data.status

        //Verificar se é um endereço válido
        const elements = response.data.rows[0].elements[0]
        status = elements.status

        if(elements.status === "OK"){
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