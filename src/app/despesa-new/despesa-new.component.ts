import { AlertService } from './../alert-service.service';
import { DespesasService } from './../shared/despesas.service';
import { Despesa } from './../shared/despesa';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-despesa-new',
  templateUrl: './despesa-new.component.html',
  styleUrls: ['./despesa-new.component.css'],
  providers: [DespesasService],
})
export class DespesaNewComponent implements OnInit {
  @Input()
  despesa: Despesa = new Despesa();

  @Output()
  featureSelected = new EventEmitter<string>();

  constructor(private despesasService: DespesasService, private alertaService: AlertService) {}

  ngOnInit() {}

  limparDespesaTela() {
    this.despesa = new Despesa();
  }

  changeScreen(tela: string) {
    this.featureSelected.emit(tela);
  }

  async salvarDespesa() {
    try {
      const dep: Despesa = await this.despesasService.incluirDespesa(this.despesa);
      if (!dep) {
        return;
      }
      this.limparDespesaTela();
      this.changeScreen('lista');
    } catch (e) {
      this.alertaService.error(e.error.message);
    }
  }
}
