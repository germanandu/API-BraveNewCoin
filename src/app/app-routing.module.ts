import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarMonedasComponent } from './screens/buscar-monedas/buscar-monedas.component';
import { ListaMonedasComponent } from './screens/lista-monedas/lista-monedas.component';

const routes: Routes = [
  {path: 'lista-monedas', component:ListaMonedasComponent},
  {path: 'buscar-monedas', component:BuscarMonedasComponent},
  {path: '**', component:ListaMonedasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
