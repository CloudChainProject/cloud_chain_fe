import {Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'truncateimage'
})

export class TruncateImageFilterPipe implements PipeTransform {
    transform(value: any): any {

        for(const item of value){
            if( item.image.length > 38){
                item.image = item.image.substring(0, 38) + '...';
            }
            if( item.description.length > 38){
                item.description = item.description.substring(0, 38) + '...';
            }
        }

        return value;
    }
}
