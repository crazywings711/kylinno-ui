import { NgModule } from '@angular/core';
import { KoIfOnDomDirective } from './ko-if-on-dom/ko-if-on-dom.directive';
import { KoLinkInNewWindowDirective } from './ko-link/ko-link.directive';

@NgModule({
    declarations: [
        KoIfOnDomDirective,
        KoLinkInNewWindowDirective
    ],
    imports: [],
    exports: [
        KoIfOnDomDirective,
        KoLinkInNewWindowDirective
    ]
})
export class KoDirectivesModule {
}
