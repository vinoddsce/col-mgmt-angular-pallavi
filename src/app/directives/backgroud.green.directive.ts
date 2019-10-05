import { OnInit, Directive, Renderer2, ElementRef } from "@angular/core";

@Directive(
    {
        selector: '[backgroudGreen]'
    }
)
class BackgroudGreenDirective implements OnInit {

    constructor(private renderer: Renderer2, private ref: ElementRef) {
    }

    ngOnInit(): void {
        this.renderer.addClass(this.ref.nativeElement, 'green');
    }
}

export default BackgroudGreenDirective;
