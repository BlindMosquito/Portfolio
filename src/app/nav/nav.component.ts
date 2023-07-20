import { Component } from '@angular/core';
import {offsetSegment} from "@angular/compiler-cli/src/ngtsc/sourcemaps/src/segment_marker";
import {of} from "rxjs";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  scroll(id:string):void {
    const width:number = window.innerWidth;
    let element = document.getElementById(id);
    if(!element) throw new Error(`${id} could not be found to scroll to`);
    if(width > 600) this.scrollLarge(element);
    else if(width <= 420) this.scrollSmall(element);
    else this.scrollMedium(element);
  }

  scrollLarge(element:HTMLElement):void {
    const yOffset:number = -10;
    let offset = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    this.scrollPage(offset);
  }

  scrollMedium(element:HTMLElement): void {
    const yOffset:number = -170;
    let offset = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    this.scrollPage(offset);
  }

  scrollSmall(element:HTMLElement): void {
    const yOffset:number = -200;
    let offset = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    this.scrollPage(offset);
  }

  private scrollPage(yOffset:number): void {
    window.scrollTo({top: yOffset, behavior: 'smooth'});
  }
}
