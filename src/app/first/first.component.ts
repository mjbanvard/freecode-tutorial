import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  title: string = 'This is my title';
  text: string = 'My First Component is Ready.';
  numbers: number[] = [29, 14, 70, 51, 33];

  isGreen: boolean = false;
  cash: number = 1.99;
  date = new Date();

  isDisabled: boolean = false;

  onClick() {
    console.log("Button has been clicked.");
  }

  constructor() { }

  ngOnInit(): void {
  }

}
