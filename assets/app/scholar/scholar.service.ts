import {Injectable, EventEmitter} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/Rx';
import {Scholar} from './scholar.model';
import {Observable} from 'rxjs';
import {APP_URL} from "../app-url";


@Injectable()
export class ScholarService {
    scholars: Scholar[] = [];
    isEdited = new EventEmitter<Scholar>();
    constructor(private http: Http) {}
    addScholar(scholar:Scholar) {
        const body = JSON.stringify(scholar);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(APP_URL + '/scholar', body, {headers:headers})
            .map((response:Response) => {
                const result = response.json();
                const scholar = new Scholar(
                    result.obj.name,
                    result.obj.position,
                    result.obj.place,
                    result.obj.contact,
                    result.obj.detail,
                    result.obj.misc,
                    result.obj.country,
                    result.obj._id
                )
                this.scholars.push(scholar);
                return scholar;
            })
            .catch((error:Response) => Observable.throw(error.json()))
    }

    getScholars() {
        return this.http.get(APP_URL + '/scholar')
    .map((response: Response) => {
        const scholars = response.json().obj;
        const scholarsMod = [];
        for(let scholar of scholars) {
            scholarsMod.push(new Scholar(
                scholar.name,
                scholar.position,
                scholar.place,
                scholar.contact,
                scholar.detail,
                scholar.misc,
                scholar.country,
                scholar._id)
            )}
            this.scholars = scholarsMod;
            return scholarsMod;
    })
    .catch((error: Response) => Observable.throw(error.json()))
}
    editScholar(scholar:Scholar) {
        this.isEdited.emit(scholar);
    }
    updateScholar(scholar:Scholar) {
        const body = JSON.stringify(scholar);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.patch(APP_URL + '/scholar/' + scholar.scholarId, body, {headers:headers})
            .map((response: Response) => response.json())
            .catch((error:Response) => Observable.throw(error.json()))
    }
    deleteScholar(scholar:Scholar) {
        this.scholars.splice(this.scholars.indexOf(scholar), 1);
        return this.http.delete(APP_URL + '/scholar/' + scholar.scholarId)
            .map((response: Response) => response.json())
            .catch((error:Response) => Observable.throw(error.json()))
    }
}