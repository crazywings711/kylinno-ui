import { Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { KoConfirmDialogComponent } from 'projects/kylinno/src/lib/components/confirm-dialog/confirm-dialog.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {


  ngOnInit(): void {
   
  }
  
  title = 'kylinno-ui';

  confirmDialogRef: MatDialogRef<KoConfirmDialogComponent>;
  private _unsubscribeAll: Subject<any>;

  constructor(
    public _matDialog: MatDialog
  ) {
    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  openDialog(): void {
    this.confirmDialogRef = this._matDialog.open(KoConfirmDialogComponent, {
      disableClose: false
    });

    this.confirmDialogRef.componentInstance.confirmMessage = 'Are you sure you want to delete?';

    this.confirmDialogRef.afterClosed().subscribe(result => {
      // if (result) {
      //   this._contactsService.deleteContact(contact);
      // }
      this.confirmDialogRef = null;
    });

  }



  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}
