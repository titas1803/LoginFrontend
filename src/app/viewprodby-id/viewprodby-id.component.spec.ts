import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewprodbyIdComponent } from './viewprodby-id.component';

describe('ViewprodbyIdComponent', () => {
  let component: ViewprodbyIdComponent;
  let fixture: ComponentFixture<ViewprodbyIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewprodbyIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewprodbyIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
