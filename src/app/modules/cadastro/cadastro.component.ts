import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators"

function marcaCamposDoFormComoTouched(form : FormGroup){
    const controlKeys = Object.keys(form.controls);
    controlKeys.forEach(controlKeyAtual => { 
        form.get(controlKeyAtual).markAsTouched ({ onlySelf : true});
    });
}

@Component({
    selector: 'cmail-cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent {
    formCadastro : FormGroup = new FormGroup({
        nome : new FormControl('', [Validators.required, Validators.minLength(3)]),
        usuario: new FormControl ('', {
            asyncValidators: [this.validaUsuario.bind(this)],
            validators: [Validators.required, Validators.maxLength(20)],
            updateOn: 'blur'
        })


        //usuario: new FormControl('', [Validators.required, Validators.maxLength(10)],
        //[this.validaUsuario.bind(this)])
    });

    handleCadastroDeUsuario(){
        if (this.formCadastro.invalid) {
            marcaCamposDoFormComoTouched(this.formCadastro);
        }

        this.httpClient
        .post('http://localhost:3200/users', {
            name: this.formCadastro.get('nome').value,
            username: this.formCadastro.value.usuario,
            phone: '43423423423'
        })
        .subscribe(
            response => {
                console.log('Request enviado', response);
                err => {
                    console.log(err);
                }
            }
        )
    }

    validaUsuario(campo : FormControl) {
        return this.httpClient.get('http://localhost:3200/users').pipe(
            map((respostaDoServer : any) => {
                const usuarioFiltrados = respostaDoServer.users.filter(user => {
                    return user.username === campo.value;
                });
                const usernameEInvalido = usuarioFiltrados.length !== 0;
                return usernameEInvalido ? { usernameEmuso: true} : null;
            })
        );
    }

    constructor(private httpClient : HttpClient) {}
}