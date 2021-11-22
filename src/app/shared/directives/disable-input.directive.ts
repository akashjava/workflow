import { Directive, HostBinding, ElementRef } from "@angular/core";

@Directive({
  selector: "[disableInput]"
})
export class DisableInputDirective {
  
  @HostBinding("disabled") disable: boolean;
  constructor(private el: ElementRef) {
    this.disable = true
  }
}
