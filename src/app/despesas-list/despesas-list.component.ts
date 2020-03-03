import { AlertService } from './../alert-service.service';
import { DespesasService } from './../shared/despesas.service';
import { Despesa } from './../shared/despesa';
import { Component, OnInit, Injectable, Input } from '@angular/core';

@Injectable()
@Component({
  selector: 'app-despesas-list',
  templateUrl: './despesas-list.component.html',
  providers: [DespesasService],
})
export class DespesasListComponent implements OnInit {
  despesas: Despesa[] = [];

  constructor(private despesasService: DespesasService, private alertaService: AlertService) {}

  @Input()
  collectionSize: number;

  @Input()
  pageSize: number;

  @Input()
  page: number;

  async delete(despesa: Despesa) {
    try {
      this.despesas = await this.despesasService.apagarDespesa(despesa);
    } catch (e) {
      this.alertaService.error('Ocorreu um problema ao apagar a Despesa');
    }
  }

  async ngOnInit() {
    try {
      this.despesas = await this.despesasService.getDespesas();
      this.page = 1;
      this.pageSize = 2;
      this.collectionSize = this.despesas.length;

    } catch (e) {
      this.alertaService.error('Ocorreu um problema ao buscar a lista de Despesas');
    }
  }
}
