import { DespesasService } from './../despesas-list/despesas.service';
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

  constructor(private despesasService: DespesasService) {}

  ngOnInit() {}

  limparDespesaTela() {
    this.despesa = new Despesa();
  }

  changeScreen(tela: string) {
    this.featureSelected.emit(tela);
  }

  async salvarDespesa() {
    const dep: Despesa = await this.despesasService.incluirDespesa(this.despesa);
    if (!dep) {
      return;
    }
    this.limparDespesaTela();
    this.changeScreen('lista');
  }
}
