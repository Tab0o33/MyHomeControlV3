import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-current-measures',
  templateUrl: './current-measures.component.html',
  styleUrls: ['./current-measures.component.scss']
})
export class CurrentMeasuresComponent implements OnInit, OnDestroy {

  selectedTheme: string;
  selectedThemeSubscription: Subscription;

  currentMeasuresConfig = [
    { label: 'Luminosity', value: 'Sombre', icon: 'wb_sunny', color: 'warning' },
    { label: 'Temperature', value: '24°C', icon: 'fireplace', color: 'danger' },
    { label: 'Pressure', value: '1013,25hPa', icon: 'speed', color: 'secondary' },
    { label: 'Humidity', value: '48%', icon: 'opacity', color: 'primary' },
    { label: 'Movement', value: 'Oui', icon: 'pets', color: 'success' }
  ];

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.selectedThemeSubscription = this.themeService.selectedThemeSubject.subscribe(
      (selectedTheme: string) => {
        this.selectedTheme = selectedTheme;
      }
    );
    this.themeService.emitSelectedThemeSubject();
  }

  getTitleColor(): string {
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

  ngOnDestroy(): void {
    this.selectedThemeSubscription.unsubscribe();
  }

}
