
import {Component, OnInit} from "@angular/core";
import {NgForm} from "@angular/forms";
import {Scholar} from "./scholar.model";
import {ScholarService} from "./scholar.service";
import {error} from "util";
@Component({
    selector: 'scholar-form',
    templateUrl: './scholar-form.component.html'
})
export class ScholarFormComponent implements OnInit {
    scholar: Scholar;
    title:string;
    constructor(private scholarService: ScholarService) {}
    onSubmit(form: NgForm) {
        if(this.scholar) {
            this.scholar.name = form.value.name;
                this.scholar.position = form.value.position;
                this.scholar.place = form.value.place;
                this.scholar.contact = form.value.contact;
                this.scholar.detail = form.value.detail;
                this.scholar.misc = form.value.misc;
                this.scholar.country = form.value.country;
            this.scholarService.updateScholar(this.scholar).subscribe( result => console.log(result) )
        }
        const scholar = new Scholar(
            form.value.name,
            form.value.position,
            form.value.place,
            form.value.contact,
            form.value.detail,
            form.value.misc,
            form.value.country
        )
        this.scholarService.addScholar(scholar).subscribe(
            data => console.log(data),
            error => console.error(error)
        )
        form.resetForm();
    }
    ngOnInit() {
        this.scholarService.isEdited.subscribe((scholar: Scholar) => {
            this.scholar=scholar
            this.title = 'Edit Record'
        })
    }
}