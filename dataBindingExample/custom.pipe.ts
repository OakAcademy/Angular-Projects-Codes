import { Pipe , PipeTransform } from '@angular/core'


@Pipe({
    name:'custompipe'
})
export class CustomPipe implements PipeTransform{
    transform (value:string){
        if(!value) return null;
        return value.substr(0,30)
    }

}