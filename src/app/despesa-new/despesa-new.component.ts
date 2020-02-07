import { DespesasService } from './../despesas-list/despesas.service';
import { Despesa } from './../shared/despesa';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-despesa-new',
  templateUrl: './despesa-new.component.html',
  styleUrls: ['./despesa-new.component.css'],
  providers: [DespesasService],
})
export class DespesaNewComponent implements OnInit {
  @Input()
  despesa: Despesa = new Despesa();

  constructor(private despesasService: DespesasService) {}

  ngOnInit() {}

  limparDespesaTela(){
    this.despesa = new Despesa();
  }

  salvarDespesa() {
    this.despesasService.incluirDespesa(this.despesa);
    this.limparDespesaTela();
  }
}
