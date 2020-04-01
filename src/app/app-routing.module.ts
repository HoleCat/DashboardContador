import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { MuestrasComponent } from './modules/muestras/muestras.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { CajaComponent } from './modules/caja/caja.component';


const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }, {
    path: 'muestras',
    component: MuestrasComponent
  }, {
    path: 'caja',
    component: CajaComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
