import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  scroll(id:string):void {
    let element = document.getElementById(id);
    if(!element) return;
    element.scrollIntoView({behavior: 'smooth'});
  }
}
