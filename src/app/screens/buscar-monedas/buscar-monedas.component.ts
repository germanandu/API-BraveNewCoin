import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api/api.service'
import { MonedasI } from 'src/app/interfaces/monedas.interface';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-buscar-monedas',
  templateUrl: './buscar-monedas.component.html',
  styleUrls: ['./buscar-monedas.component.scss']
})

export class BuscarMonedasComponent implements OnInit {
  monedas: MonedasI[] = []
  buscarForm = new FormGroup({
    simbolo: new FormControl('BTC',Validators.required)
  })
  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.api.getMonedaWithSymbol(this.buscarForm.value.simbolo.toUpperCase()).subscribe(data =>{
      this.monedas = data.content
      console.log(this.monedas)
    })
  }

}
