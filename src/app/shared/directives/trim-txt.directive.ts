import { Directive, Renderer2, ElementRef } from "@angular/core";
import { DefaultValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Directive({
  selector: "input[trim]",
  host: { "(keyup)": "valOnChange($event.target)" },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TrimText,
      multi: true
    }
  ]
})
export class TrimText extends DefaultValueAccessor {
  onChange = _ => {};
  onTouched = () => {};

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef<any>
  ) {
    super(renderer, elementRef, false);
  }

  writeValue(value: any): void {
    if (value != null) {
      super.writeValue(value.toString().trim());
    }
  }

  valOnChange(el : any) {
    let val = el.value.trim();
    this.renderer.setValue(el,val);
    this.onChange(val);
  }
}
