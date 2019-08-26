import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsHomeComponent } from './locations-home.component';

describe('LocationsHomeComponent', () => {
  let component: LocationsHomeComponent;
  let fixture: ComponentFixture<LocationsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
