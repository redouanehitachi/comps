import { Component } from '@angular/core';
import { StatisticsComponent } from '../statistics/statistics.component';
import { ItemListComponent } from "../item-list/item-list.component";

@Component({
    selector: 'app-views-homecomponent',
    standalone: true,
    templateUrl: './views-homecomponent.component.html',
    styleUrl: './views-homecomponent.component.css',
    imports: [StatisticsComponent, ItemListComponent]
})
export class ViewsHomecomponentComponent {
  stats = [
    { value: 22, label: '# of Users' },
    { value: 900, label: 'Revenue' },
    { value: 50, label: 'Reviews' },
  ];
  items = [
    {
      image: '/assets/images/couch.jpeg',
      title: 'Couch',
      description: 'This is fantastic couch to sit on',
    },
    {
      image: '/assets/images/dresser.jpeg',
      title: 'Dresser',
      description: 'This is fantastic dresser to put items in',
    },
  ];
}
