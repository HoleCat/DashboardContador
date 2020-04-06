import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MayorcompraComponent } from './mayorcompra.component';

describe('MayorcompraComponent', () => {
  let component: MayorcompraComponent;
  let fixture: ComponentFixture<MayorcompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MayorcompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MayorcompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
