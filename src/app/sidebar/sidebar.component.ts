import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  config = [
    {icon: 'straighten', label: 'Current measures', link: 'currentMeasures'},
    {icon: 'show_chart', label: 'Analyzes', link: 'analyzes' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
