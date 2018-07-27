import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sort'
})
export class SortPipe implements PipeTransform {

    transform(value: any, propName: string, order: string): any {
        return value.sort((a, b) => {
            if (a[propName] > b[propName]) {
                if (order === 'asc') {
                    return 1;
                } else {
                    return -1;
                }
            } else {
                if (order === 'asc') {
                    return -1;
                } else {
                    return 1;
                }
            }

        });
    }

}
