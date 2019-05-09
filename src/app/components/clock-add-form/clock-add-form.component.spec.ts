import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { ClocksMaterialModule } from "../../clocksmaterial.module";


import { ClockAddFormComponent } from './clock-add-form.component';

describe('ClockAddFormComponent', () => {
  let component: ClockAddFormComponent;
  let fixture: ComponentFixture<ClockAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockAddFormComponent ],
      imports: [
        ClocksMaterialModule,
        ReactiveFormsModule,
        StoreModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
