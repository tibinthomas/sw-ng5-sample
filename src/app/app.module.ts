import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Srvice wroker
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


import { AppComponent } from './app.component';
import { LogUpdateService } from './sw-shared-services/log-update.service';
import { CheckForUpdateService } from './sw-shared-services/check-for-update.service';
import { PromptUpdateService } from './sw-shared-services/prompt-update.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [LogUpdateService, CheckForUpdateService, PromptUpdateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
