import { NgModule } from "@angular/core";
import { RouterModule, Router, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

const rotasDoLogin: Routes = [{path: '', component: LoginComponent}]

@NgModule ({
    imports: [RouterModule.forChild(rotasDoLogin)],
    exports: [RouterModule]
})
export class LoginRoutingModule {}