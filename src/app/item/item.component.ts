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
  selectedFruit = null;

  gardenFruits = [
    {title: 'Strawberry'},
    {title: 'Raspberry'},
    {title: 'Apple'},
    {title: 'Peach'},
    {title: 'Apricot'},
    {title: 'Watermelon'},
    {title: 'Melon'},
    {title: 'Grape'}
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

  selectFruit(fruit) {
    console.log('selected fruit', fruit);
    this.selectedFruit = fruit;
  }
}
