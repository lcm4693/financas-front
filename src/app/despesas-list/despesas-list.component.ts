import { Component, OnInit } from '@angular/core';
import { DespesasService } from './despesas.service';

@Component({
  selector: 'app-despesas-list',
  templateUrl: './despesas-list.component.html',
  providers: [DespesasService]
})
export class DespesasListComponent implements OnInit {

  despesas: {id: number, descricao: string, data: string, valor: number}[] = [];

  constructor(private despesasService: DespesasService) { 
  }

  ngOnInit() {
    this.despesas = this.despesasService.getDespesas();
  }

}
