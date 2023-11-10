import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariodocIntComponent } from './formulariodoc-int.component';

describe('FormulariodocIntComponent', () => {
  let component: FormulariodocIntComponent;
  let fixture: ComponentFixture<FormulariodocIntComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulariodocIntComponent]
    });
    fixture = TestBed.createComponent(FormulariodocIntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
