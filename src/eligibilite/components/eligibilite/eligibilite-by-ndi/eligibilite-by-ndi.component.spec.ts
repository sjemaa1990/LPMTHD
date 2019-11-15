import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibiliteByNdiComponent } from './eligibilite-by-ndi.component';

describe('EligibiliteByNdiComponent', () => {
  let component: EligibiliteByNdiComponent;
  let fixture: ComponentFixture<EligibiliteByNdiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EligibiliteByNdiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EligibiliteByNdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
