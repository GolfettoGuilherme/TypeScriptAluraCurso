export class Negociacao{

    //definido as propriedades da classe e ja aplicando os valores
    constructor(readonly data : Date, readonly quantidade : number, readonly valor : number){}

    get volume(){
        return this.quantidade * this.valor;
    }

    paraTexto(): void {
        console.log(
            `Data: ${this.data}
            Quantidade: ${this.quantidade}, 
            Valor: ${this.valor}, 
            Volume: ${this.volume}`
        )
    }
}
