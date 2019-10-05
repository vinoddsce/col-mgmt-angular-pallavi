import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[showLogo]'
})
export class ShowLogoDirective {

    constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

    @Input()
    set showLogo(condition: boolean) {
        console.log("condition: ", condition);
        console.log("templateRef: ", this.templateRef);
        console.log("condition: ", this.vcRef);
        if (condition) {
            this.vcRef.createEmbeddedView(this.templateRef);
        } else {
            this.vcRef.clear();
        }
    }
}
