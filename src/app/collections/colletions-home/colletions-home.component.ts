import { Component } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { DividerComponent } from '../../shared/divider/divider.component';
import { RouterModule } from '@angular/router';
import { TabsComponent } from "../../collection/tabs/tabs.component";

@Component({
    selector: 'app-colletions-home',
    standalone: true,
    templateUrl: './colletions-home.component.html',
    styleUrl: './colletions-home.component.css',
    imports: [TableComponent, DividerComponent, RouterModule, TabsComponent]
})
export class ColletionsHomeComponent {
  data = [
    { name: 'james', age: 24, job: 'Designer' },
    { name: 'jill', age: 27, job: 'Enginer' },
    { name: 'Elyses', age: 25, job: 'Designer' },
  ];
  headers = [
    {
      key: 'name',
      label: 'Name',
    },
    {
      key: 'age',
      label: 'Age',
    },
    {
      key: 'job',
      label: 'Job',
    },
  ];
}
