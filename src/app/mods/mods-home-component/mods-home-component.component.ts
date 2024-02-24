import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from '../accordion/accordion.component';

@Component({
  selector: 'app-mods-home-component',
  standalone: true,
  templateUrl: './mods-home-component.component.html',
  styleUrl: './mods-home-component.component.css',
  imports: [ModalComponent, CommonModule, AccordionComponent],
})
export class ModsHomeComponentComponent {
  modalOpen = false;
  items = [
    { title: 'Why the sky blue', content: 'The sky is blue because' },
    { title: 'What the Orange test like', content: 'The sky is blue because' },
    { title: 'What the color is that cat', content: 'The sky is blue because' },
  ];
  onclick() {
    this.modalOpen = !this.modalOpen;
  }
}
