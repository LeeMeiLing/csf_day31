import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {

  @Input()
  title= "Sun"

  @Input()
  imageUrl="/assets/Sun.png"
}
