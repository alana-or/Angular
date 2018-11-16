import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal-blocks',
  templateUrl: './principal-blocks.component.html',
  styleUrls: ['./principal-blocks.component.less']
})
export class PrincipalBlocksComponent implements OnInit {

  blocks = [
    {
      img: '../assets/img/bathing.jpg',
      alt: 'bathing a dog',
      title: 'Bathing',content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolorem provident, sapiente quasi molestiae blanditiis ratione reprehenderit quidem natus.'
    },    
    {
      img: '../assets/img/playing.jpg',
      alt: 'a dog playing',
      title: 'Playing',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolorem provident, sapiente quasi molestiae blanditiis ratione reprehenderit quidem natus.'
    },    
    {
      img: '../assets/img/eating.jpg',
      alt: 'a dog eating',
      title: 'Eating',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolorem provident, sapiente quasi molestiae blanditiis ratione reprehenderit quidem natus.'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
