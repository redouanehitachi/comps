import { Component } from '@angular/core';
import { PlaceholderComponent } from '../placeholder/placeholder.component';
import { DividerComponent } from "../../shared/divider/divider.component";
import { SegmentComponent } from "../segment/segment.component";

@Component({
    selector: 'app-elements-home',
    standalone: true,
    templateUrl: './elements-home.component.html',
    styleUrl: './elements-home.component.css',
    imports: [PlaceholderComponent, DividerComponent, SegmentComponent]
})
export class ElementsHomeComponent {}
