import {Component, OnInit} from "@angular/core";
import {ScholarService} from "./scholar.service";
import {Scholar} from "./scholar.model";
@Component({
    selector: 'scholar-list',
    templateUrl: './scholar-list.component.html'
})
export class ScholarListComponent implements OnInit {
scholars: Scholar[];
    constructor(private scholarService: ScholarService) {}
    ngOnInit() {
       this.scholarService.getScholars().subscribe(
           (scholars: Scholar[]) => this.scholars = scholars
       )
    }
}