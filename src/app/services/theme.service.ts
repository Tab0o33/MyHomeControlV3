import { Subject } from 'rxjs';

export class ThemeService {

    private selectedTheme = 'dark';
    selectedThemeSubject = new Subject<string>();

    themes = [
        {
            name: 'classic'
        },
        {
            name: 'dark'
        },
        {
            name: 'ironman'
        }
    ];

    emitSelectedThemeSubject(): void {
        this.selectedThemeSubject.next(this.selectedTheme);
    }

    changeSelectedTheme(themeName: string): void {
        this.selectedTheme = themeName;
        this.emitSelectedThemeSubject();
    }
}