import { Component } from '@angular/core';

@Component({
  selector: 'app-component1',
  standalone: true,
  imports: [],
  templateUrl: './component1.component.html',
  styleUrl: './component1.component.css'
})
export class Component1Component 
{
  public TechnologyNames  = {
    "Book1" : "Angular", 
    "Book2" : "Node JS", 
    "Book3" : "Android", 
    "Book4" : "Big Data", 
    "Book5" : "Artificial Intelligence"};

}
