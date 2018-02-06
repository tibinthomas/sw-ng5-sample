import { CheckForUpdateService } from './sw-shared-services/check-for-update.service';
import { Component, OnInit } from '@angular/core';
import { LogUpdateService } from './sw-shared-services/log-update.service';
import { PromptUpdateService } from './sw-shared-services/prompt-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( // private swLogUpdate: LogUpdateService,
              // private swCheckUpdate: CheckForUpdateService,
              private swPromptUpdate: PromptUpdateService
            ) {}
  title = 'V9';
}
