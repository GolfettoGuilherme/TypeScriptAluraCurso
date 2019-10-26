import { Negociacao } from "./Negociacao";

export class Negociacoes{

    private _negociacoes: Negociacao[] = []; //lista de negociacoes

    adiciona(negociacao: Negociacao) : void{
        this._negociacoes.push(negociacao);
    }

    //usado para não retornar o original, usando uma copia dele
    paraArray(): Negociacao[]{
        return ([] as Negociacao[]).concat(this._negociacoes);
    }
}