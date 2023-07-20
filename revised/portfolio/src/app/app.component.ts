import {AfterViewInit, Component, ElementRef, HostListener, ViewChild} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio';
  private components: Map<string, Component>;

  private heights:number[];

  constructor() {
    this.components = new Map<string, Component>();
    this.heights = new Array<number>(4);
  }

  ngAfterViewInit() {
    this.addComponent("abt");
    this.addComponent("exp");
    this.addComponent("prj");
    this.addComponent("skl");
    this.setHeights();
  }

  addComponent(id:string):void {
    let component : Component = document.getElementById(id) as Component;
    if(!component) throw new Error(`${id} could not be found in the document`);
    this.components.set(id, component);
  }

  private getComponent(id:string):Component {
    let component :Component | undefined = this.components.get(id);
    if(!component) throw new Error(`${component} could not be found to scroll to`);
    return component;
  }

  private getHeight(id:string):number {
    return (this.getComponent(id) as HTMLElement).offsetTop;
  }

  setHeights():void {
    const width:number = window.innerWidth;
    let heightAdjust:number = 0;

    if(width > 600) heightAdjust = 160;
    else if(width < 420) heightAdjust = 230;
    else heightAdjust = 200;

    this.heights[0] = this.getHeight("abt") - heightAdjust;
    this.heights[1] = this.getHeight("exp") - heightAdjust;
    this.heights[2] = this.getHeight("prj") - heightAdjust;
    this.heights[3] = this.getHeight("skl") - heightAdjust;
  }

  @HostListener('window:scroll', ['$event']) onWindowScroll() {
    if(!this.heights) return;
    let height: number = window.pageYOffset;
    if(height < this.heights[1]) this.linkSelection("abt");
    else if(height < this.heights[2]) this.linkSelection("exp");
    else if(height < this.heights[3]) this.linkSelection("prj")
    else this.linkSelection("skl");
  }

  @HostListener('window:resize', ['$event']) onWindowResize() {
    this.setHeights()
  }

  private linkSelection(id:string) : void {
    switch (id) {
      case "abt":
        this.selectLink("abt-link");
        this.deselectLink("exp-link");
        this.deselectLink("prj-link");
        this.deselectLink("skl-link");
        break;
      case "exp":
        this.deselectLink("abt-link");
        this.selectLink("exp-link");
        this.deselectLink("prj-link");
        this.deselectLink("skl-link");
        break;
      case "prj":
        this.deselectLink("abt-link");
        this.deselectLink("exp-link");
        this.selectLink("prj-link");
        this.deselectLink("skl-link");
        break;
      default:
        this.deselectLink("abt-link");
        this.deselectLink("exp-link");
        this.deselectLink("prj-link");
        this.selectLink("skl-link");
        break;
    }
  }

  private selectLink(id:string) {
    let element = document.getElementById(id);
    if(!element) throw new Error("The element could not be found to update link");
    element.classList.add("nav-selected");
  }

  private deselectLink(id:string) {
    let element = document.getElementById(id);
    if(!element) throw new Error("The element could not be found to update link");
    element.classList.remove("nav-selected");
  }


}
