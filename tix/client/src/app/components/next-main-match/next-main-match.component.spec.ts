import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextMainMatchComponent } from './next-main-match.component';

describe('NextMainMatchComponent', () => {
  let component: NextMainMatchComponent;
  let fixture: ComponentFixture<NextMainMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextMainMatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextMainMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
