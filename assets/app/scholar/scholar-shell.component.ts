import {Component} from "@angular/core";
@Component({
    selector: 'app-scholar',
    template: `<div class="row">
<div class="col-sm-6">
    <scholar-form></scholar-form>
</div>
<div class="col-sm-6" id="list-to-edit">
    <scholar-list></scholar-list>
</div>
</div>`,
    styles: [
        `#list-to-edit {
height: 100vh;
overflow-y: scroll;`
    ]
})
export class ScholarShellComponent {

}