import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styles: []
})
export class OddComponent implements OnInit, OnChanges {

  @Input() value: number;
  @Input() clear: boolean;
  array: number[] = [];
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    if (this.value % 2 === 1) {
      this.array.push(this.value);
    }
    if (this.clear) {
      this.array = [];
    }
  }

}
