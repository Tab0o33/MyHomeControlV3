import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from '../../services/theme.service';
import { CurrentMeasuresService } from '../current-measures.service';

@Component({
  selector: 'app-current-measures',
  templateUrl: './current-measures.component.html',
  styleUrls: ['./current-measures.component.scss']
})
export class CurrentMeasuresComponent implements OnInit, OnDestroy {

  selectedTheme: string;
  selectedThemeSubscription: Subscription;

  currentMeasuresConfig = [];
  currentMeasuresSubscription: Subscription;


  constructor(
    private themeService: ThemeService,
    private currentMeasuresService: CurrentMeasuresService
  ) { }

  ngOnInit(): void {
    this.selectedThemeSubscription = this.subscribeToSelectedTheme();
    this.themeService.emitSelectedThemeSubject();

    this.currentMeasuresSubscription = this.subscribeToCurrentMeasures();
    this.currentMeasuresService.getCurrentMeasuresConfig();
  }

  subscribeToSelectedTheme(): Subscription {
    return this.themeService.selectedThemeSubject.subscribe(
      (selectedTheme: string) => {
        this.selectedTheme = selectedTheme;
      }
    );
  }

  subscribeToCurrentMeasures(): Subscription {
    return this.currentMeasuresService.currentMeasuresSubject.subscribe(
      (currentMeasuresConfig: any[]) => {
        this.currentMeasuresConfig = currentMeasuresConfig;
      }
    );
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
    this.currentMeasuresSubscription.unsubscribe();
  }

}
