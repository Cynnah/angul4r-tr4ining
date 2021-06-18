import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  title = 'Coucou';
  welcomeMessage = 'Welcome Message!';
  newColor = 'white';
  gardenFruit = [
    {title: 'Strawberry'},
    {title: 'Raspberry'},
    {title: 'Apple'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  updateColor() {
    console.log('Update Color!!')
    this.newColor = 'salmon';
  }

  anotherColor() {
    this.newColor = 'red';
  }

}
