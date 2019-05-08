import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { IConfig } from 'src/app/store/models/iconfig';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: "clock-face-digital",
  templateUrl: "./clock-face-digital.component.html",
  styleUrls: ["./clock-face-digital.component.css"]
})
export class ClockFaceDigitalComponent implements OnInit, OnDestroy {
  @Input() currentTime: Date;
  @Input() timezone: any;
  private subscription: Subscription = new Subscription();
  digitalStyle: any;
  config$: Observable<IConfig>;

  constructor(private store: Store<IConfig>) {
    this.config$ = this.store.pipe(
      select('config')
    );
    this.subscription.add(
      this.config$.subscribe(p=>{
        this.digitalStyle = {
          fontSize: `${(40 + (12*p.zoomLevel))}px`,
          padding: '30px 30px 30px 30px',
          border: "3px solid slategray"
        };
      })
    );
  }

  ngOnInit() {}

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
