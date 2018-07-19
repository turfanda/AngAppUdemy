import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styles: []
})
export class EvenComponent implements OnInit, OnChanges {

  @Input() value: number;
  @Input() clear: boolean;
  array: number[] = [];
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    if (this.value % 2 === 0) {
      this.array.push(this.value);
    }
    if (this.clear) {
      this.array = [];
    }
  }
}
