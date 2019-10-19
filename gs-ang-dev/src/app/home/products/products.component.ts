import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  


  products = [
    {
      img: '../../assets/img/icons/nuts.png',
      title: "Orašasti Plodovi",
      className: "nuts"
    },
    {
      img: '../../assets/img/icons/organic.png',
      title: "Organski Proizvodi",
      className: "organic"
    },    
    {
      img: '../../assets/img/icons/glutenFree.png',
      title: "Bezglutenski program",
      className: 'glutenFree'
    },
    {
      img: '../../assets/img/icons/plant.png',
      title: "Bilje Kapi i Tinkture",
      className: 'plantOil'
    },
    {
      img: '../../assets/img/icons/fruit.png',
      title: "Suvo Voće",
      className: "fruit"
    },
    {
      img: '../../assets/img/icons/cerial.png',
      title: "Žitarice",
      className: "cereals"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
