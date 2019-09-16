import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { IConfig } from 'src/app/store/models/iconfig';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

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
  ampmStyle: any;
  config$: Observable<IConfig>;

  constructor(
    private store: Store<IConfig>,
    private sanitizer: DomSanitizer
  ) {
    this.config$ = this.store.pipe(
      select('config')
    );
    this.subscription.add(
      this.config$.subscribe(p=>{
        this.ampmStyle = {
          color: p.digitalAMPMStroke
        };
        this.digitalStyle = this.sanitizer.bypassSecurityTrustStyle(`
          font-size: ${40 + 12 * p.zoomLevel}px;
          width: ${160 + 80 * p.zoomLevel}px;
          border-color: ${p.digitalBorder};
          background: linear-gradient(45deg, ${p.digitalBackground}, ${p.digitalGradient});
          color: ${p.digitalTextStroke}
        `);
        console.log("style", this.digitalStyle)
      })
    );
  }

  ngOnInit() {}

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
