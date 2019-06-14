import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InboxComponent } from './modules/inbox/inbox.component';
import { ModuloDeRoteamento } from './app.routs';
import { Page404Component } from './modules/Page404/page404.component';
import { HttpClientModule } from '@angular/common/http';
import { CmailFormModule } from './shared/modules/cmailform/components/cmail-form-group/cmail-form.module';
import { AuthBasicGuard } from './guards/auth-basic.guard';
import { EmailService } from './modules/inbox/email.service';
import { FiltraEmailPorBody } from './modules/inbox/pipes/filtraEmailPorBody.pipe';

@NgModule({
  declarations: [
    //Componente, diretiva
    AppComponent,
    HeaderComponent,
    InboxComponent,
    Page404Component,
    FiltraEmailPorBody
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
    AuthBasicGuard, EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }