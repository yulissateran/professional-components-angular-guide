import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';



@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit, OnChanges {
  @Input() time: string;
  public minutes: string = '00';
  public seconds: string = '00';
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    if(changes.time){
      const time = changes.time.currentValue ; 
      const minutes = Math.trunc(time / 60);
      const seconds = time - minutes * 60;
      this.minutes = ('0' + minutes).substr(-2);
      this.seconds = ('0' + seconds).substr(-2);
    }
  }

}
