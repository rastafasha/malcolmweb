import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolucioneswebComponent } from './solucionesweb.component';

describe('SolucioneswebComponent', () => {
  let component: SolucioneswebComponent;
  let fixture: ComponentFixture<SolucioneswebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolucioneswebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolucioneswebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
