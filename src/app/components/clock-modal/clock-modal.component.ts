import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-clock-modal',
  templateUrl: './clock-modal.component.html',
  styleUrls: ['./clock-modal.component.css']
})
export class ClockModalComponent implements OnInit {

  constructor(
    public modalRef: MatDialogRef<ClockModalComponent>,
    @Inject(MAT_DIALOG_DATA) public modalData: any
  ) 
  { }

  ngOnInit() {
  }

  closeModal() {
    this.modalRef.close();
  }

}
