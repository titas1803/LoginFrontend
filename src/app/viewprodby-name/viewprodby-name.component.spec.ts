import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewprodbyNameComponent } from './viewprodby-name.component';

describe('ViewprodbyNameComponent', () => {
  let component: ViewprodbyNameComponent;
  let fixture: ComponentFixture<ViewprodbyNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewprodbyNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewprodbyNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
