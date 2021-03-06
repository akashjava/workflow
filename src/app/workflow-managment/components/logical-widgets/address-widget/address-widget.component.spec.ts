import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressWidgetComponent } from './address-widget.component';

describe('AddressWidgetComponent', () => {
  let component: AddressWidgetComponent;
  let fixture: ComponentFixture<AddressWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
