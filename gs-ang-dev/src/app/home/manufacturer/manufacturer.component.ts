import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.css']
})
export class ManufacturerComponent implements OnInit {

  manufactures = [
    {
      img: '../../assets/img/granum.jpg'
    },
    {
      img: '../../assets/img/fructus.jpg'
    },
    {
      img: '../../assets/img/revita.png'
    },
    {
      img: '../../assets/img/premier.png',
      title: 'premier'
    },
    {
      img: '../../assets/img/benlian.png'
    },
    {
      img: '../../assets/img/biobella.png'
    },
    {
      img: '../../assets/img/rosa.png'
    },
    {
      img: '../../assets/img/Artfood.png'
    },
    {
      img: '../../assets/img/beyond.jpg'
    },
    {
      img: '../../assets/img/sinefarm.png'
    },
    {
      img: '../../assets/img/Deverra.jpg'
    },
    {
      img: '../../assets/img/sanaterra.png'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
