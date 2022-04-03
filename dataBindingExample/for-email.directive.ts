import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appForEmail]'
})
export class ForEmailDirective {

  constructor(private element:ElementRef) 
  {
    

   }
   @HostListener('focus') onFocus(){
    this.element.nativeElement.classList.add('bg-danger')
   }
  @HostListener('blur') onBlur(){
    this.element.nativeElement.classList.remove('bg-danger')
    let value:string=this.element.nativeElement.value;
    if(!value.includes('@')){
      this.element.nativeElement.value=value+'@hotmail.com';
    }

   }

}
