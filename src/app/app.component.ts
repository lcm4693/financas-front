import { AlertService } from './alert-service.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'financas-front';
  feature = 'lista';
  erro: { mensagem: string; tipo: string; cssClass: string };

  private subscription: Subscription;

  constructor(private alertService: AlertService) {}

  ngOnInit(): void {
    this.subscription = this.alertService.getAlert().subscribe((message) => {
      switch (message.tipo) {
        case 'success':
          message.cssClass = 'alert alert-success';
          break;
        case 'error':
          message.cssClass = 'alert alert-danger';
          break;
      }
      this.erro = message;
    });
  }

  onSelect(pagina: string): void {
    this.feature = pagina;
  }
}
