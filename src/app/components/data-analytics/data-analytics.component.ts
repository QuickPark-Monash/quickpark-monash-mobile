import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
// import * as embed from 'vega-embed';
// import vegaEmbedModule from 'vega-embed';


@Component({
  selector: 'app-data-analytics',
  templateUrl: './data-analytics.component.html',
  styleUrls: ['./data-analytics.component.scss']
})
export class DataAnalyticsComponent implements OnInit {
  venueName: string = "empty";
  constructor() { }


  ngOnInit() {
    const myChart = new Chart("myChart", {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3, 10],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            title:{
              text: "Pricing (RM)",
              // color: "#"
              display: true,
              align: 'center',
              font:{
                family: "Quicksand",
                size: 20,
                weight: "500"
              }
            },
            grid: {
              lineWidth: 0,
              borderWidth: 0,
              display: false
            },
            ticks:{
              display: false
            },
            beginAtZero: true
          },
          x:{
            grid: {
              display:false
            },
            ticks:{
              font:{
                family: "Quicksand",
                size: 10,
                weight: "400"
              }
            }

          }
        }
      }
    });

  }

}
