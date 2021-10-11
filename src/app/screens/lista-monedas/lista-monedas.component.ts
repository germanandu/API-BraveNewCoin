import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api/api.service'
import { MonedasI } from 'src/app/interfaces/monedas.interface'; 
@Component({
  selector: 'app-lista-monedas',
  templateUrl: './lista-monedas.component.html',
  styleUrls: ['./lista-monedas.component.scss']
})
export class ListaMonedasComponent implements OnInit {

  monedas: MonedasI[] = []

  constructor(private api:ApiService) { }
  
  ngOnInit(): void {
    this.api.getAllMonedas().subscribe(data =>{
      this.monedas = data.content
      console.log(this.monedas)
    }) 
  }

}
