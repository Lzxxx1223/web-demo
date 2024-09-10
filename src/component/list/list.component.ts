import { Component, EventEmitter, Input, Output, ViewEncapsulation } from "@angular/core";

@Component({
  selector: 'app-list',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{
  
  // Add a property to store the notes value if needed
  notes: string = '';

  // Update any methods to handle the notes value if necessary

}