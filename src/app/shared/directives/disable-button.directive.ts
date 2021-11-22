import { Directive, ElementRef, HostBinding, Input, SimpleChanges } from "@angular/core";

@Directive({
  selector: "[disableEvent]"
})
export class DisableEvent {
  @HostBinding("disabled") disableEvent: boolean;
  @Input("permissionFor") permissionFor: string[];
  @Input("permissions") permissions: string[];
  @Input("enable") enable: boolean;

  constructor(public el: ElementRef) {}

  ngOnInit(): void {
    if (this.enable !== undefined && this.enable !== null) {
      if (this.enable) {
        this.enableButton();
      } else {
        this.disableEvent = true;
      }
    } else {
      this.enableButton();
    }

    this.styleButton();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.enable) {
      if (changes.enable.currentValue) {
        this.enableButton();
      } else {
        this.disableEvent = true;
      }
      this.styleButton();
    }

    if (changes.permissions && changes.permissions.currentValue) {
      this.enableButton();
    }
  }

  enableButton() {
    if (!this.permissions || !this.permissionFor) {
      this.disableEvent = true;
      return;
    }

    if (this.permissions.some(v => this.permissionFor.includes(v))) {
      this.disableEvent = false;
    } else {
      this.disableEvent = true;
    }
  }

  styleButton() {
    if (!this.disableEvent) {
      // this.el.nativeElement.style.background = "#0086da";
    } else {
      // this.el.nativeElement.style.background = "#5A6872";
    }
  }
}
