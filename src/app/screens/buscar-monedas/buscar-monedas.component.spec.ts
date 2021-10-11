import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarMonedasComponent } from './buscar-monedas.component';

describe('BuscarMonedasComponent', () => {
  let component: BuscarMonedasComponent;
  let fixture: ComponentFixture<BuscarMonedasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarMonedasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarMonedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
