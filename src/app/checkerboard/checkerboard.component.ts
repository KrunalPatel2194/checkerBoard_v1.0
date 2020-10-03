import { Component, OnInit } from '@angular/core';
import { SquareComponent } from './../square/square.component';
import { Coordinates } from './../coordinates';
@Component({
  selector: 'app-checkerboard',
  templateUrl: './checkerboard.component.html',
  styleUrls: ['./checkerboard.component.css']
})
export class CheckerboardComponent implements OnInit {
  /*To store total number of ids that have been pressed.*/
  itemsClicked =[];
  /*Defines an array of any numbers that have been passed to it from client*/
  arrayOne(n: number): any[] {
    return Array(n);
  }
  /*Decides how many elements we need in a row and column*/
  xy(i): Coordinates{
    return {
      x : i% 8,
      y: Math.floor(i/8)
    }
  }
  /*check its position and decide its color accordingly*/
  isWhite({x,y} : Coordinates){
    return (x+y) % 2 !== 1;
  }
  constructor() { }

  ngOnInit(): void {
  }
  /*To get an id of the box that have been clicked and take its id*/
  boxClicked(componentId:number){
    if(!this.itemsClicked.includes(componentId)){
      this.itemsClicked.push(componentId);
    }
  }
 
}
