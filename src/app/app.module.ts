import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Srvice wroker
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


import { AppComponent } from './app.component';
import { LogUpdateService } from './sw-shared-services/log-update.service';
import { CheckForUpdateService } from './sw-shared-services/check-for-update.service';
import { PromptUpdateService } from './sw-shared-services/prompt-update.service';
import { Comp1Component } from './comp1/comp1/comp1.component';
import { Comp2Component } from './comp2/comp2/comp2.component';

// Routing
import { Routes, RouterModule } from '@angular/router';
import { TestService } from './test.service';
import { FeatureModule } from './feature/feature.module';

export const routes: Routes = [
  { path: 'comp1', component: Comp1Component },
  { path: 'comp2', component: Comp2Component },
  { path: 'component-aux', component: Comp1Component, outlet: 'sidebar' }
];


@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    RouterModule.forRoot(routes),
    FeatureModule
  ],
  providers: [LogUpdateService, CheckForUpdateService, PromptUpdateService, TestService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private test: TestService) {
    setInterval(() => console.log(`Console log from Root: ${test.sample}`), 2000);
  }
}
