import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent } from './divider/divider.component';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [NgModule, DividerComponent],
})
export class SharedModule {}
