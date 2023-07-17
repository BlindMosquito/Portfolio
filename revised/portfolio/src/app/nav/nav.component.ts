import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  Scroll(id:string):void {
    let element = document.getElementById(id);
    if(!element) return;
    element.scrollIntoView({behavior: 'smooth'});
  }

  LinkToGitHub():void {
    window.location.href="https://github.com/BlindMosquito";
  }

}
