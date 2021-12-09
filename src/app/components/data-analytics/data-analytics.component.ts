import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { MOCK_MALL_DATA } from 'src/app/MockData/mockMallData';
import { MallData } from 'src/app/Interfaces/MallData';
import Swal from 'sweetalert2';
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
  myChart1: any;
  myChart2: any;
  myChart3: any;
  showFlag: boolean = false;
  allMallData: MallData[] = MOCK_MALL_DATA;
  selectedMall: MallData = MOCK_MALL_DATA[0];
  mallIds: Array<number> = MOCK_MALL_DATA.map((v: MallData,i: number,arr: Array<MallData>) => (v.mallId));
  mallNames: Array<string> = MOCK_MALL_DATA.map((v: MallData,i: number,arr: Array<MallData>) => (v.mallName));
  weeklyPrices: Array<number> = this.selectedMall.weeklyPrices;
  days: Array<string> = ['Monday', 'Tuesday', 'Wednesay', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  expensiveDay: string = this.days[this.arrayMax(this.weeklyPrices)];
  recommendedDay: string = this.days[this.arrayMin(this.weeklyPrices)];
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

  ngOnInit() {
    Swal.fire({
      title:"Parking Data",
      icon: "info",
      text:"This page shows you various parking information like daily pricing for a parking location, allowing you to make informed parking choices.",
      footer:"Functionality is incomplete"
    })
    this.myChart1 = this.generateChart();
    // this.myChart2 = this.generateChart(MOCK_MALL_DATA[1], "myChart2");
    // this.myChart3 = this.generateChart(MOCK_MALL_DATA[2], "myChart3");

  }

  generateChart(){
    return new Chart("myChart1", {
      type: 'bar',
      data: {
        labels: this.days,
        datasets: [
          {
            label: MOCK_MALL_DATA[0].mallName,
            data: MOCK_MALL_DATA[0].weeklyPrices,
            backgroundColor: this.bgColorArr[0],
            borderColor: this.bgColorArr[0],
            borderWidth: 1
          },
          {
            label: MOCK_MALL_DATA[1].mallName,
            data: MOCK_MALL_DATA[1].weeklyPrices,
            backgroundColor: this.bgColorArr[1],
            borderColor: this.bgColorArr[1],
            borderWidth: 1
          },
          {
            label: MOCK_MALL_DATA[2].mallName,
            data: MOCK_MALL_DATA[2].weeklyPrices,
            backgroundColor: this.bgColorArr[2],
            borderColor: this.bgColorArr[2],
            borderWidth: 1
          }
        ]
      },

      options: {
        plugins: {
          legend: {

            align: 'center',
            display: true,
            position: 'bottom',
            labels:{
              boxWidth: 10,
              textAlign: "left",
              font:{
                size: 10
              }
            },
            fullSize: false
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

  // addOrUpdateChart(newMall: MallData){
  //   const newWeeklyPrices = newMall.weeklyPrices;
  //   console.log(newWeeklyPrices)
  //   console.log(newMall)

  //   this.myChart.data.datasets.data = newWeeklyPrices;
  //   this.myChart.update();
  // }


  arrayMin(arr: Array<number>) {
    return arr.reduce((iMin, x, i, arr) => x < arr[iMin] ? i : iMin, 0);
  }

  arrayMax(arr: Array<number>) {
    return arr.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
  }

  showChart(canvasId: string){
    const idLength = canvasId.length;
    const chartId: number = parseInt(canvasId.substring(idLength - 1, idLength)) - 1;
    return chartId === this.selectedMall.mallId;
  }

}

