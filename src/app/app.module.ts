import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { AdcNoticiaComponent } from './adc-noticia/adc-noticia.component';
import { PesquisarComponent } from './pesquisar/pesquisar.component';
import { ListaNoticiasComponent } from './lista-noticias/lista-noticias.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NoticiaComponent,
    AdcNoticiaComponent,
    PesquisarComponent,
    ListaNoticiasComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
