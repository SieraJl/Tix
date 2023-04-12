import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingOneTableComponent } from './standing-one-table.component';

describe('StandingOneTableComponent', () => {
  let component: StandingOneTableComponent;
  let fixture: ComponentFixture<StandingOneTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandingOneTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandingOneTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
