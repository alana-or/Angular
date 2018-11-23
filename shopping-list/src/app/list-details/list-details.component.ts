import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.css']
})
export class ListDetailsComponent implements OnInit {

  constructor() { }
  
  titleList: string = 'Shopping 1';

  listDetails: any = [
    {
      id: 1,
      product: 'Perfume',
      price: 80.00,
      quant: 1
    },    
    {
      id: 2,
      product: 'Soap',
      price: 0.94,
      quant: 10
    },    
    {
      id: 3,
      product: 'Comb',
      price: 12.50,
      quant: 1
    }
  ]

  ngOnInit() {
  }

}
