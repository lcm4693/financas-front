import { AlertService } from './alert-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DespesasListComponent } from './despesas-list/despesas-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DespesaNewComponent } from './despesa-new/despesa-new.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
  { path: '', component: DespesasListComponent },
  { path: 'lista', component: DespesasListComponent },
  { path: 'incluir', component: DespesaNewComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DespesasListComponent,
    DespesaNewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule
  ],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
