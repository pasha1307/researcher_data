import {Component} from "@angular/core";
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    isLogged() {
    return localStorage.getItem('token') !== null;
}
}