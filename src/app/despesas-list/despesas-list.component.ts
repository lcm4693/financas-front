import { AlertService } from './../alert-service.service';
import { DespesasService } from './../shared/despesas.service';
import { Despesa } from './../shared/despesa';
import { Component, OnInit, Injectable } from '@angular/core';

@Injectable()
@Component({
  selector: 'app-despesas-list',
  templateUrl: './despesas-list.component.html',
  providers: [DespesasService, AlertService],
})
export class DespesasListComponent implements OnInit {
  despesas: Despesa[] = [];

  constructor(private despesasService: DespesasService) {}

  async ngOnInit() {
    this.despesas = await this.despesasService.getDespesas();
  }
}
