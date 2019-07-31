import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleWeatherComponent } from './single-weather.component';

describe('SingleWeatherComponent', () => {
  let component: SingleWeatherComponent;
  let fixture: ComponentFixture<SingleWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
