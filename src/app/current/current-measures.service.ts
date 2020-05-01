import { Subject, of } from 'rxjs';

export class CurrentMeasuresService {

    currentMeasuresSubject = new Subject<any[]>();

    private currentMeasuresConfig = [];

    emitCurrentMeasuresSubject(): void {
        this.currentMeasuresSubject.next(this.currentMeasuresConfig.slice());
    }

    getCurrentMeasuresConfig(): void {
        const currentMeasuresConfig = [
            { label: 'Luminosity', value: 'Sombre', icon: 'wb_sunny', color: 'warning' },
            { label: 'Temperature', value: '24°C', icon: 'fireplace', color: 'danger' },
            { label: 'Pressure', value: '1013,25hPa', icon: 'speed', color: 'secondary' },
            { label: 'Humidity', value: '48%', icon: 'opacity', color: 'primary' },
            { label: 'Movement', value: 'Oui', icon: 'pets', color: 'success' }
        ];
        of(currentMeasuresConfig).subscribe(
            (response) => {
                this.currentMeasuresConfig = response;
                this.emitCurrentMeasuresSubject();
            },
            (error) => {
                console.log('Erreur ! : ' + error);
            }
        );
    }
}
