import { TestService } from './../../test.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fcomp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
  providers: [TestService]
})
export class Comp1Component implements OnInit {

  constructor(private test: TestService) {
    setInterval(() => { test.sample++; console.log(`Console log from featureComp1: ${test.sample}`); }, 2000);
  }

  ngOnInit() {
  }

}
