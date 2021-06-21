import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewuserbyNameComponent } from './viewuserby-name.component';

describe('ViewuserbyNameComponent', () => {
  let component: ViewuserbyNameComponent;
  let fixture: ComponentFixture<ViewuserbyNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewuserbyNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewuserbyNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
