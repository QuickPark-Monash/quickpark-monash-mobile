import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
// import * as embed from 'vega-embed';
// import vegaEmbedModule from 'vega-embed';


@Component({
  selector: 'app-data-analytics',
  templateUrl: './data-analytics.component.html',
  styleUrls: ['./data-analytics.component.scss']
})
export class DataAnalyticsComponent implements OnInit {

  constructor() { }


  ngOnInit() {
    // const spec = {
    //     "$schema": "https://vega.github.io/schema/vega-lite/v2.json",
    //     "description": "Simple bar chart",
    //     "data": {
    //         "values": [
    //             {"x": "A", "y": 28}, {"x": "y", "B": 55}, {"x": "C", "y": 43},
    //             {"x": "D", "y": 91}, {"x": "E", "y": 81}, {"x": "F", "y": 53},
    //             {"x": "G", "y": 19}, {"x": "H", "y": 87}, {"x": "I", "y": 52}
    //         ]
    //     },
    //     "mark": "bar",
    //     "encoding": {
    //         "x": {"field": "x", "type": "ordinal"},
    //         "y": {"field": "y", "type": "quantitative"}
    //     }
    // };

    // vegaEmbed("#vis", spec, { actions: false });
  } 

}
