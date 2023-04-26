import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredirComponent } from './predir.component';

describe('PredirComponent', () => {
  let component: PredirComponent;
  let fixture: ComponentFixture<PredirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
