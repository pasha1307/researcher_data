import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {User} from "./user.model";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    constructor(private authService: AuthService, private router: Router ) {}
    myForm: FormGroup;
    onSubmit() {
        const user = new User(this.myForm.value.email, this.myForm.value.password);
        this.authService.login(user).subscribe(
            data => {
                localStorage.setItem('token', data.token),
                localStorage.setItem('userId', data.userId)
            },
            error => console.error(error)
        )
        this.myForm.reset();
        this.router.navigate(['/scholars']);
    }
    ngOnInit() {
      this.myForm = new FormGroup({
          email: new FormControl(null, Validators.required),
          password: new FormControl(null, Validators.required)
      })
    }
}