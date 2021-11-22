import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailWidgetComponent } from './email-widget.component';

describe('EmailWidgetComponent', () => {
  let component: EmailWidgetComponent;
  let fixture: ComponentFixture<EmailWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
