import {Component, OnInit} from "@angular/core";
import {Scholar} from "../scholar/scholar.model";
import {ScholarService} from "../scholar/scholar.service";
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: [`.home {
    height: 100vh;
    width: 100%;
    background: rgba(0,0,0,.7);
    overflow-y: auto;
    }`]
})
export class HomeComponent implements OnInit {
    selectedScholar: Scholar;

    scholars: Scholar[] = [];
    constructor(private scholarService: ScholarService) {}
    onSelect(scholar: Scholar) {
        this.selectedScholar = scholar;
    }

    ngOnInit() {
      this.scholarService.getScholars().subscribe(
          (scholars:Scholar[]) => this.scholars = scholars
      )
    }
}