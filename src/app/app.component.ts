import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
    h3 {
      color: blue
    }
  `]
})
export class AppComponent {

}

/*
  For Building a new Component
    Make directories
    In .ts
      export the class
      tell Angular about this class that this is a component
        Define "selector" and "templateUrl"
      Import the "Component"
    In .html
      Define suitable tags for the define component using "selector"
    In app.component.ts
      tell Angular about the new component

  Creating using the CLI
    ng g c componentName

*/