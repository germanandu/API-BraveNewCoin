import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuscarMonedasComponent } from './buscar-monedas.component';

describe('BuscarMonedasComponent', () => {
  let component: BuscarMonedasComponent;
  let fixture: ComponentFixture<BuscarMonedasComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarMonedasComponent ],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ]
      
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

  it('TEST a Form Group ELEMENT COUNT', () => {
    const formElement = fixture.debugElement.nativeElement.querySelector('#buscarForm');
    const inputElement = formElement.querySelectorAll('input');
    expect(inputElement.length).toEqual(1);
  });

});
