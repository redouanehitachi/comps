import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsHomecomponentComponent } from './views-homecomponent.component';

describe('ViewsHomecomponentComponent', () => {
  let component: ViewsHomecomponentComponent;
  let fixture: ComponentFixture<ViewsHomecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewsHomecomponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewsHomecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
