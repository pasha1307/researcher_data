import {Component, Input} from "@angular/core";
import {Scholar} from "./scholar.model";
import {ScholarService} from "./scholar.service";
@Component({
    selector: 'scholar-item',
    templateUrl: './scholar-item.component.html'
})
export class ScholarItemComponent {
  constructor(private scholarService: ScholarService) {}
    @Input() scholar: Scholar;
    @Input() title:string;
  onEdit() {
    this.scholarService.editScholar(this.scholar);
    this.title = 'Edit Record'
  }
  onDelete() {
    this.scholarService.deleteScholar(this.scholar).subscribe(
        result => console.log(result)
    )
  }
}