import { Component, OnInit, Injectable } from "@angular/core";
import { DespesasService } from "./despesas.service";

@Injectable()
@Component({
  selector: "app-despesas-list",
  templateUrl: "./despesas-list.component.html",
  providers: [DespesasService]
})
export class DespesasListComponent implements OnInit {
  despesas: {
    id: number;
    descricao: string;
    data: Date;
    valor: number;
  }[] = [];

  constructor(private despesasService: DespesasService) {}

  async ngOnInit() {
    this.despesas = await this.despesasService.getDespesas();
  }
}
