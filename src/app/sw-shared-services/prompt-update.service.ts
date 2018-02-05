import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable()
export class PromptUpdateService {

  constructor(updates: SwUpdate) {
    updates.available.subscribe(event => {
      if (this.promptUser(event)) {
        updates.activateUpdate().then(() => document.location.reload());
      }
    });
  }

  promptUser(event) {
    prompt('Click Ok to update');
    return true;
  }
}


