import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibiliteByAdressComponent } from './eligibilite-by-adress.component';

describe('EligibiliteByAdressComponent', () => {
  let component: EligibiliteByAdressComponent;
  let fixture: ComponentFixture<EligibiliteByAdressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EligibiliteByAdressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EligibiliteByAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
