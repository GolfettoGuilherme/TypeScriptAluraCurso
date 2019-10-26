export function domInject(selector: string){
    //usado para lazy loading
    //ele vai injectar os elementod do DOM na property da classe quando elas forem chamadas
    return function(target: any, key:string){
        let elemento: JQuery;

        const getter = function() {

            if(!elemento){
                console.log(`buscando ${selector} para injectar em ${key}`);
                elemento = $(selector);
            }
            return elemento;
        }

        Object.defineProperty(target, key, {
            get: getter
        });
    }
}