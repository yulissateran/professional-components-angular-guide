import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
  OnChanges,
  SimpleChanges
} from "@angular/core";

@Component({
  selector: "app-countdown",
  templateUrl: "./countdown.component.html",
  styleUrls: ["./countdown.component.scss"]
})
export class CountdownComponent implements OnInit, OnDestroy, OnChanges {
  @Input() init: number;
  @Input() counter: number = 0;
  @Output() onDecrease = new EventEmitter<number>();
  @Output() onComplete = new EventEmitter<void>();
  private countdownTimeRef: any = null;
  constructor() {}

  ngOnInit() {
    this.startCountdown();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.init){
    console.log('upsdated inp', changes.init.currentValue);

      this.startCountdown();
    }
  }
  ngOnDestroy(): void {
    this.clearTimeout();
  }

  startCountdown() {
    if (this.init) {
      this.clearTimeout();
      this.counter = this.init;
      this.doCountdown();
    }
  }

  private clearTimeout() {
    if (this.countdownTimeRef) {
      clearTimeout(this.countdownTimeRef);
      this.countdownTimeRef = null;
    }
  }

  doCountdown() {
    this.countdownTimeRef = setTimeout(() => {
      this.counter = this.counter - 1;
      this.processCountdown();
    }, 1000);
  }

  processCountdown() {
    this.onDecrease.emit(this.counter);
    if (this.counter == 0) {
      this.onComplete.emit();
    } else {
      this.doCountdown();
    }
  }
}
