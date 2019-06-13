import { NgModule } from "@angular/core";
import { CmailFormFieldDirective } from './cmailFormField.directive';
import { CmailFormGroupComponent } from './cmail-form-group.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [CmailFormFieldDirective, CmailFormGroupComponent],
    imports: [CommonModule],
    exports: [CmailFormFieldDirective, CmailFormGroupComponent]
})
export class CmailFormModule {}