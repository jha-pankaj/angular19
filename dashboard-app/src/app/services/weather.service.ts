import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class WeatherService {
  URL = "https://api.openweathermap.org/data/2.5/weather/";
  FORCASTURL = "https://api.openweathermap.org/data/2.5/forecast";
  headerInfo: any = new HttpHeaders({
    "x-rapidapi-host": "country-state-city-search-rest-api.p.rapidapi.com",
    "x-rapidapi-key": "bb62312e08msh0acefac3f1947d3p1a21a7jsn1448bca7c2d5", // Replace with your actual RapidAPI key
  });

  constructor(private http: HttpClient) {}

  getCityWeather(city: string) {
    const param = new HttpParams()
      .set("q", city)
      .set("appid", "35d3c9c4f6c9ec3207eecbf924f99046");

    return this.http.get<any>(this.URL, { params: param });
  }

  getWeatherForcast(lat: any, lon : any, cnt: number) {
    //lat={lat}&lon={lon}&cnt={cnt}&appid={API key}
    const param = new HttpParams().set("lat", lat).set("lon", lon).set("cnt", cnt).set("appid", "35d3c9c4f6c9ec3207eecbf924f99046");
    return this.http.get<any>(this.FORCASTURL, { params: param });
  }

  getForcastChartData(res:any){

    const xAxisData = res.list.map((o:any)=>o.dt_txt);
      const legentObj:any = [
      {
        id:"temp",
        value : "Temp"
      },
      {
        id:"feels_like",
        value : "Feel Like"
      }
      ,
      {
        id:"temp_min",
        value : "Min Temp"
      }
      ,
      {
        id:"temp_max",
        value : "Max Temp"
      }
     ]
     const legent = legentObj.map((o:any)=>o.value);
     const Series=[];
     for ( let leg in legentObj){
        let series = {
          name: legentObj[leg].value,
          type: 'line',
            data:  res.list.map((o:any)=>+o.main[legentObj[leg].id] -273.15)
        }
        Series.push(series);
     }

   const option = {
      title: {
        text: 'Weather Forecast'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: legent
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: xAxisData,
        axisTick:{
          interval :0
        }
      },
      yAxis: {
        type: 'value'
      },
      series:Series
    };

   return option;

  }
  /*

  option = {
  title: {
    text: 'Stacked Line'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
};*/

}
