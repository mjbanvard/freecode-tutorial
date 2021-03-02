import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  text: string = 'My First Component is Ready.';
  numbers: number[] = [29, 14, 70, 51, 33];
  
  constructor() { }

  ngOnInit(): void {
  }

}
