import { NgModule } from '@angular/core';
import { KoDirectivesModule } from './directives/directives';
  
const modules = [
  KoDirectivesModule
];

const services = [
];
@NgModule({
  declarations: [modules],
  imports: [
  ],
  exports: [modules]
})
export class KylinnoModule { }
