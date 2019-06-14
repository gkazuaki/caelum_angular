import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class HeaderService {
  valorDoFiltroDaBusca = new EventEmitter();

  atualizaOsDadosDoFiltroDaBusca(valorAtual) {
    this.valorDoFiltroDaBusca.emit(valorAtual);
  }
}