import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, ChangeDetectorRef,
   ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { TimerService } from './timer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  providers: [TimerService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // encapsulation: ViewEncapsulation.Native
})
export class TimerComponent implements OnInit {

  @Output() onComplete = new EventEmitter<void>();
  @Input() init: number = 0;
  private countdownEndSubscripton:Subscription= null;
  private countdownSubscripton:Subscription= null;
  private countdown:number= 0;
  
  constructor(public timer: TimerService, private changeDetector: ChangeDetectorRef) {}

  ngOnInit() {
    this.timer.restartCountdown(this.init);

    this.countdownEndSubscripton = this.timer.countdownEnd$
    .subscribe(()=> this.onComplete.emit());

    this.countdownSubscripton =  this.timer.countdown$
    .subscribe((data)=>  {
      this.countdown = data;
      this.changeDetector.markForCheck();
    });
  }

  ngOnDestroy(){
    this.timer.destroy();
    this.countdownEndSubscripton.unsubscribe();
    this.countdownSubscripton.unsubscribe();
  }

  get progress(){
    console.log('get progress');
    return (this.init-(this.countdown))/this.init*100
  }

}
