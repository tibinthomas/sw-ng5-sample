import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestService } from '../test.service';
import { Comp1Component } from './comp1/comp1.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Comp1Component],
  providers: [],
  exports: [Comp1Component]
})

export class FeatureModule {
  constructor(private test: TestService) {
    setInterval(() => {console.log(`Console log from feature Module: ${test.sample}`); }, 2000);
  }
}
