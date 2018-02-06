import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable()
export class PromptUpdateService {

  constructor(updates: SwUpdate) {
    updates.available.subscribe(event => {
      if (this.promptUser(event)) {
        updates.activateUpdate().then(() => document.location.reload(true));
      }
    });
  }

  promptUser(event) {
    return confirm('Click Ok to update');
  }
}


