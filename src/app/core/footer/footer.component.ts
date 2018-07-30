import { Component, OnInit, ViewChild } from '@angular/core';
import { DropdownDirective } from '../../shared/dropdown.directive';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
 isOpen=false;
  constructor() { }

  ngOnInit() {
  }

  test(event) {
    this.isOpen = !this.isOpen;
  }

}
