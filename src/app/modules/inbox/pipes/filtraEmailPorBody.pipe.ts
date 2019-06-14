import { Email } from '../domain/Email';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filtraEmailPorBody'})
export class FiltraEmailPorBody implements PipeTransform {
    transform(emails: Email[], criterioDoFiltro: string){
        const criterioDoFiltroPadronizado = criterioDoFiltro.toUpperCase();
        return emails.filter(email => {
            const bodyPadronizado = email.body === null ? '' : email.body.toUpperCase();
            return bodyPadronizado.includes(criterioDoFiltroPadronizado);
        });
    }
}