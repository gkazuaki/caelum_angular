import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './modules/login/login.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';
import { InboxComponent } from './modules/inbox/inbox.component';
import { ModuloDeRoteamento } from './app.routs';
import { Page404Component } from './modules/Page404/page404.component';
import { CmailFormGroupComponent } from './componentes/cmail-form-group/cmail-form-group.component';
import { CmailFormFieldDirective } from './componentes/cmail-form-group/cmailFormField.directive';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    //Componente, diretiva
    AppComponent,
    HeaderComponent,
    LoginComponent,
    CadastroComponent,
    InboxComponent,
    Page404Component,
    CmailFormGroupComponent,
    CmailFormFieldDirective
  ],
  imports: [
    //Módulo da aplicação
    BrowserModule, FormsModule, ModuloDeRoteamento, ReactiveFormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
