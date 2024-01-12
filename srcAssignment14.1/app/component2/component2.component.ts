import { Component } from '@angular/core';

@Component({
  selector: 'app-component2',
  standalone: true,
  imports: [],
  templateUrl: './component2.component.html',
  styleUrl: './component2.component.css'
})
export class Component2Component 
{
  public BookNames : string[] = ["The C Programming", "Eloquent Javascript", "ng-the complete book on angular"];
}
