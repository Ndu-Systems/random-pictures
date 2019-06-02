import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  showVid=false;
  constructor() { }

  ngOnInit() {
  }

  togleVid(val:boolean){
    this.showVid = val;
  }

}
