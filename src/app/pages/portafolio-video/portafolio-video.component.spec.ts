import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortafolioVideoComponent } from './portafolio-video.component';

describe('PortafolioVideoComponent', () => {
  let component: PortafolioVideoComponent;
  let fixture: ComponentFixture<PortafolioVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortafolioVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortafolioVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
