import { Routes, RouterModule, Route}  from '@angular/router';
import { CadastroComponent} from './modules/cadastro/cadastro.component';
import { LoginComponent} from './modules/login/login.component';
import { InboxComponent} from './modules/inbox/inbox.component';
import { Page404Component } from './modules/Page404/page404.component';
import { NgModule } from '@angular/core';

const rotasDaAplicacao: Routes = [
    {path: "", component: LoginComponent},
    {path : "login", redirectTo : ""},
    {path: "inbox", component: InboxComponent},
    {
        path: "cadastro", 
        loadChildren: 'src/app/modules/cadastro/cadastro.module#CadastroModule'
    },
    {path: "**", component: Page404Component}
];
//export const ModuloDeRoteamento = RouterModule.forRoot(rotasDaAplicacao)

@NgModule({
    imports: [RouterModule.forRoot(rotasDaAplicacao)],
    exports: [RouterModule]
})
export class ModuloDeRoteamento{}