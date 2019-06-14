import { Component, Input } from "@angular/core";
import { HeaderService } from './header.service';

@Component({
    selector: 'cmail-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css',
             './header-search.css',]
})
export class HeaderComponent {
    @Input() title = ''

    isMenuOpen = false;

    constructor(private headerService: HeaderService) {}

    handleMenuClick(){
        this.isMenuOpen = !this.isMenuOpen;
    }

    capturaInputDoSearch(valor: string) {
        this.headerService.atualizaOsDadosDoFiltroDaBusca(valor);
    }
}