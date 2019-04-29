import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockDashComponent } from './clock-dash.component';

describe('ClockDashComponent', () => {
  let component: ClockDashComponent;
  let fixture: ComponentFixture<ClockDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
