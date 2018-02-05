import { Injectable } from '@angular/core';

import { interval } from 'rxjs/observable/interval';

// SW
import { SwUpdate } from '@angular/service-worker';

@Injectable()
export class CheckForUpdateService {

  constructor(sw: SwUpdate) {
  interval(6 * 60 * 60).subscribe(() =>  {
    sw.checkForUpdate();
    console.log('App has been checked for update'); });
  }

}
