import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHospitalsComponent } from './list-hospitals.component';

describe('ListHospitalsComponent', () => {
  let component: ListHospitalsComponent;
  let fixture: ComponentFixture<ListHospitalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListHospitalsComponent]
    });
    fixture = TestBed.createComponent(ListHospitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
