import {Component} from "@angular/core";
@Component({
    selector: 'app-auth',
    templateUrl: './auth-shell.component.html'
})
export class AuthComponent {
hasToken() {
    return localStorage.getItem('token') !== null;
}
}