import { Component } from "@angular/core";

@Component ({
    selector: 'app-cellform',
    templateUrl: './cellform.component.html',
    styleUrls: ['./cellform.component.css']
})

export class CellFormComponent {
    selected = false;
    switch() {
        this.selected = !this.selected;
    }
}

