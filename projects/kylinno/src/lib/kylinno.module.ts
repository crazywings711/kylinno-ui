import { NgModule } from '@angular/core';
import { KoDirectivesModule } from './directives/directives';
  
const modules = [
  KoDirectivesModule
];

const services = [
];
@NgModule({
  exports: [...modules],
  imports: [...modules]
})
export class KylinnoModule { }
