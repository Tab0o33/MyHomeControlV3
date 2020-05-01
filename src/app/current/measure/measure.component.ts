import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-measure',
  templateUrl: './measure.component.html',
  styleUrls: ['./measure.component.scss']
})
export class MeasureComponent implements OnInit {

  @Input() label: string;
  @Input() value: string;
  @Input() icon: string;
  @Input() color: string;

  constructor() { }

  ngOnInit(): void {
  }

}
