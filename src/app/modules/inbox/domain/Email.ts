export class Email {
  id: string;
  to: string;
  subject: string;
  body: string;
  creationDate: string;

  constructor(id, to, subject, body, creationDate) {
    this.id = id;
    this.to = to;
    this.subject = subject;
    this.body = body;
    this.creationDate = creationDate;
  }
}