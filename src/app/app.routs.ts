import { Routes, RouterModule, Route}  from '@angular/router';
import { InboxComponent} from './modules/inbox/inbox.component';
import { Page404Component } from './modules/Page404/page404.component';
import { NgModule } from '@angular/core';
import { AuthBasicGuard } from './guards/auth-basic.guard';

const rotasDaAplicacao: Routes = [
    {path : "login", redirectTo : ""},
    {path: "inbox", component: InboxComponent, canActivate: [AuthBasicGuard]},
    {
        path: "", 
        loadChildren: 'src/app/modules/login/login.module#LoginModule'
    },
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