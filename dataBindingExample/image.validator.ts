import { AbstractControl,ValidationErrors } from "@angular/forms";

export class ImageValidator{
    static isValidExtension(control:AbstractControl):ValidationErrors |null{
        const x=control.value as string;
        if(x.endsWith('.jpg') ||x.endsWith('.png')){
            return null;
        }
        else{
            return{
                wrongExtension:true
            }
        }
    }
}
