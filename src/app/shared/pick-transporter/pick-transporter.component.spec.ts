import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickTransporterComponent } from './pick-transporter.component';

describe('PickTransporterComponent', () => {
  let component: PickTransporterComponent;
  let fixture: ComponentFixture<PickTransporterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickTransporterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickTransporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
