import {Component} from "@angular/core";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";
@Component({
    selector: 'app-logout',
    template: `<button type="button" class="btn btn-info" (click)="logout()">Logout</button>`
})
export class LogoutComponent {
    constructor(private authService: AuthService, private router: Router) {}
logout() {
        this.authService.logout();
        this.router.navigateByUrl('/');
}
}