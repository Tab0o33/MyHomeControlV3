import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  config = [
    {icon: 'speed', label: 'Current measures', link: 'currentMeasure'},
    {icon: 'show_chart', label: 'Analyzes', link: 'analyzes' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
