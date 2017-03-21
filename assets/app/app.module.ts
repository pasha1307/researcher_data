import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import {routing} from "./app.routing";
import {HomeComponent} from "./home/home.component";
import {ScholarShellComponent} from "./scholar/scholar-shell.component";
import {HeaderComponent} from "./header/header.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./auth/auth.service";
import {HttpModule} from "@angular/http";
import {ScholarFormComponent} from "./scholar/scholar-form.component";
import {ScholarListComponent} from "./scholar/scholar-list.component";
import {ScholarItemComponent} from "./scholar/scholar-item.component";
import {ScholarService} from "./scholar/scholar.service";
import {AuthComponent} from "./auth/auth-shell.component";
import {Ng2FilterPipeModule} from "ng2-filter-pipe";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        ScholarShellComponent,
        AuthComponent,
        ScholarFormComponent,
        ScholarListComponent,
        ScholarItemComponent
    ],
    imports: [BrowserModule, routing, FormsModule, ReactiveFormsModule, HttpModule, Ng2FilterPipeModule],
    providers: [AuthService, ScholarService ],
    bootstrap: [AppComponent]
})
export class AppModule {

}