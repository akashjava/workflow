import { Directive, ElementRef, Input, SimpleChanges, OnChanges } from "@angular/core";

@Directive({
  selector: "[disableClickEvent]"
})
export class DisableClickEventDirective implements OnChanges {
  // @HostListener("mouseenter") onMouseEnter() {
  //   this.disabledEvent();
  // }

  @Input("permissionFor") permissionFor: string[];
  @Input("permissions") permissions: string[];
  @Input("enable") enable: boolean;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    if (this.enable !== undefined && this.enable !== null) {
      if (this.enable) {
        this.disabledEvent();
      } else {
        try {
          this.el.nativeElement.style.pointerEvents = "none";
        } catch (error) {}
      }
    } else {
      this.disabledEvent();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.enable) {
      if (changes.enable.currentValue) {
        this.disabledEvent();
      } else {
        this.el.nativeElement.style.pointerEvents = "none";
      }
    }
    if (changes.permissions && changes.permissions.currentValue) {
      this.disabledEvent();
    }
  }

  disabledEvent() {
    if (!this.permissionFor || !this.permissions) {
      this.el.nativeElement.style.pointerEvents = "none";
      return;
    }

    if (this.permissionFor.some(p => this.permissions.includes(p))) {
      this.el.nativeElement.style.pointerEvents = "auto";
    } else {
      this.el.nativeElement.style.pointerEvents = "none";
    }
  }
}
