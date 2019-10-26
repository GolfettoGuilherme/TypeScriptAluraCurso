//importando o modulo View do arquivo View
import { View } from './View';
import { Negociacoes } from '../models/Negociacoes';

export class NegociacoesView extends View<Negociacoes>{

    template(modelo: Negociacoes): string{
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
                ${modelo.paraArray().map(item => 
                    `
                    <tr>
                        <td>${item.data.getDate()}/${ item.data.getMonth() +1}/${item.data.getFullYear()}</td>
                        <td>${item.quantidade}</td>
                        <td>${item.valor}</td>
                        <td>${item.volume}</td>
                    </tr>
                    `
                ).join('')}
            </tbody>

            <tfoot>
            </tfoot>
        </table>     
        `;

    }
}