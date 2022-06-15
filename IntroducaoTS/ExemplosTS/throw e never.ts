function jogaError(erro: string, valcod: number):never {
    throw(error:erro ,code:valcod )
    
}

jogaError('Erro',404)