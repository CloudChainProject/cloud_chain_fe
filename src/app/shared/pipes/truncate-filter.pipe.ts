import {Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'truncate'
})

export class TruncateFilterPipe implements PipeTransform {
    transform(value: any): any {

        for(const item of value){
            if( item.description.length > 48){
                item.description = item.description.substring(0, 48) + '...';
            }
        }

        return value;
    }
}
