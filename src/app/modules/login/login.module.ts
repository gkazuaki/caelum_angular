import { NgModule } from "@angular/core";
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CmailFormModule } from 'src/app/shared/modules/cmailform/components/cmail-form-group/cmail-form.module';
import { LoginService } from './login.service';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        CmailFormModule,
        LoginRoutingModule
    ],
    exports: [LoginComponent],
    providers: [
        LoginService
    ]
})
export class LoginModule {}