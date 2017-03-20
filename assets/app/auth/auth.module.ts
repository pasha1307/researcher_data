import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {SignupComponent} from "./signup.component";
import {LoginComponent} from "./login.component";
import {LogoutComponent} from "./logout";
import {authRouting} from "./auth.routing";
@NgModule({
    declarations: [
        SignupComponent,
        LoginComponent,
        LogoutComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        authRouting
    ]
})
export class AuthModule {

}