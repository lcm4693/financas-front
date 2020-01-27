import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DespesasListComponent } from './despesas-list/despesas-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DespesasListComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
