import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable()
export class PromptUpdateService {

  constructor(updates: SwUpdate) {
    updates.available.subscribe(event => {
      console.log(event);
      if (this.promptUser()) {
        updates.activateUpdate().then(() => document.location.reload());
      }
    });
  }

  promptUser() {
    return confirm('Click Ok to update');
  }
}


