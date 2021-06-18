import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  title = 'Coucou';
  welcomeMessage = 'Welcome Message!'

  gardenFruit = [
    {title: 'Strawberry'},
    {title: 'Raspberry'},
    {title: 'Apple'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
