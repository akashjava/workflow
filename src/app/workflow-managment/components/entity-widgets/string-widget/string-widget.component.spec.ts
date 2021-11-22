import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringWidgetComponent } from './string-widget.component';

describe('StringWidgetComponent', () => {
  let component: StringWidgetComponent;
  let fixture: ComponentFixture<StringWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
