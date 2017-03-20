import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AuthComponent} from "./auth/auth-shell.component";
import {ScholarShellComponent} from "./scholar/scholar-shell.component";
import {AUTH_ROUTES} from "./auth/auth.routing";
const APP_ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'scholars', component: ScholarShellComponent},
    {path: 'users', component: AuthComponent, loadChildren: './auth/auth.module#AuthModule'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);