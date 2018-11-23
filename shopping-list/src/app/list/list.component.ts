import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  list: any = [
    {
      id: 1,
      title: 'Shopping 1',
      money: 50.00,
      date: new Date(2018, 3, 11),
      total: 40.00
    },
    {
      id: 2,
      title: 'Shopping 2',
      money: 60.00,
      date: new Date(2018, 3, 23),
      total: 55.00
    },
    {
      id: 3,
      title: 'Shopping 3',
      money: 20.00,
      date: new Date(2018, 3, 30),
      total: 15.00
    }
  ]

  ngOnInit() {
  }

}
