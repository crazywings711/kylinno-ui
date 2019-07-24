import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'ko-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls: ['./confirm-dialog.component.scss']
})
export class KoConfirmDialogComponent {
    public confirmMessage: string;

    /**
     * Constructor
     *
     * @param   dialogRef
     */
    constructor(
        public dialogRef: MatDialogRef<KoConfirmDialogComponent>
    ) {
    }

}
