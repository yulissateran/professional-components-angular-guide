import { Injectable } from "@angular/core";
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class TimerService {

  private countdownTimeRef: any = null;
  public paused:boolean = true;
  private init: number = 0;
  private countdownEndSubject = new Subject<void>();//
  public countdownEnd$ = this.countdownEndSubject.asObservable();//
  private countdownSource = new BehaviorSubject<number>(0);
  public countdown$ = this.countdownSource.asObservable();

    constructor(){

    }

    destroy(): void {
        this.clearTimeout();
      }
    
      restartCountdown(init?) {
          if(init)this.init = init;
        if (this.init ) {
          this.paused = true;
          this.clearTimeout();
          this.countdownSource.next(this.init);
        }
      }
    
      toogleCountdown(){
        this.paused = !this.paused;
        if(this.paused === false){
          this.doCountdown();
        } else {
          this.clearTimeout()
        }
      }
    
    
    
      doCountdown() {
        this.countdownTimeRef = setTimeout(() => {
          this.countdownSource.next(this.countdownSource.getValue() - 1);
          this.processCountdown();
        }, 1000);
      }
    
      processCountdown() {
        if (this.countdownSource.getValue() <= 0) {
            this.countdownEndSubject.next()
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