export const STORE = {
    address: 'Rua Retiro dos Artistas, 1931 - Pechincha, 22770-104',
    radius: 1000
}

export const GOOGLE = {
    KEY: 'AIzaSyBJVuCOet__R6Px7dC4jxpIiim5F40I6ok'
}

export const GOOGLE_STATUS = {
    OK: 'OK', // a solicitação é válida. Esse status pode ser retornado mesmo se nenhuma rota foi encontrada entre as origens e os destinos.
    INVALID_REQUEST: 'INVALID_REQUEST', //a solicitação é inválida. Geralmente, o motivo é a falta de campos obrigatórios. Consulte a lista de campos permitidos acima.
    MAX_ELEMENTS_EXCEEDED: 'MAX_ELEMENTS_EXCEEDED', //o produto de origens e destinos excede o limite por consulta.
    MAX_DIMENSIONS_EXCEEDED: 'MAX_DIMENSIONS_EXCEEDED', //a solicitação contém mais de 25 origens ou mais de 25 destinos.
    OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT', //o aplicativo solicitou um número excessivo de elementos dentro do período permitido. A solicitação poderá ser bem-sucedida se você tentar novamente após um intervalo razoável.
    REQUEST_DENIED: 'REQUEST_DENIED', //o serviço recusou o uso do serviço Distance Matrix por sua página.
    UNKNOWN_ERROR: 'UNKNOWN_ERROR', //um erro de servidor impediu o processamento de uma solicitação de matriz de distâncias. A solicitação poderá ser bem-sucedida se você tentar novamente.

//Status de elementos
    NOT_FOUND: 'NOT_FOUND', // não foi possível geocodificar a origem e/ou o destino desse pareamento.
    ZERO_RESULTS: 'ZERO_RESULTS' //não foi possível encontrar rotas entre a origem e o destino.

}

