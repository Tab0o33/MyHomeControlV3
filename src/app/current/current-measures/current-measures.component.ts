import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-measures',
  templateUrl: './current-measures.component.html',
  styleUrls: ['./current-measures.component.scss']
})
export class CurrentMeasuresComponent implements OnInit {

  currentMeasuresConfig = [
    {label: 'Luminosity', value: 'Sombre', icon: 'wb_sunny', color: 'warning'},
    {label: 'Temperature', value: '24°C', icon: 'fireplace', color: 'danger'}, //other icon choice : ac_unit
    {label: 'Pressure', value: '1013,25hPa', icon: 'speed', color: 'secondary'},
    {label: 'Humidity', value: '48%', icon: 'opacity', color: 'primary'},
    {label: 'Movement', value: 'Oui', icon: 'pets', color: 'success'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
