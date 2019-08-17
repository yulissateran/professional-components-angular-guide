import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {
@Input() init:number; 
@Input() counter: number = 0;
@Output() onDecrease = new EventEmitter<number>();
@Output() onComplete = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
    this.startCountDown();
  }
  startCountDown(){
    if(this.init){
      this.counter = this.init;
      this.doCountdown()
    }
  }

  doCountdown(){
    setTimeout(()=>{
      this.counter = this.counter - 1;
      this.processCountdown();
    },1000);
  }

  processCountdown(){
    //emit
    this.onDecrease.emit(this.counter);
    
    if(this.counter == 0){
      this.onComplete.emit();
       console.log('end');
    } else {
      this.doCountdown();
    }
  }

}
