import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregarendirComponent } from './entregarendir.component';

describe('EntregarendirComponent', () => {
  let component: EntregarendirComponent;
  let fixture: ComponentFixture<EntregarendirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntregarendirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntregarendirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
