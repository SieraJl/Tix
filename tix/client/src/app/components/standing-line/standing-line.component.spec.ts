import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingLineComponent } from './standing-line.component';

describe('StandingLineComponent', () => {
  let component: StandingLineComponent;
  let fixture: ComponentFixture<StandingLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandingLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandingLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
