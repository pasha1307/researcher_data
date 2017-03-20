import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators } from "@angular/forms";
import {User} from "./user.model";
import {AuthService} from "./auth.service";
import {error} from "util";
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit{
constructor(private authService: AuthService) {}
    myForm: FormGroup
    onSubmit() {
        console.log('submit')
        const user = new User(
            this.myForm.value.email,
            this.myForm.value.password,
            this.myForm.value.firstName,
            this.myForm.value.lastName)
        this.authService.signup(user).subscribe(
            data => console.log(data),
            error => console.log(error)
        )
        this.myForm.reset();
    }
    ngOnInit() {
        this.myForm = new FormGroup({
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            email: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        })
    }

}