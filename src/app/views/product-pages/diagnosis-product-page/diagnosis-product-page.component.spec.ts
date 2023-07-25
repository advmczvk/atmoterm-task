import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosisProductPageComponent } from './diagnosis-product-page.component';

describe('DiagnosisProductPageComponent', () => {
  let component: DiagnosisProductPageComponent;
  let fixture: ComponentFixture<DiagnosisProductPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosisProductPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosisProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
