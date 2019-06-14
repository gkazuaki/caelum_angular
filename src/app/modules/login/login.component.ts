import { Component } from "@angular/core";
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';


@Component({
    selector : 'cmail-login',
    templateUrl : './login.component.html',
    styleUrls : ['./login.component.css']
})
export class LoginComponent{

    formLogin : FormGroup;
    emailInicial = 'jorde123@cmail.com.br';
    senhaInicial = '123';

    setupFormLoginInitialValues(){
        const stateDaRotaAtual = this.router.getCurrentNavigation().extras.state;

            if (stateDaRotaAtual) {
                this.emailInicial = stateDaRotaAtual.email;
                this.senhaInicial = stateDaRotaAtual.senha;
            }
    }

    constructor(private router: Router, private loginService: LoginService){
        this.setupFormLoginInitialValues();
        this.formLogin = new FormGroup({
            email: new FormControl(this.emailInicial, [
                Validators.required,
                Validators.email
            ]),
            senha: new FormControl(this.senhaInicial, [Validators.required])
        }); 
    }
    
    logar(){
        if (this.formLogin.valid){
            this.loginService
            .logar(
                this.formLogin.get('email').value,
                this.formLogin.get('senha').value
            )
            .subscribe(() => {
                this.router.navigate(['inbox']);
            })
        }
    }
}