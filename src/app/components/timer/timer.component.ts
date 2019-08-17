import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  @Output() onComplete = new EventEmitter<void>();
  @Input() init: number = 20;


  private countdownTimeRef: any = null;
  public countdown: number = 0;

  constructor() {}

  ngOnInit() {
    this.startCountdown();
  }

  ngOnDestroy(): void {
    this.clearTimeout();
  }

  startCountdown() {
    if (this.init) {
      this.clearTimeout();
      this.countdown = this.init;
      this.doCountdown();
    }
  }



  doCountdown() {
    this.countdownTimeRef = setTimeout(() => {
      this.countdown = this.countdown - 1;
      this.processCountdown();
    }, 1000);
  }

  processCountdown() {
    if (this.countdown === 0) {
      this.onComplete.emit();
    } else {
      this.doCountdown();
    }
  }

  private clearTimeout() {
    if (this.countdownTimeRef) {
      clearTimeout(this.countdownTimeRef);
      this.countdownTimeRef = null;
    }
  }
}
