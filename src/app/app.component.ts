import { Component, VERSION } from '@angular/core';
import { slideInAnimation } from './route-animation';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations: [ slideInAnimation ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
}
