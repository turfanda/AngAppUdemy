
import { Component } from '@angular/core';

@Component({
    selector: 'app-practice2',
    templateUrl: './practice2.component.html',
})
export class Practice2Component {

    name='ali';

    action(){
        this.name = '';
    }

}