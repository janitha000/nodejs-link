import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleLinkCompanyComponent } from './single-link-company.component';

describe('SingleLinkCompanyComponent', () => {
  let component: SingleLinkCompanyComponent;
  let fixture: ComponentFixture<SingleLinkCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleLinkCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleLinkCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
