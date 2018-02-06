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

export const routes: Routes = [
  { path: 'comp1', component: Comp1Component },
  { path: 'comp2', component: Comp2Component }
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
    RouterModule.forRoot(routes)
  ],
  providers: [LogUpdateService, CheckForUpdateService, PromptUpdateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
