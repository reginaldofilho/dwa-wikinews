import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { AdcNoticiaComponent } from './adc-noticia/adc-noticia.component';
import { PesquisarComponent } from './pesquisar/pesquisar.component';
import { ListaNoticiasComponent } from './lista-noticias/lista-noticias.component';

@NgModule({
  declarations: [
    AppComponent,
    NoticiaComponent,
    AdcNoticiaComponent,
    PesquisarComponent,
    ListaNoticiasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
