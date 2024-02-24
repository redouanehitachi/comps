import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColletionsHomeComponent } from './colletions-home.component';

describe('ColletionsHomeComponent', () => {
  let component: ColletionsHomeComponent;
  let fixture: ComponentFixture<ColletionsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColletionsHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColletionsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
