import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HyphenatePipe } from './pipes/hyphenate.pipe';



@NgModule({
  declarations: [HyphenatePipe],
  imports: [
    CommonModule
  ],
  exports: [HyphenatePipe]
})
export class CoreModule { }
