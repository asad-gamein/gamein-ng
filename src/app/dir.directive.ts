import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDir]'
})
export class DirDirective {

  constructor(el:ElementRef) { 

    el.nativeElement.style.color="red";
  }

}
