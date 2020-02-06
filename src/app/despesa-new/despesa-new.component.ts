import { Despesa } from './../shared/despesa';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-despesa-new',
  templateUrl: './despesa-new.component.html',
  styleUrls: ['./despesa-new.component.css'],
})
export class DespesaNewComponent implements OnInit {
  @Input()
  despesa: Despesa = new Despesa();

  @Input()
  id: string;

  constructor() {}

  ngOnInit() {}

  salvarDespesa() {
    console.log(this.despesa.id);
    console.log(this.id);
  }
}
