import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';


@Directive({
  selector: '[appNotification]'
})
export class NotificationDirective {

  @Input() errorMessage;

  constructor(private renderer : Renderer2, private el: ElementRef) { }


  @HostListener('mouseover')   onMouseOver() {


    window.alert(this.errorMessage);

    // const div = this.renderer.createElement('div');
    // const text = this.renderer.createText(this.errorMessage);
    //
    // this.renderer.appendChild(div, text);
    // this.renderer.appendChild(this.el.nativeElement, div);


  }

  @HostListener('onmouseleave') onMouseOut() {






  }

}
