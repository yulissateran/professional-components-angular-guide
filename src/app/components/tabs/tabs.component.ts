import { Component, OnInit, ContentChild, AfterViewInit, AfterContentInit, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from "../tab/tab.component";
import { Tab } from "../tab/tab.interface";


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, AfterContentInit {

  @ContentChildren(TabComponent)public  tabs:QueryList<TabComponent>;
  private tabClickSubscriptions: any[] = [];

  constructor() { }

  ngOnInit() {}

  ngAfterContentInit(): void {
    this.tabClickSubscriptions = this.tabs
    .map((tab)=> tab.onClick
    .subscribe(()=> console.log(`tab ${tab.title} content clicked`)));
    this.selectTab(this.tabs.first);
  };
 

  ngOnDestroy(){
    if(this.tabClickSubscriptions.length){
      this.tabClickSubscriptions
      .forEach((subscription)=>subscription.unsubscribe())
    }
  }
  
  

  selectTab(tab:Tab) {
    this.tabs.forEach((tab)=>{
      tab.isActive = false;
    });
    tab.isActive = true;
  }
  

}
