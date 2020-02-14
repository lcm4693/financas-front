import { Despesa } from './despesa';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DespesasService {
  despesas: Despesa[] = [];

  constructor(private httpClient: HttpClient) {}

  async incluirDespesa(despesa: Despesa): Promise<Despesa> {
    this.despesas.push((await this.httpClient.post('/api/api/incluirDespesa', despesa).toPromise()) as Despesa);
    return despesa;
  }

  async apagarDespesa(despesa: Despesa): Promise<Despesa[]> {
    await this.httpClient.post('/api/api/apagarDespesa', despesa).toPromise();
    this.despesas = this.despesas.filter((value, index, arr) => {
      return value._id !== despesa._id;
    });

    return this.despesas;
  }

  async getDespesas() {
    return (this.despesas = (await this.httpClient.get('/api/api/retornaDespesas').toPromise()) as Despesa[]);
  }

  // result(){
  //     this.http.get(this.backEnd + '/api/despesas-list')
  //     .pipe(
  //         map(responseData => {
  //             const array = [];
  //             for (const key in responseData){
  //             if(responseData.hasOwnProperty(key)){
  //                 array.push({...responseData[key]});
  //             }
  //             }
  //             return array;
  //         })
  //     ).subscribe(array => {
  //         console.log("Executando o serviço: " + array);
  //         this.despesas = array;
  //     });
  //     this.despesas;
  // }
}
