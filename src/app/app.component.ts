import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ElementsModule } from './elements/elements.module';
import { ElementsHomeComponent } from './elements/elements-home/elements-home.component';
import { ColletionsHomeComponent } from './collections/colletions-home/colletions-home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, RouterModule],
})
export class AppComponent {}
