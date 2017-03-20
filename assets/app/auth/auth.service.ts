import {Injectable} from "@angular/core";
import {User} from "./user.model";
import {Http, Headers, Response} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from 'rxjs';
import {APP_URL} from "../app-url";

@Injectable()
export class AuthService {
    constructor(private http: Http) {}
    signup(user: User) {
       const body = JSON.stringify(user);
       const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(APP_URL + '/user', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error:Response) => Observable.throw(error.json()))
    }
    login(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(APP_URL + '/user/login', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }
    logout() {
        localStorage.clear();
    }

}