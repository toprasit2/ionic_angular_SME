import { Directive, ElementRef, HostListener, Input } from '@angular/core';
 
@Directive({
 selector: '[appHighlight]'
})
export class HighlightDirective {
 
 @Input("appHighlight") status: string;
 
 constructor(private el: ElementRef) { }
 
 @HostListener('mouseenter') onMouseEnter() {
   this.highlight();
 }
 
 @HostListener('mouseleave') onMouseLeave() {
   this.undoHighlight();
 }
 
 private highlight() {
   if(this.status == 'single'){
     this.el.nativeElement.style.backgroundColor = 'lightgreen';
     this.el.nativeElement.style.fontSize = '50px';
   }else if(this.status == 'married'){
     this.el.nativeElement.style.backgroundColor = 'pink';
     this.el.nativeElement.style.fontSize = '50px';
   }
 }
 
 private undoHighlight() {
   this.el.nativeElement.style.backgroundColor = null;
   this.el.nativeElement.style.fontSize = '20px';
 }

}