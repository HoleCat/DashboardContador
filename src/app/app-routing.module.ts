import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { MuestrasComponent } from './modules/muestras/muestras.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { CajaComponent } from './modules/caja/caja.component';
import { MayorcompraComponent } from './modules/muestras/mayorcompra/mayorcompra.component';
import { MayorventaComponent } from './modules/muestras/mayorventa/mayorventa.component';
import { LiquidacionComponent } from './modules/caja/liquidacion/liquidacion.component';
import { CajachicaComponent } from './modules/caja/cajachica/cajachica.component';
import { EntregarendirComponent } from './modules/caja/entregarendir/entregarendir.component';
import { CajaresumenComponent } from './modules/caja/cajaresumen/cajaresumen.component';
import { ParametrosComponent } from './modules/caja/parametros/parametros.component';
import { TabladetalleComponent } from './modules/caja/tabladetalle/tabladetalle.component';


const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }, {
    path: 'muestras',
    component: MuestrasComponent,
    children: [{
      path: 'mayorcompras',
      component: MayorcompraComponent
    },
    {
      path: 'mayorventas',
      component: MayorventaComponent
    }]
  }, {
    path: 'caja',
    component: CajaComponent,
    children: [{
      path: 'liquidacion',
      component: LiquidacionComponent
    },
    {
      path: 'cajachica',
      component: CajachicaComponent
    },
    {
      path: 'entregarendir',
      component: EntregarendirComponent,
      children: [{
        path: 'tabladetalle',
        component: TabladetalleComponent
      }]
    },
    {
      path: 'cajaresumen',
      component: CajaresumenComponent
    },
    {
      path: 'parametros',
      component: ParametrosComponent
    }]
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
