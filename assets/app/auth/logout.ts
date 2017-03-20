import {Component} from "@angular/core";
import {AuthService} from "./auth.service";
@Component({
    selector: 'app-logout',
    template: `<button type="button" class="btn btn-info" (click)="logout()">Logout</button>`
})
export class LogoutComponent {
    constructor(private authService: AuthService) {}
logout() {
        this.authService.logout();
}
}