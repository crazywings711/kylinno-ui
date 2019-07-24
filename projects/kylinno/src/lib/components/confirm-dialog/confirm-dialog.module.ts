import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { KoConfirmDialogComponent } from './confirm-dialog.component';


@NgModule({
    declarations: [
        KoConfirmDialogComponent
    ],
    imports: [
        MatDialogModule,
        MatButtonModule
    ],
    entryComponents: [
        KoConfirmDialogComponent
    ],
})
export class KoConfirmDialogModule {
}
