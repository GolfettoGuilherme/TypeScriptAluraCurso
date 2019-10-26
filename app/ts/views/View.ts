import { logarTempoDeExecucao } from "../helpers/decorators/logarTempoDeExecucao";

//export necessário para que os artefatos internos possam ser vistos externamente nos imports

export abstract class View<T> {

    private _elemento : JQuery; 
    private _escapar: boolean;

    //? parametro opicional => default: undefined
    constructor(seletor: string, escapar: boolean = false){
        this._elemento = $(seletor);
        this._escapar = escapar;
    }

    @logarTempoDeExecucao(false)
    update(modelo : T) : void{
        let template = this.template(modelo);
        if(this._escapar){
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this._elemento.html(template);
    }

    abstract template(modelo: T):string; //esse metodo PRECISA ser implementado, por isso o abstract

}
