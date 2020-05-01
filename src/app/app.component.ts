import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

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
      return 'bg-light';
    } else if (this.selectedTheme === 'dark') {
      return 'bg-darkBlue';
    } else if (this.selectedTheme === 'ironman') {
      return 'bg-blueIronMan';
    } else {
      return 'bg-light';
    }
  }

  ngOnDestroy(): void {
    this.selectedThemeSubscription.unsubscribe();
  }

}
