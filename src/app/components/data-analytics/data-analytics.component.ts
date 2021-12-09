import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgbdDropdownBasic } from './dropdown-basic';


@Component({
  selector: 'app-data-analytics',
  templateUrl: './data-analytics.component.html',
  styleUrls: ['./data-analytics.component.scss']
})
export class DataAnalyticsComponent implements OnInit {
  // @ViewChild('canvasRef') canvasRef!: ElementRef ;
  // canvasElement: any;
  // canvasWidth: number;
  // canvasHeight: number;

  venueName: string = "empty";
  myData: Array<number> = [12, 19, 3, 5, 2, 3, 20];
  days: Array<string> = ['Monday', 'Tuesday', 'Wednesay', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  expensiveDay: string = this.days[this.arrayMax(this.myData)];
  recommendedDay: string = this.days[this.arrayMin(this.myData)];
  bgColorArr: Array<string> = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)'
  ];
  // xLabSize: number = 10;

  constructor() { 
    // this.canvasRef.nativeElement.focus();
    // const canvasElement = this.canvasRef.nativeElement;
    // const canvasWidth = canvasElement.width;
    // const canvasHeight = canvasElement.height;
    
    // const canvasElement = myCanvas.nativeElement;
    // const canvasWidth = this.canvasElement.width;
    // const canvasHeight = this.canvasElement.height;
    // this.xLabSize = canvasWidth;
  }

  // ngAfterViewInit() {
  //   this.canvasRef.nativeElement.focus();
  //   const canvasElement = this.canvasRef.nativeElement;
  //   this.canvasWidth = canvasElement.width;
  //   this.canvasHeight = canvasElement.height;

  //   this.xLabSize = 0.01 * this.canvasWidth;
  //   console.log("xlabsize: " + this.xLabSize)
  //   console.log("rounded: " + Math.round(this.xLabSize))
  // }

  ngOnInit() {
    // this.expensiveDay = this.days[Math.max.apply(Math, this.myData)];
    // this.recommendedDay = this.days[Math.min.apply(Math, this.myData)];
    console.log(this.expensiveDay)
    console.log(this.recommendedDay)


    const myChart = new Chart("myChart", {
      type: 'bar',
      data: {
        labels: this.days,
        datasets: [{
          data: this.myData,
          backgroundColor: this.bgColorArr,
          borderColor: this.bgColorArr,
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
                size: 12,
                weight: "600"
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
              callback: function(value, index){
                const valueLegend = this.getLabelForValue(index);
                return valueLegend.substring(0,3)
              },
              font:{
                family: "Quicksand",
                size: 10,
                weight: "550"
              }
            }
          }
        }
      }
    });
  }

  arrayMin(arr: Array<number>) {
    return arr.reduce((iMin, x, i, arr) => x < arr[iMin] ? i : iMin, 0);
  }

  arrayMax(arr: Array<number>) {
    return arr.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
  }
}

