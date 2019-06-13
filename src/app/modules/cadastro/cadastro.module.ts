import { NgModule } from "@angular/core";
import { CadastroComponent } from './cadastro.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastroRoutingModule as CadastroRoutingModule } from './cadastro-routing.module';
import { CmailFormModule } from 'src/app/shared/modules/cmailform/components/cmail-form-group/cmail-form.module';

@NgModule({
    declarations: [
        CadastroComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        CmailFormModule,
        CadastroRoutingModule
    ],
    exports: [CadastroComponent]
})
export class CadastroModule {}