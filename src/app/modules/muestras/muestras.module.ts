import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MayorcompraComponent } from './mayorcompra/mayorcompra.component';
import { MayorventaComponent } from './mayorventa/mayorventa.component';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MuestrasComponent } from './muestras.component';



@NgModule({
  declarations: [
    MuestrasComponent,
    MayorcompraComponent,
    MayorventaComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MayorcompraComponent,
    MayorventaComponent
  ]
})
export class MuestrasModule { }
