import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  themes: any[];

  selectedTheme: string;
  selectedThemeSubscription: Subscription;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themes = this.themeService.themes;

    this.selectedThemeSubscription = this.themeService.selectedThemeSubject.subscribe(
      (selectedTheme: string) => {
        this.selectedTheme = selectedTheme;
      }
    );
    this.themeService.emitSelectedThemeSubject();

  }

  getColor() {
    if (this.selectedTheme === 'classic') {
      return 'primary';
    } else if (this.selectedTheme === 'dark') {
      return 'fullDark';
    } else if (this.selectedTheme === 'ironman') {
      return 'dark';
    } else {
      return 'primary';
    }
  }

  switchToTheme(name: string): void {
    this.themeService.changeSelectedTheme(name);
  }

  ngOnDestroy() {
    this.selectedThemeSubscription.unsubscribe();
  }

}
