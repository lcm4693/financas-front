import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DespesasService {
  // despesas = [
  //   { id: 1, descricao: "Despesa 1", data: "2019-11-20 09:41:00", valor: 12.8 },
  //   { id: 2, descricao: "Despesa 2", data: "2019-11-21 10:30:00", valor: 10.0 },
  //   { id: 1, descricao: "Despesa 1", data: "2019-11-20 09:41:00", valor: 12.8 },
  //   { id: 2, descricao: "Despesa 2", data: "2019-11-21 10:30:00", valor: 10.0 }
  // ];
  despesas: [{id: number, descricao: string, data: Date, valor: number }];

  constructor(private httpClient: HttpClient) {}

  async getDespesas() {
    try {
      // return this.despesas;

      // tslint:disable-next-line: max-line-length
      return (this.despesas = (await this.httpClient.get('/api/retornaDespesas').toPromise()) as [{ id: number, descricao: string, data: Date, valor: number }]);
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
