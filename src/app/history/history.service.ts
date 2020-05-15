import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/internal/operators';

export class HistoryService {

    constructor() { }

    getHistoryMeasuresFromType$(measuresType: string): Observable<any[]> {

        const luminosityHistoryMeasures = [
            { measureDate: new Date('2019-10-05T18:51Z'), value: 0 }, //
            { measureDate: new Date('2019-10-06T18:52Z'), value: 1 }, //
            { measureDate: new Date('2019-10-07T18:53Z'), value: 2 }, // Mock
            { measureDate: new Date('2019-10-08T18:54Z'), value: 3 }, //
            { measureDate: new Date('2019-10-09T18:55Z'), value: 2 } //
        ];
        const temperatureHistoryMeasures = [
            { measureDate: new Date('2019-10-05T18:51Z'), value: 20 }, //
            { measureDate: new Date('2019-10-06T18:52Z'), value: 26 }, //
            { measureDate: new Date('2019-10-07T18:53Z'), value: 23 }, // Mock
            { measureDate: new Date('2019-10-08T18:54Z'), value: 30 }, //
            { measureDate: new Date('2019-10-09T18:55Z'), value: 15 } //
        ];
        const pressureHistoryMeasures = [
            { measureDate: new Date('2019-10-05T18:51Z'), value: 101025 }, //
            { measureDate: new Date('2019-10-06T18:52Z'), value: 101325 }, //
            { measureDate: new Date('2019-10-07T18:53Z'), value: 101355 }, // Mock
            { measureDate: new Date('2019-10-08T18:54Z'), value: 101125 }, //
            { measureDate: new Date('2019-10-09T18:55Z'), value: 101425 } //
        ];
        const humidityHistoryMeasures = [
            { measureDate: new Date('2019-10-05T18:51Z'), value: 50 }, //
            { measureDate: new Date('2019-10-06T18:52Z'), value: 52 }, //
            { measureDate: new Date('2019-10-07T18:53Z'), value: 55 }, // Mock
            { measureDate: new Date('2019-10-08T18:54Z'), value: 49 }, //
            { measureDate: new Date('2019-10-09T18:55Z'), value: 58 } //
        ];
        const movementHistoryMeasures = [
            { measureDate: new Date('2019-10-05T18:51Z'), value: 0 }, //
            { measureDate: new Date('2019-10-06T18:52Z'), value: 0 }, //
            { measureDate: new Date('2019-10-07T18:53Z'), value: 0 }, // Mock
            { measureDate: new Date('2019-10-08T18:54Z'), value: 1 }, //
            { measureDate: new Date('2019-10-09T18:55Z'), value: 0 } //
        ];
        const aleatoire = Math.random();
        if (aleatoire > 0.1) {
            if (measuresType === 'luminosity') {
                return of(luminosityHistoryMeasures).pipe(delay(aleatoire * 1000 + 500));
            } else if (measuresType === 'temperature') {
                return of(temperatureHistoryMeasures).pipe(delay(aleatoire * 1000 + 500));
            } else if (measuresType === 'pressure') {
                return of(pressureHistoryMeasures).pipe(delay(aleatoire * 1000 + 500));
            } else if (measuresType === 'humidity') {
                return of(humidityHistoryMeasures).pipe(delay(aleatoire * 1000 + 500));
            } else if (measuresType === 'movement') {
                return of(movementHistoryMeasures).pipe(delay(aleatoire * 1000 + 500));
            } else {
                return of(temperatureHistoryMeasures).pipe(delay(aleatoire * 1000 + 500));
            }
        } else {
            return throwError(new Error('Data loading failed. Please try again later.'));
        }
    }

}
