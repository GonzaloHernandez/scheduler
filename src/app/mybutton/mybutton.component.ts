import { Component } from "@angular/core";

@Component ({
    selector: 'app-mybutton',
    templateUrl: './mybutton.component.html',
    styleUrls: ['./mybutton.component.css']
})

export class MyButtonComponent {
    canClick = false
    fontColor = 'red'
    myalert() {
        this.fontColor = 'blue'
        this.canClick = true
    }
}