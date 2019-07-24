import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KylinnoModule } from 'projects/kylinno/src/lib/kylinno.module';
import { MatDialogModule } from '@angular/material';
import { KoConfirmDialogComponent } from 'projects/kylinno/src/lib/components/confirm-dialog/confirm-dialog.component';
import { KoConfirmDialogModule } from 'projects/kylinno/src/lib/components';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatDialogModule,
    KoConfirmDialogModule,
    KylinnoModule
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
