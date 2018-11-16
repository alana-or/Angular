import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.less']
})
export class WhatWeDoComponent implements OnInit {

  blocks = [
    {
      icon: '01',
      title: 'Lorem ipsum dolor',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolorem provident, sapiente quasi molestiae blanditiis ratione reprehenderit quidem natus.'
    },    
    {
      icon: '02',
      title: 'Lorem ipsum dolor',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolorem provident, sapiente quasi molestiae blanditiis ratione reprehenderit quidem natus.'
    },   
    {
      icon: '03',
      title: 'Lorem ipsum dolor',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolorem provident, sapiente quasi molestiae blanditiis ratione reprehenderit quidem natus.'
    },
    {
      icon: '04',
      title: 'Lorem ipsum dolor',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolorem provident, sapiente quasi molestiae blanditiis ratione reprehenderit quidem natus.'
    },    
    {
      icon: '05',
      title: 'Lorem ipsum dolor',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolorem provident, sapiente quasi molestiae blanditiis ratione reprehenderit quidem natus.'
    },    
    {
      icon: '06',
      title: 'Lorem ipsum dolor',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolorem provident, sapiente quasi molestiae blanditiis ratione reprehenderit quidem natus.'
    },    
    {
      icon: '07',
      title: 'Lorem ipsum dolor',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolorem provident, sapiente quasi molestiae blanditiis ratione reprehenderit quidem natus.'
    },    
    {
      icon: '08',
      title: 'Lorem ipsum dolor',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolorem provident, sapiente quasi molestiae blanditiis ratione reprehenderit quidem natus.'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
