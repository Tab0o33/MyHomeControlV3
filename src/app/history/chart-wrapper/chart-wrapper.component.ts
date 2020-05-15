import { Component, OnInit, OnDestroy, Input, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { Subscription, Observable } from 'rxjs';
import { HistoryService } from '../history.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-chart-wrapper',
  templateUrl: './chart-wrapper.component.html',
  styleUrls: ['./chart-wrapper.component.scss']
})
export class ChartWrapperComponent implements OnInit, OnDestroy {

  @Input() selectedTheme: string;

  @Input() set measuresType(measuresType: string) {
    this._measuresType = measuresType;
    this.getGoodMeasuresTypeDataFromService(measuresType);
  }
  // tslint:disable-next-line: variable-name
  private _measuresType: string;

  historyMeasures$: Observable<any[]>;
  measuresSubscription: Subscription;

  measuresValues = [];
  measuresDates = [];

  displayedValues = [];
  chosenDates = [];

  historyChart: Chart;

  errorAPI: string;
  loading = true;

  private chartConfig = [
    { measuresType: 'luminosity', type: 'bar', borderColor: '#ffc107', backgroundColor: 'rgba(255, 193, 7, 0.3)' },
    { measuresType: 'temperature', type: 'line', borderColor: '#dc3545', backgroundColor: 'rgba(220, 53, 69, 0.3)' },
    { measuresType: 'pressure', type: 'line', borderColor: '#6c757d', backgroundColor: 'rgba(108, 117, 125, 0.3)' },
    { measuresType: 'humidity', type: 'line', borderColor: '#007bff', backgroundColor: 'rgba(0, 123, 255, 0.3)' },
    { measuresType: 'movement', type: 'bar', borderColor: '#28a745', backgroundColor: 'rgba(40, 167, 69, 0.3)' },
  ];

  chartData;
  chartOptions;

  constructor(
    private historyService: HistoryService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void { }

  getSpinnerColor(): string {
    if (this.selectedTheme === 'classic') {
      return 'text-primary';
    } else if (this.selectedTheme === 'dark') {
      return 'text-light';
    } else if (this.selectedTheme === 'ironman') {
      return 'text-light';
    } else {
      return 'text-primary';
    }
  }

  getGoodMeasuresTypeDataFromService(measuresType: string) {
    if (typeof (this.historyChart) !== 'undefined') {
      this.historyChart.destroy();
    }
    this.loading = true;
    this.historyMeasures$ = this.historyService.getHistoryMeasuresFromType$(measuresType);
    this.measuresSubscription = this.subscribeToHistory(this.historyMeasures$);
  }

  subscribeToHistory(historyMeasures: Observable<any>): Subscription {
    this.measuresValues = [];
    this.measuresDates = [];
    return historyMeasures.subscribe(
      (measures: any[]) => {
        this.errorAPI = null;
        this.loading = false;
        this.measuresValues = this.mapMeasuresValues(measures);
        this.measuresDates = this.mapMeasuresDates(measures);
        this.displayedValues = this.measuresValues;
        this.chosenDates = this.measuresDates;

        const yLabels = this.handleYLabels(this._measuresType);
        const yLabelsCallBack = this.handleYLabelsCallBack(this._measuresType, yLabels);

        this.chartOptions = this.initChartOptions(100000, yLabelsCallBack);

        const index = this.chartConfig.findIndex(el => el.measuresType === this._measuresType);
        this.chartData = this.initChartData(
          this.chartConfig[index].type,
          this.chartConfig[index].borderColor,
          this.chartConfig[index].backgroundColor,
          this.chartOptions
        );

        this.initChart(this.chartData);
      },
      (error) => {
        this.loading = false;
        this.errorAPI = error;
        if (typeof (this.historyChart) !== 'undefined') {
          this.historyChart.destroy();
        }
        this.notificationService.popToast();
      }
    );
  }

  mapMeasuresValues(measures: any[]): any[] {
    const resu = [];
    measures.forEach(measure => {
      resu.push(measure.value);
    });
    return resu;
  }

  mapMeasuresDates(measures: any[]): any[] {
    const resu = [];
    measures.forEach(measure => {
      resu.push(measure.measureDate);
    });
    return resu;
  }

  handleYLabels(measuresType: string) {
    if (measuresType === 'luminosity') {
      return { 0: 'nuit', 1: 'sombre', 2: 'clair', 3: 'jour' };
    } else if (measuresType === 'movement') {
      return { 0: 'non', 1: 'oui' };
    } else {
      return null;
    }
  }

  handleYLabelsCallBack(measuresType: string, yLabels) {
    if (measuresType === 'luminosity' || measuresType === 'movement') {
      return value => {
        return yLabels[value];
      };
    } else if (measuresType === 'temperature' || measuresType === 'pressure' || measuresType === 'humidity') {
      return value => {
        return value + 'unit';
      };
    }
  }

  initChartOptions(suggestedMin: number, yLabelsCallBack: any): any {
    const options = {
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display: true
        }],
        yAxes: [{
          display: true,
          ticks: {
            suggestedMin
          }
        }],
      }
    };

    if (yLabelsCallBack) {
      // tslint:disable-next-line: no-string-literal
      options.scales.yAxes[0].ticks['callback'] = yLabelsCallBack;
    }
    return options;
  }

  initChartData(type: string, borderColor: string, backgroundColor: string, options: any): any {
    let formattedDates = [];
    formattedDates = this.initFormattedDates();
    const chartData = {
      type,
      data: {
        labels: formattedDates,
        datasets: [
          {
            data: this.displayedValues,
            borderColor,
            backgroundColor,
            borderWidth: 1
          }
        ]
      },
      options
    };
    return chartData;
  }

  initFormattedDates(): any[] {
    const formattedDates = [];
    this.chosenDates.forEach((d) => {
      formattedDates.push(d.toLocaleTimeString('en', { day: 'numeric' }));
    });
    return formattedDates;
  }

  initChart(chartData: any): void {
    if (typeof (this.historyChart) !== 'undefined') {
      this.historyChart.destroy();
    }
    this.historyChart = new Chart('historyCanvas', chartData);
    this.historyChart.update();
  }

  ngOnDestroy(): void {
    this.measuresSubscription.unsubscribe();
  }

}
