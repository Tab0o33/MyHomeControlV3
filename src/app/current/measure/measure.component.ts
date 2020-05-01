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
  @Input() selectedTheme: string;

  constructor() { }

  ngOnInit(): void {
  }

  getBGColor(): string {
    if (this.selectedTheme === 'classic') {
      return 'bg-white';
    } else if (this.selectedTheme === 'dark') {
      return 'bg-darkBlue';
    } else if (this.selectedTheme === 'ironman') {
      return 'bg-blueIronMan';
    } else {
      return 'bg-white';
    }
  }

  getLeftBarColor(): string {
    if (this.selectedTheme === 'classic') {
      return 'bg-' + this.color;
    } else if (this.selectedTheme === 'dark') {
      return 'bg-' + this.color;
    } else if (this.selectedTheme === 'ironman') {
      return 'bg-none';
    } else {
      return 'bg-' + this.color;
    }
  }

  getLabelColor(): string {
    if (this.selectedTheme === 'classic') {
      return 'text-' + this.color;
    } else if (this.selectedTheme === 'dark') {
      return 'text-' + this.color;
    } else if (this.selectedTheme === 'ironman') {
      return 'text-light';
    } else {
      return 'text-' + this.color;
    }
  }

  getValueColor(): string {
    if (this.selectedTheme === 'classic') {
      return 'text-dark';
    } else if (this.selectedTheme === 'dark') {
      return 'text-light';
    } else if (this.selectedTheme === 'ironman') {
      return 'text-light';
    } else {
      return 'text-dark';
    }
  }

  getIconColor(): string {
    if (this.selectedTheme === 'classic') {
      return 'md-inactive';
    } else if (this.selectedTheme === 'dark') {
      return 'md-light';
    } else if (this.selectedTheme === 'ironman') {
      return 'md-light';
    } else {
      return 'md-inactive';
    }
  }

}
