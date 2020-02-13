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

  async getDespesas() {
    try {
      // return this.despesas;

      // tslint:disable-next-line: max-line-length
      return (this.despesas = (await this.httpClient.get('/api/api/retornaDespesas').toPromise()) as [{ id: number; descricao: string; data: Date; valor: number }]);
    } catch (e) {
      console.log('Erro: ', e);
      return this.despesas;
    }
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
