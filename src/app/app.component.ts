import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day31';
  value = 10;
  historicalValue:number[]=[]

  // can omit ; in typescript
  valueChanged(v:number){
    console.info('>>> value changed',v)
    this.value = v
    this.historicalValue.push(v)
  }

  deleteValue(i:number){
    this.historicalValue.splice(i,1)
  }
}
