import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

  selectedTheme: string;
  selectedThemeSubscription: Subscription;

  config = [
    {icon: 'straighten', label: 'Current measures', link: 'currentMeasures'},
    {icon: 'show_chart', label: 'Analyzes', link: 'analyzes' }
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

  getBGColor() {
    if (this.selectedTheme === 'classic') {
      return 'bg-secondary';
    } else if (this.selectedTheme === 'dark') {
      return 'bg-fullDark';
    } else if (this.selectedTheme === 'ironman') {
      return 'bg-dark';
    } else {
      return 'bg-secondary';
    }
  }

  ngOnDestroy() {
    this.selectedThemeSubscription.unsubscribe();
  }

}
