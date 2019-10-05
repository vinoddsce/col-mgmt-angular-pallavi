import {
    Directive, ElementRef, Renderer,
    HostListener, HostBinding, Input
} from '@angular/core';


@Directive({
    selector: '[changeBgColor]'
})
class ChangeBgColorDirective {

    @HostBinding('style.color')
    color: string;

    @Input()
    defaultColor: string;

    constructor(private ref: ElementRef, private ren: Renderer) {
        this.changeBgColor();
    }

    changeBgColor() {
        this.ren.setElementStyle(this.ref.nativeElement, 'text-align', 'center');
        this.color = this.defaultColor;
    }

    @HostListener('mouseenter')
    mouseEnter() {
        this.ren.setElementStyle(this.ref.nativeElement, 'background-color', 'yellow');
        // this.ren.setElementStyle(this.ref.nativeElement, 'color', 'white');
        this.color = '#369';
    }

    @HostListener('mouseleave')
    mouseExit() {
        this.ren.setElementStyle(this.ref.nativeElement, 'background-color', '#369');
        // this.ren.setElementStyle(this.ref.nativeElement, 'color', 'white');
        // this.color = 'white';
        this.color = this.defaultColor;
    }
}

export default ChangeBgColorDirective;



