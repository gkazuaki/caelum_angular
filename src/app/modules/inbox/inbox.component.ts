import { Component } from "@angular/core";
import { NgForm } from '@angular/forms';

interface IEmail{
    para : string,
    assunto : string,
    conteudo : string
  }

@Component({
    selector: 'cmail-inbox',
    templateUrl: './inbox.component.html'
})
export class InboxComponent{
    title = 'Cmail - O Email mais showzao';

    isFormOpen = false;

    emails : IEmail[] = [];

    email : IEmail = {
        para : 'teste@gmail.com ',
        assunto : 'assunto x',
        conteudo : 'conteujdo bla'
  }

  handleAddClick() {
      this.isFormOpen = !this.isFormOpen;
  }

  sendEmail(formEmail : NgForm){
    if (formEmail.valid){
      this.emails.push({
          para : formEmail.form.value.para,
          assunto : formEmail.form.value.assunto,
          conteudo : formEmail.form.value.conteudo,
      });
      formEmail.resetForm();
    } else {
      alert("Deixa de ser mané");
    }
  }
}

    //infosDoEvento.preventDefault()
    //funcional/imutabilidade
    //Spread Operator
    //this.emails.push({ ...this.email }); 
    //this.email ={
    //  para : '',
    //  assunto : '',
    //  conteudo : ''
    //}