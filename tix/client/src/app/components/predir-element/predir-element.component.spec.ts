import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredirElementComponent } from './predir-element.component';

describe('PredirElementComponent', () => {
  let component: PredirElementComponent;
  let fixture: ComponentFixture<PredirElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredirElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredirElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
