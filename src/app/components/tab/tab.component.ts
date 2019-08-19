import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tab } from "./tab.interface";
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit, Tab {

  @Input() title:string;
  @Output() onClick:EventEmitter<void> = new EventEmitter<void>();
  public isActive:boolean = false;

  ngOnInit() {
  }

  clickTabContent(){
    this.onClick.emit();
  }
}
