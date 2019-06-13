import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro.component';

const rotasDoCadastro: Routes = [{ path: '', component: CadastroComponent}]

@NgModule({
    imports: [RouterModule.forChild(rotasDoCadastro)],
    exports: [RouterModule]
})
export class CadastroRoutingModule {}