import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaresumenComponent } from './cajaresumen.component';

describe('CajaresumenComponent', () => {
  let component: CajaresumenComponent;
  let fixture: ComponentFixture<CajaresumenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CajaresumenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CajaresumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
