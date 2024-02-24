import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css',
})
export class AccordionComponent {
  @Input() items: any = [];
  openedItemIndex = 0;
  onClick(index: number) {
    if (index === this.items) {
      console.log('already open');
      this.openedItemIndex = -1;
    } else {
      this.openedItemIndex = index;
    }
  }
}
