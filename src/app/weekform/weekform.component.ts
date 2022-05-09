import { Component } from "@angular/core";
import { LabelFormComponent } from "../labelform/labelform.component";

@Component ({
    selector: 'app-weekform',
    templateUrl: './weekform.component.html',
    styleUrls: ['./weekform.component.css']
})

export class WeekFormComponent {
    days = DAYS;

    labels?: LabelFormComponent[];
    
    counter(i:number) {
        return new Array(i);
    }
    
}

const DAYS = [
    {id:1, short: 'Mon', name:'Monday'},
    {id:2, short: 'Tue', name:'Tuesday'},
    {id:3, short: 'Wed', name:'Wednesday'},
    {id:4, short: 'Thu', name:'Thursday'},
    {id:5, short: 'Fri', name:'Friday'},
    {id:6, short: 'Sat', name:'Saturday'},
    {id:7, short: 'Sun', name:'Sunday'}
];    
