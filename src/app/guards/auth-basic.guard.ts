import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthBasicGuard implements CanActivate {
    constructor (private router: Router) {}

    canActivate() {
        const isUsuarioLogado = Boolean(localStorage.getItem('TOKEN'));

        if (isUsuarioLogado){
            return true;
        } else {
            this.router.navigate(['/login'])
            return false;
        }
    }
}