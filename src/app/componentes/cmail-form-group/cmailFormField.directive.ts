import { Directive, ElementRef, ɵCompiler_compileModuleAsync__POST_R3__ } from '@angular/core';

@Directive ({
    selector : '[cmailFormField]'
})
export class CmailFormFieldDirective {
    constructor (CampoEmHTML : ElementRef){
        const campo = CampoEmHTML.nativeElement;

        const name = campo.getAttribute('name');

        campo.setAttribute('id', name);
        campo.classList.add("mdl-textfield__input");
    }
}