import { AlertService } from './../alert-service.service';
import { DespesasService } from './../shared/despesas.service';
import { Despesa } from './../shared/despesa';
import { Component, OnInit, Injectable } from '@angular/core';

@Injectable()
@Component({
  selector: 'app-despesas-list',
  templateUrl: './despesas-list.component.html',
  providers: [DespesasService],
})
export class DespesasListComponent implements OnInit {
  despesas: Despesa[] = [];

  constructor(private despesasService: DespesasService, private alertaService: AlertService) {}

  async delete(despesa: Despesa) {
    try {
      this.despesas = await this.despesasService.apagarDespesa(despesa);
    } catch (e) {
      this.alertaService.error('Ocorreu um problema ao apagar a Despesau');
    }
  }

  async ngOnInit() {
    try {
      this.despesas = await this.despesasService.getDespesas();
    } catch (e) {
      this.alertaService.error('Ocorreu um problema ao buscar a lista de Despesas');
    }
  }
}
