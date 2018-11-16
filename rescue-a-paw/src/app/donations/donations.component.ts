import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.less']
})
export class DonationsComponent implements OnInit {
  
  blocks = [
    {
      img: '../assets/img/food.jpg',
      alt: 'dogs food',
      price: 'R$ 60,00',
      title: 'DOG FOOD',
      content: 'Nulla dolorem provident, sapiente quasi molestiae blanditiis ratione reprehenderit quidem natus.'
    },
    {
      img: '../assets/img/food.jpg',
      alt: 'dogs food',
      price: 'R$ 60,00',
      title: 'DOG FOOD',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit amet consectetur .'
    },  
    {
      img: '../assets/img/food.jpg',
      alt: 'dogs food',
      price: 'R$ 60,00',
      title: 'DOG FOOD',
      content: 'Nulla dolorem provident, sapiente quasi molestiae blanditiis ratione reprehenderit quidem natus.'
    },  
    {
      img: '../assets/img/food.jpg',
      alt: 'dogs food',
      price: 'R$ 60,00',
      title: 'DOG FOOD',    
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit amet consectetur .'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
