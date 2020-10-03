import { Component, OnInit, Input, ElementRef, Renderer2, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  @Input() white : boolean;
  @Input() count : number = 0;
  @Output() itemClicked: EventEmitter<number> =   new EventEmitter();
  handleClick(){
    /*will emit id of the clicked box*/
    const componentId = (this.el.nativeElement.id)
    this.itemClicked.emit(componentId);
    /* Increments counterfo the clicks have been made*/
    return this.count++;  
  }
    
  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  }
  /* To choose color for the box*/
  customColor(){
    return this.white? {backgroundColor :'white', color:'black'} :  {backgroundColor :'black', color:'white'}
  }
}
