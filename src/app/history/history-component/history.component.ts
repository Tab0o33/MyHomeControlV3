import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { ThemeService } from 'src/app/services/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HistoryComponent implements OnInit {

  @ViewChild('historyTabs', { static: false }) historyTabs: TabsetComponent;

  measureTypeList = [
    { label: 'Luminosity', customClass: 'bg-darkBlue' },
    { label: 'Temperature', customClass: 'bg-darkBlue' },
    { label: 'Pressure', customClass: 'bg-darkBlue' },
    { label: 'Humidity', customClass: 'bg-darkBlue' },
    { label: 'Movement', customClass: 'bg-darkBlue' }
  ];

  selectedTheme: string;
  selectedThemeSubscription: Subscription;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.selectedThemeSubscription = this.themeService.selectedThemeSubject.subscribe(
      (selectedTheme: string) => {
        this.selectedTheme = selectedTheme;
      }
    );
    this.themeService.emitSelectedThemeSubject();
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

  getThemeTabClass(): string {
    if (this.selectedTheme === 'classic') {
      return 'white';
    } else if (this.selectedTheme === 'dark') {
      return 'darkBlue';
    } else if (this.selectedTheme === 'ironman') {
      return 'blueIronMan';
    } else {
      return 'white';
    }
  }

  getdisplayedMeasuresType(): string {
    if (this.historyTabs) {
      if (this.historyTabs.tabs[0].active === true) {
        return 'luminosity';
      } else if (this.historyTabs.tabs[1].active === true) {
        return 'temperature';
      } else if (this.historyTabs.tabs[2].active === true) {
        return 'pressure';
      } else if (this.historyTabs.tabs[3].active === true) {
        return 'humidity';
      } else if (this.historyTabs.tabs[4].active === true) {
        return 'movement';
      } else {
        return 'luminosity';
      }
    } else {
      return 'luminosity';
    }
  }

}
