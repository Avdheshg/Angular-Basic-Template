import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: ` <p>This is a warning</p> `,
  styles: [
    `
      h3 {
        color: red;
      }
    `,
  ],
})
export class WarningAlertComponent {}
