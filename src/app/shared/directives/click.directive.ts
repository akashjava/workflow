import { Directive, Renderer2, ElementRef, EventEmitter, Output, Input, SimpleChanges, HostListener } from "@angular/core";
import { Subscription } from "rxjs";

@Directive({
  selector: "[click.directive]"
})
export class ClickDirective {
  @Output("click.directive") passEvent = new EventEmitter();
  @Input("permissionFor") permissionFor: string[];
  @Input("permissions") permissions: string[];

  isPermitted: boolean = false;
  subscription$: Subscription = new Subscription();

  @HostListener("mouseenter")
  onMouseEnter() {
    if (!this.isPermitted) {
      this.renderer.appendChild(this.elementRef.nativeElement, this.tip);
    }
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    if (!this.isPermitted) {
      this.renderer.removeChild(this.elementRef.nativeElement, this.tip);
    }
  }

  tip: any;
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    this.tip = this.renderer.createElement("div");
    this.renderer.addClass(this.tip, "tip");
    let text = this.renderer.createText("No permission");
    this.renderer.appendChild(this.tip, text);
  }

  ngOnInit(): void {
    this.subscription$.add(
      this.renderer.listen(this.elementRef.nativeElement, "click", event => {
        if (this.isPermitted) {
          this.passEvent.emit(event);
        }
      })
    );

    this.subscription$.add(
      this.renderer.listen(this.elementRef.nativeElement, "keyup", event => {
        if (this.isPermitted) {
          this.passEvent.emit(event);
        }
      })
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.checkForPermission();
  }

  checkForPermission() {
    if (this.permissionFor && this.permissions) {
      this.isPermitted = this.permissions.some(v => this.permissionFor.includes(v));
    }
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
