import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto'
import { MallData } from 'src/app/Interfaces/MallData';
import { MOCK_MALL_DATA } from 'src/app/MockData/mockMallData';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  myChart: any;
  allMallData: MallData[] = MOCK_MALL_DATA;
  selectedMall: MallData = MOCK_MALL_DATA[0];
  mallIds: Array<string> = MOCK_MALL_DATA.map((v: MallData,i: number,arr: Array<MallData>) => (v.mallId));
  mallNames: Array<string> = MOCK_MALL_DATA.map((v: MallData,i: number,arr: Array<MallData>) => (v.mallName));
  weeklyPrices: Array<number> = this.selectedMall.parkingLot.weeklyPrices;

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
  chartData = {
    labels: this.days,
    datasets: [{
      data: this.selectedMall.parkingLot.weeklyPrices,
      backgroundColor: this.bgColorArr,
      borderColor: this.bgColorArr,
      borderWidth: 1
    }]
  }

  constructor() { }

  ngOnInit(): void {
    this.myChart = new Chart("myChart", {
      type: 'bar',
      data: this.chartData,

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
