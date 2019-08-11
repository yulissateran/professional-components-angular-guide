import { Component, OnInit, Input, ContentChild, HostBinding } from '@angular/core';
import { InputRefDirective } from '../../directives/input-ref/input-ref.directive';

@Component({
  selector: 'fa-input',
  templateUrl: './fa-input.component.html',
  styleUrls: ['./fa-input.component.scss']
})
export class FaInputComponent implements OnInit {
  @Input() icon: string;
  @ContentChild(InputRefDirective,{static: false}) input: InputRefDirective;
  @HostBinding("class.focus")
  get focus() {
    return this.input ? this.input.focus : false;
  }
  constructor() { }

  ngOnInit() { }

  get classes() {
    const cssClasses = {
      fa: true
    };
    cssClasses['fa-' + this.icon] = true;
    return cssClasses;
  }

}
