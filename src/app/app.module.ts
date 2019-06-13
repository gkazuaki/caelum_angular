import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './modules/login/login.component';
import { InboxComponent } from './modules/inbox/inbox.component';
import { ModuloDeRoteamento } from './app.routs';
import { Page404Component } from './modules/Page404/page404.component';
import { HttpClientModule } from '@angular/common/http';
import { CmailFormModule } from './shared/modules/cmailform/components/cmail-form-group/cmail-form.module';
import { LoginService } from './modules/login/login.service';


@NgModule({
  declarations: [
    //Componente, diretiva
    AppComponent,
    HeaderComponent,
    LoginComponent,
    InboxComponent,
    Page404Component,
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    ModuloDeRoteamento, 
    ReactiveFormsModule, 
    HttpClientModule,
    CmailFormModule
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
