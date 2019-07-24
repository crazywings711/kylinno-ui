import { Directive, ElementRef, HostListener, Input, Inject } from '@angular/core';

function getWindow(): any {
    return window;
}

@Directive({ selector: '[ko-link]' })
export class KoLinkInNewWindowDirective {

    @Input('routerLink') link: string;
    constructor(private el: ElementRef) {
    }
    @HostListener('mousedown') onMouseEnter() {
        getWindow().open(this.link || '');
    }
} 