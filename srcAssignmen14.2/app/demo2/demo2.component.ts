import { Component } from '@angular/core';

@Component({
  selector: 'app-demo2',
  standalone: true,
  imports: [],
  templateUrl: './demo2.component.html',
  styleUrl: './demo2.component.css'
})
export class Demo2Component 
{
  public BookNames : string[] = ["The C Programming Language", "Eloquent Javascript", "Ng-the complete book on angular"];

}
