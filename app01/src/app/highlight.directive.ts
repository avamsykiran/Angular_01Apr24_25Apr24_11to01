import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  oldBgColor:string;

  @Input()
  appHighlight!:string;

  constructor(private ele:ElementRef) {
    this.oldBgColor=this.ele.nativeElement.style.backgroundColor;
  }

  ngOnChanges(){
    if(!this.appHighlight){
      this.appHighlight="#00ff00";
    }
  }

  @HostListener("mouseover")
  applyHighLightColors(){
    this.ele.nativeElement.style.backgroundColor=this.appHighlight;
  }

  @HostListener("mouseleave")
  applyOriginalColors(){
    this.ele.nativeElement.style.backgroundColor=this.oldBgColor;
  }
}
