export class DespesasService {

     despesas = [
        {id: 1, descricao: 'Despesa 1', data: '2019-11-20 09:41:00', valor: 12.80},
        {id: 2, descricao: 'Despesa 2', data: '2019-11-21 10:30:00', valor: 10.00},
        {id: 1, descricao: 'Despesa 1', data: '2019-11-20 09:41:00', valor: 12.80},
        {id: 2, descricao: 'Despesa 2', data: '2019-11-21 10:30:00', valor: 10.00}];

    constructor(){}

    getDespesas(){
        console.log(this.despesas);
        return this.despesas;
    }

}