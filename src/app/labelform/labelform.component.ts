import { Component, Input} from "@angular/core";

@Component ({
    selector: 'app-labelform',
    templateUrl: './labelform.component.html',
    styleUrls: ['./labelform.component.css']
})

export class LabelFormComponent {
    @Input() text?:string;
    @Input() type?:number;
    @Input() position?:number;
    constructor() {
    }
}
