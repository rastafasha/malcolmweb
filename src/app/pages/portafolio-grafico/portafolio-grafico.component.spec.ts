import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioGraficoComponent } from './portafolio-grafico.component';

describe('PortafolioGraficoComponent', () => {
  let component: PortafolioGraficoComponent;
  let fixture: ComponentFixture<PortafolioGraficoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortafolioGraficoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortafolioGraficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
