import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MayorventaComponent } from './mayorventa.component';

describe('MayorventaComponent', () => {
  let component: MayorventaComponent;
  let fixture: ComponentFixture<MayorventaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MayorventaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MayorventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
