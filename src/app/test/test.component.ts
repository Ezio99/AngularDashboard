import { Component, OnInit } from '@angular/core';
// import * as Highcharts from 'highcharts';
import * as Highcharts from 'highcharts/highstock';
import HC_data from "highcharts/modules/data";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Highcharts.chart('container', {

      title: {
          text: 'Global temperature change'
      },
  
      subtitle: {
          text: 'Data input from CSV'
      },
  
      data: {
          csv: document.getElementById('csv').innerHTML
      }
    });
  }

  
}
