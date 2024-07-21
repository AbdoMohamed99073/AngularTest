import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[Lightboox]'
})
export class LightbooxDirective {

  constructor(elem:ElementRef) { 
  elem.nativeElement.style.border = "2px solid gray";
  }
}
