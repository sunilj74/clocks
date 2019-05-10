import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { TZMASTER } from 'src/app/services/timezonedata';
import { Store } from '@ngrx/store';
import { IConfig } from 'src/app/store/models/iconfig';
import { AddClock } from 'src/app/store/actions/clock.actions';
import { lookupValidator } from 'src/app/validators/lookup';

@Component({
  selector: 'app-clock-add-form',
  templateUrl: './clock-add-form.component.html',
  styleUrls: ['./clock-add-form.component.css']
})
export class ClockAddFormComponent implements OnInit {
  @Output() close = new EventEmitter<true>();
  filteredCities: Observable<string[]>;
  tzName = new FormControl('', [lookupValidator(TZMASTER, 'tz')]);
  tzData: string[];

  constructor(private store: Store<IConfig>) { 
  }

  ngOnInit() {
    this.tzData = TZMASTER.map(p=>p.tz);
    this.filteredCities = this.tzName
          .valueChanges
          .pipe(
            startWith(''),
            map(p=>{
              if(p=="") return [];
              let filterValue = p.toLowerCase()
              return this.tzData.filter(q=>q.toLowerCase().indexOf(filterValue)!=-1);
            })
          );
  }

  addTimeZone(){
    if(this.tzName.valid){
      this.store.dispatch(new AddClock(this.tzName.value));
      this.close.emit(true);
    }
  }

}
