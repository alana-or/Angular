import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.less']
})

export class SlideComponent implements OnInit {
  
  imagePath = '../assets/img/cachorro.jpg';

  constructor() { }

  ngOnInit() {
  }

}
