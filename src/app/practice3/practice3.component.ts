
import { Component } from '@angular/core';

@Component({
    selector: 'app-practice3',
    templateUrl: './practice3.component.html',
    styles: [`
    .test{
        color:red;
    }
    `]
})
export class Practice3Component {

    showHide = true;
    logs: number[] = [];

    action(event: Event) {
        this.showHide = !this.showHide;
        this.logs.push(event.timeStamp);
    }


}
