import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalwebComponent } from './modalweb.component';

describe('ModalwebComponent', () => {
  let component: ModalwebComponent;
  let fixture: ComponentFixture<ModalwebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalwebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalwebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
