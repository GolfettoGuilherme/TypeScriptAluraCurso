import { NegociacaoParcial } from "../../views/index"
import { Negociacao } from "../../models/index"

export class NegociacaoService {

    obterNegociacoes(handler: HandlerFunction): Promise<Negociacao[]> {

        return fetch("http://localhost:8080/dados")
            .then(res => handler(res)) 
            .then(res => res.json())
            .then((dados: NegociacaoParcial[]) => 
                dados.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
            )
            .catch(err => console.log(err.message));
    }
}

export interface HandlerFunction{
    //qualquer funcao que faca a mesma coisa que essa funcion
    (res: Response): Response;
}