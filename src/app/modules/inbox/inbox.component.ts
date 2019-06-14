import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { EmailService } from "./email.service";
import { Email } from "./domain/Email";
import { HeaderService } from 'src/app/header/header.service';

// Props do componente
interface IEmailFromView {
  to: string;
  subject: string;
  body: string;
}

@Component({
  selector: "cmail-inboxpage",
  templateUrl: "./inbox.component.html"
})
export class InboxComponent implements OnInit {
  title = "Cmail - O Email mais showzao";

  emails: Email[] = [];

  email: IEmailFromView = {
    to: "omariosouto@cmail.com",
    subject: "Teste",
    body: "Corpo do email"
  };

  isNewEmailFormOpen = false;

  valorDoFiltroDosEmails = "";

  constructor(
    private emailService: EmailService,
    private headerService: HeaderService
  ) {
    this.headerService.valorDoFiltroDaBusca.subscribe(valorDaBusca => {
      this.valorDoFiltroDosEmails = valorDaBusca;
    });
  }

  toggleNewEmailForm() {
    this.isNewEmailFormOpen = !this.isNewEmailFormOpen;
  }

  ngOnInit() {
    // implements OnInit
    // #Desafio:
    // Implementar a função listar parra fazer o código abaixo funcionar
    this.emailService.listar().subscribe((email: Email[]) => {
      // setTimeout(() => {
      this.emails = email;
      // }, 1000);
    });
  }

  sendEmail(formEmail: NgForm) {
    if (formEmail.valid) {
      this.emailService
        .enviar({
          content: this.email.body,
          subject: this.email.subject,
          to: this.email.to
        })
        .subscribe(
          (email: Email) => {
            this.emails.push(email);
          },
          err => {
            console.log(err);
          }
        );
      formEmail.resetForm();
    } else {
      alert("Deixa de ser espertinho");
    }
  }
}